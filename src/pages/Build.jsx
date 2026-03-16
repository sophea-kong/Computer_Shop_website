import { useState } from "react"
import Card  from '../components/ProductCard'
import { Button } from '../components/Button'
import '../styles.css'
import Navbar from '../components/NavBar'
import {Cpu,ShoppingCart} from 'lucide-react'

import { CPUS } from '../assets/data/productsdata'

export default function Build() {
    const [priceRange, setPriceRange] = useState(2000);
    const [brand, setBrand] = useState([]);

    const [sortBy, setSortBy] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedComponents, setSelectedComponents] = useState([]);

    const [inStockCpu , setInStockCpu] = useState(CPUS);
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
        return `w-30 flex items-center justify-center rounded-[25px] px-3 py-2 transition hover:bg-gray-100 ${
            selectedCategory === category
                ? "border-[#296eb4] bg-[#296eb4] !text-white"
                : ""
        }`;
    }

    function getSortByButtonClass(sortOption) {
        return `w-full flex items-center justify-start rounded-[15px] px-3 py-2 transition hover:bg-gray-100 ${
            sortBy === sortOption
                ? "border-gray-300 bg-gray-300"
                : ""
        }`;
    }

    return (
    <>

        <Navbar></Navbar>

        {/* <Button text="Back to Home" color="#296eb4" holdcolor="#296eb4" /> */}
        <div className="flex flex-col justify-center px-10 py-15 gap-5 text-black bg-gradient-to-br from-white from-50% to-[#296eb4] border-y-1 border-gray-300">
            <h1>Build & Order</h1>
            <p className="!text-[var(--text-muted)] !text-[25px]">Choose your components and create your custom PC build</p>
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
                            <button type="submit" className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-[20px]">search</span>
                                Search
                            </button>
                        </form>
                    </search>

                    <div className="flex flex-col border-1 border-gray-300 rounded-[15px] p-5 gap-3">
                        {/* price range slider */}
                        <div className="flex flex-col gap-2">
                            <p>Price Range : 0$ - {priceRange}$</p>
                            <div>
                                <div className="flex flex-row justify-between !text-[var(--text-muted)]">
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
                                    <li><button className={getSortByButtonClass("price-low-to-high")} onClick={() => setSortBy("price-low-to-high")}>Price: Low to High</button></li>
                                    <li><button className={getSortByButtonClass("price-high-to-low")} onClick={() => setSortBy("price-high-to-low")}>Price: High to Low</button></li>
                                    <li><button className={getSortByButtonClass("highest-rating")} onClick={() => setSortBy("highest-rating")}>Highest Rating</button></li>
                                    <li><button className={getSortByButtonClass("name-az")} onClick={() => setSortBy("name-az")}>Name (A-Z)</button></li>
                                </ul>
                                {/* <p>sort selected: {sortBy}</p> */}
                            </nav>
                        </div>
                    </div>
                </div>
            
                {/* category selection */}
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
                        <p className="text-center !text-[var(--text-muted)]">
                            No parts selected yet. Begin by choosing a CPU to start building your perfect PC.
                        </p>
                        <button className="flex py-2 px-4 border-1 bg-[#296eb4] !text-white rounded-lg gap-2 items-center" 
                            onClick={() => setSelectedCategory("CPU")}>
                            Browse CPUs
                            <span className="material-symbols-outlined !text-white">
                                arrow_forward
                            </span>
                        </button>
                    </div>
                )}

                {/* show the selected components */}
                {selectedComponents.length > 0 && (
                    <div>
                        <h1>Selected Components</h1>
                        {/* {selectedComponents.map((component, index) => (
                        ))} */}
                    </div>
                )}

            </div>            

        </div>

        {/* card for different components and the price and the add to build button */}
        <div>
            {selectedCategory === "CPU" && (
                cardRenderer("CPU", inStockCpu, priceRange, brand)
            )}
            {selectedCategory === "GPU" && (
                cardRenderer("GPU", inStockGpu, priceRange, brand)
            )}
            {selectedCategory === "RAM" && (
                cardRenderer("RAM", inStockRam, priceRange, brand)
            )}
            {selectedCategory === "Storage" && (
                cardRenderer("Storage", inStockStorage, priceRange, brand)
            )}
            {selectedCategory === "Motherboard" && (
                cardRenderer("Motherboard", inStockMotherboard, priceRange, brand)
            )}
            {selectedCategory === "PSU" && (
                cardRenderer("PSU", inStockPsu, priceRange, brand)
            )}
            {selectedCategory === "Cases" && (
                cardRenderer("Cases", inStockCases, priceRange, brand)
            )}
            {selectedCategory === "Cooler" && (
                cardRenderer("Cooler", inStockCooler, priceRange, brand)
            )}
        </div>
    </>
    )
}

function cardRenderer(category, inStockComponents, priceRange, brand) {
    return (
        <div className="w-full px-10">
            <h1 className="mb-6">{category}</h1>
            <div className="flex gap-10">
                {inStockComponents.map((component, index) =>
                    component.price <= priceRange && (brand.length === 0 || brand.includes(component.category)) ? (
                        <Card
                            key={index}
                            ProductData={component}
                        />
                    ) : null
                )}
            </div>
        </div>
    )
}