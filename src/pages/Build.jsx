import { useState } from "react"
import Card  from '../components/ProductCard'
import { Button } from '../components/Button'

export default function Build() {
    const [priceRange, setPriceRange] = useState(2000);
    const [brand, setBrand] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedComponents, setSelectedComponents] = useState([]);

    const [inStockCpu , setInStockCpu] = useState([]);
    const [inStockGpu , setInStockGpu] = useState([]);
    const [inStockRam , setInStockRam] = useState([]);
    const [inStockStorage , setInStockStorage] = useState([]);
    const [inStockMotherboard , setInStockMotherboard] = useState([]);
    const [inStockPsu , setInStockPsu] = useState([]);
    const [inStockCases , setInStockCases] = useState([]);
    const [inStockCooler , setInStockCooler] = useState([]);

    function handleBrandChange(value, isChecked) {
        setBrand((prevBrand) =>
            isChecked ? [...prevBrand, value] : prevBrand.filter((b) => b !== value)
        );
        // console.log(brand);
    }

    function getCategoryButtonClass(category) {
        return `w-30 flex items-center justify-center rounded-lg px-3 py-2 border transition ${
            selectedCategory === category
                ? "border-blue-700 bg-blue-50 text-blue-800"
                : "border-gray-300 bg-white text-black"
        }`;
    }

    return (
    <>
        {/* <Button text="Back to Home" color="#296eb4" holdcolor="#296eb4" /> */}
        <div className="flex flex-col justify-center px-10 py-15 gap-5 text-black bg-gradient-to-br from-white from-50% to-[#296eb4] border-y-1 border-[#296eb4]">
            <h1>Build & Order</h1>
            <p>Choose your components and create your custom PC build</p>
        </div>

        <div className="grid grid-cols-3 gap-10 p-10 bg-[#fbfef9]">
            <div className="col-span-2 gap-8 flex flex-col">
                {/* Search parts and Price Range grid and the component selection */}
                <div className="flex flex-col gap-8">
                    {/* search parts */}
                    <search className="bg-gray-100 rounded-lg p-3">
                        <form action="" className="w-full flex flex-row gap-2">
                            <input type="text" placeholder="Search parts..." 
                                className="w-full outline-none border-none"
                            />
                            <button type="submit">Search</button>
                        </form>
                    </search>

                    <div className="flex flex-col border-1 border-gray-300 rounded-[15px] p-5 gap-3">
                        {/* price range slider */}
                        <div className="flex flex-col gap-2">
                            <p>Price Range : 0$ - {priceRange}$</p>
                            <div>
                                <div className="flex flex-row justify-between">
                                    <p>0$</p>
                                    <p>2000$</p>
                                </div>
                                <input type="range" min="0" max="2000" 
                                    className="w-full"
                                    value={priceRange} 
                                    onChange={(event) => setPriceRange(event.target.value)} 
                                />
                            </div>
                        </div>

                        {/* brand */}
                        <div className="flex flex-col gap-2">
                            <p>Brand</p>
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name="intel"
                                    value="intel"
                                    checked={brand.includes("intel")}
                                    onChange={(event) => handleBrandChange("intel", event.target.checked)}
                                />
                                Intel
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name="amd"
                                    value="amd"
                                    checked={brand.includes("amd")}
                                    onChange={(event) => handleBrandChange("amd", event.target.checked)}
                                />
                                AMD
                            </label>

                            {/* <p>brand you choose : {brand.join(", ")}</p> */}
                        </div>

                        {/* sort by */}
                        <div className="flex flex-col gap-2">
                            <p>Sort by</p>
                            <nav>
                                <ul className="flex flex-col gap-2">
                                    <li><button className="text-left w-full p-2">Price: Low to High</button></li>
                                    <li><button className="text-left w-full p-2">Price: High to Low</button></li>
                                    <li><button className="text-left w-full p-2">Highest Rating</button></li>
                                    <li><button className="text-left w-full p-2">Name (A-Z)</button></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            
                {/* parts selection */}
                <nav>
                    <ul className="flex gap-5">
                        <li><button className={getCategoryButtonClass("CPU")} onClick={() => setSelectedCategory("CPU")}>CPU</button></li>
                        <li><button className={getCategoryButtonClass("GPU")} onClick={() => setSelectedCategory("GPU")}>GPU</button></li>
                        <li><button className={getCategoryButtonClass("RAM")} onClick={() => setSelectedCategory("RAM")}>RAM</button></li>
                        <li><button className={getCategoryButtonClass("Storage")} onClick={() => setSelectedCategory("Storage")}>Storage</button></li>
                        <li><button className={getCategoryButtonClass("Motherboard")} onClick={() => setSelectedCategory("Motherboard")}>Motherboard</button></li>
                        <li><button className={getCategoryButtonClass("PSU")} onClick={() => setSelectedCategory("PSU")}>PSU</button></li>
                        <li><button className={getCategoryButtonClass("Cases")} onClick={() => setSelectedCategory("Cases")}>Cases</button></li>
                        <li><button className={getCategoryButtonClass("Cooler")} onClick={() => setSelectedCategory("Cooler")}>Cooler</button></li>
                    </ul>
                {/* <p>what you choose : {selectedComponents}</p> */}
                </nav>
            </div>

            {/* Start your build */}
            <div className="col-span-1  ">
                {/* hide if the user has selected at least one component */}
                {selectedComponents.length === 0 && (
                    <div className="flex flex-col gap-5 items-center justify-center border-1 border-gray-300 rounded-[15px] px-10 py-20">
                        <h1>Start Your Build</h1>
                        <p className="text-center">
                            No parts selected yet. Begin by choosing a CPU to start building your perfect PC.
                        </p>
                        <button className="flex py-2 px-4 border-1 bg-[#296eb4] text-white rounded-lg" 
                        onClick={() => setSelectedCategory("CPU")}>
                            Browse CPUs
                        </button>
                    </div>
                )}

                {/* show the selected components */}
                <div>

                </div>
            </div>            

        </div>

        {/* card for different components and the price and the add to build button */}
        <div>
            {selectedCategory === "CPU" && (
                cardRenderer("CPU", inStockCpu)
            )}
            {selectedCategory === "GPU" && (
                cardRenderer("GPU", inStockGpu)
            )}
            {selectedCategory === "RAM" && (
                cardRenderer("RAM", inStockRam)
            )}
            {selectedCategory === "Storage" && (
                cardRenderer("Storage", inStockStorage)
            )}
            {selectedCategory === "Motherboard" && (
                cardRenderer("Motherboard", inStockMotherboard)
            )}
            {selectedCategory === "PSU" && (
                cardRenderer("PSU", inStockPsu)
            )}
            {selectedCategory === "Cases" && (
                cardRenderer("Cases", inStockCases)
            )}
            {selectedCategory === "Cooler" && (
                cardRenderer("Cooler", inStockCooler)
            )}
        </div>
    </>
    )
}

function cardRenderer(category, inStockComponents) {
    return (
        <div>
            {inStockComponents.map((component, index) => (
                <Card
                    key={index}
                    ProductData={component}
                />
            ))}
            <h1>{category}</h1>
        </div>
    )
}