import { useState } from "react"

export default function Build() {
    const [priceRange, setPriceRange] = useState(2000);
    const [brand, setBrand] = useState([]);
    const [selectedComponents, setSelectedComponents] = useState([]);

    const handleBrandChange = (value, isChecked) => {
        setBrand((prevBrand) =>
            isChecked ? [...prevBrand, value] : prevBrand.filter((b) => b !== value)
        );
    };

  return (
    <>
        <div className="flex flex-col justify-center p-10 gap-5 text-black bg-gradient-to-br from-white from-50% to-[#1d4ed8]">
            <h1>Build & Order</h1>
            <p>Choose your components and create your custom PC build</p>
        </div>

        <div>
            <div>
                {/* Search parts and Price Range grid and the component selection */}
                <div>
                    {/* search parts */}
                    <search>
                        <form action="">
                            <input type="text" placeholder="Search parts..." />
                            <button type="submit">Search</button>
                        </form>
                    </search>

                    <div>
                        {/* price range slider */}
                        <div>
                            <p>Price Range : 0$ - {priceRange}$</p>
                            <div>
                                <p>0$</p>
                                <p>2000$</p>
                            </div>
                            <input type="range" min="0" max="2000" 
                                value={priceRange} 
                                onChange={(event) => setPriceRange(event.target.value)} 
                            />
                        </div>

                        {/* brand */}
                        <div>
                            <p>Brand</p>
                            <input
                                type="checkbox"
                                name="brand"
                                id="intel"
                                value="intel"
                                checked={brand.includes("intel")}
                                onChange={(event) => handleBrandChange("intel", event.target.checked)}
                            />
                            <label htmlFor="intel">Intel</label>
                            <input
                                type="checkbox"
                                name="brand"
                                id="amd"
                                value="amd"
                                checked={brand.includes("amd")}
                                onChange={(event) => handleBrandChange("amd", event.target.checked)}
                            />
                            <label htmlFor="amd">AMD</label>
                        </div>

                        {/* sort by */}
                        <div>
                            <p>Sort by</p>
                            <nav>
                                <button>Price: Low to High</button>
                                <button>Price: High to Low</button>
                                <button>Highest Rating</button>
                                <button>Name (A-Z)</button>
                            </nav>
                        </div>
                    </div>
                </div>
            
                {/* parts selection */}
                <div>
                    <button>CPU</button>
                    <button>GPU</button>
                    <button>RAM</button>
                    <button>Storage</button>
                    <button>Motherboard</button>
                    <button>PSU</button>
                    <button>Cases</button>
                    <button>Cooler</button>
                </div>
            </div>

            {/* Start your build */}
            <div>
                {/* hide if the user has selected at least one component */}
                <div>
                    <h1>Start Your Build</h1>
                    <p>No parts selected yet. Begin by choosing a CPU to start building your perfect PC.</p>
                    <button onClick={() => setSelectedComponents(["CPU"])}>
                        Browse CPUs
                    </button>
                </div>

                {/* show the selected components */}
                <div>

                </div>
            </div>            

        </div>

        <div>
            {/* card for different components and the price and the add to build button */}
        </div>
    </>
  )
}   