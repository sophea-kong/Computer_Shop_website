import { useState, useEffect } from "react"
import Card  from '../components/ProductCard'
import '../styles.css'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import { ListFilterPlus, X, Minus, MoveRight, ShoppingCart, Search as SearchIcon, FileChartColumn, Star } from 'lucide-react'

import { CPUS, GPUS, RAMS, STORAGES, MOTHERBOARDS, PSUS, COOLERS, CASES } from '../assets/data/productsdata'

const BUILD_CATEGORIES = [
    "CPU",
    "GPU",
    "RAM",
    "Storage",
    "Motherboard",
    "PSU",
    "Cases",
    "Cooler",
];

const INITIAL_SELECTED_BUILD = {
    CPU: null,
    GPU: null,
    RAM: null,
    Storage: null,
    Motherboard: null,
    PSU: null,
    Cases: null,
    Cooler: null,
};

export default function Build() {
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const [isMobileBuildOpen, setIsMobileBuildOpen] = useState(false);

    const [priceRange, setPriceRange] = useState(2000);
    const [brand, setBrand] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const [sortBy, setSortBy] = useState("price-low-to-high");

    const [selectedCategory, setSelectedCategory] = useState("CPU");
    const [selectedBuild, setSelectedBuild] = useState(INITIAL_SELECTED_BUILD);

    const [inStockCpu, setInStockCpu] = useState(CPUS || []);
    const [inStockGpu] = useState(GPUS);
    const [inStockRam] = useState(RAMS);
    const [inStockStorage] = useState(STORAGES);
    const [inStockMotherboard] = useState(MOTHERBOARDS);
    const [inStockPsu] = useState(PSUS);
    const [inStockCases] = useState(CASES);
    const [inStockCooler] = useState(COOLERS);


    const handleBrandChange = (brandName, isChecked) => {
        setBrand(isChecked 
            ? [...brand, brandName] 
            : brand.filter(b => b !== brandName)
        );
    };

    const handleAddToBuild = (category, component) => {
        setSelectedBuild(prev => ({
            ...prev,
            [category]: component
        }));
    };

    const handleRemoveFromBuild = (category) => {
        setSelectedBuild(prev => ({
            ...prev,
            [category]: null
        }));
    };

    const addToCart = () => {
        console.log("Build added to cart:", selectedBuild);
        setSelectedBuild(INITIAL_SELECTED_BUILD);
    };

    const openFilterOverlay = () => {
        setIsMobileFilterOpen(true);
    };

    const handleCloseOverlay = () => {
        setIsMobileFilterOpen(false);
    };

    const handleOpenMobileBuild = () => {
        setIsMobileBuildOpen(true);
    };

    return (
        <>
            <Navbar />

            <BuildAndOrder />

            <SearchAndFilterAndBuild 
                setSelectedCategory={setSelectedCategory}
                openFilterOverlay={openFilterOverlay}
                setSearchQuery={setSearchQuery}
                searchQuery={searchQuery}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                brand={brand}
                handleBrandChange={handleBrandChange}
                setSortBy={setSortBy}
                sortBy={sortBy}
                selectedBuild={selectedBuild}
                handleRemoveFromBuild={handleRemoveFromBuild}
                addToCart={addToCart}
                handleOpenMobileBuild={handleOpenMobileBuild}
                selectedCategory={selectedCategory}
                handleAddToBuild={handleAddToBuild}
                inStockCpu={inStockCpu}
                inStockGpu={inStockGpu}
                inStockRam={inStockRam}
                inStockStorage={inStockStorage}
                inStockMotherboard={inStockMotherboard}
                inStockPsu={inStockPsu}
                inStockCases={inStockCases}
                inStockCooler={inStockCooler}
                isMobileBuildOpen={isMobileBuildOpen}
                setIsMobileBuildOpen={setIsMobileBuildOpen}
                isMobileFilterOpen={isMobileFilterOpen}
                handleCloseOverlay={handleCloseOverlay}
            />

            <Products 
                selectedCategory={selectedCategory}
                handleAddToBuild={handleAddToBuild}
                selectedBuild={selectedBuild}
                sortBy={sortBy}
                searchQuery={searchQuery}
                priceRange={priceRange}
                brand={brand}
                inStockCpu={inStockCpu}
                inStockGpu={inStockGpu}
                inStockRam={inStockRam}
                inStockStorage={inStockStorage}
                inStockMotherboard={inStockMotherboard}
                inStockPsu={inStockPsu}
                inStockCases={inStockCases}
                inStockCooler={inStockCooler}
            />

            <Footer />
        </>
    )
}

// -----------------------
//  JSX components
// -----------------------


function BuildAndOrder() {
    return (
        <div className="flex flex-col justify-center px-10 py-15 gap-5 text-black bg-gradient-to-br from-white from-50% to-[#296eb4] border-y-1 border-gray-300">
            <h1>Build & Order</h1>
            <p className="!text-[var(--text-muted)] !text-[25px]">Choose your components and create your custom PC build</p>
        </div>
    )
}

function SearchAndFilterAndBuild({setSelectedCategory, openFilterOverlay, setSearchQuery, searchQuery, priceRange, setPriceRange, brand, handleBrandChange, setSortBy, sortBy, selectedBuild, handleRemoveFromBuild, addToCart, handleOpenMobileBuild, selectedCategory, handleAddToBuild, inStockCpu, inStockGpu, inStockRam, inStockStorage, inStockMotherboard, inStockPsu, inStockCases, inStockCooler, isMobileBuildOpen, setIsMobileBuildOpen, isMobileFilterOpen, handleCloseOverlay}) {
    const getInStockByCategory = (category) => {
        switch(category) {
            case "CPU": return inStockCpu;
            case "GPU": return inStockGpu;
            case "RAM": return inStockRam;
            case "Storage": return inStockStorage;
            case "Motherboard": return inStockMotherboard;
            case "PSU": return inStockPsu;
            case "Cases": return inStockCases;
            case "Cooler": return inStockCooler;
            default: return [];
        }
    };

    return (
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10 p-10 bg-[#fbfef9]">
            <div className="col-span-2 gap-8 flex flex-col">
                {/* Search parts and Price Range grid and the component selection */}
                <SearchAndFilter 
                    openFilterOverlay={openFilterOverlay}
                    setSearchQuery={setSearchQuery}
                    searchQuery={searchQuery}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    brand={brand}
                    handleBrandChange={handleBrandChange}
                    setSortBy={setSortBy}
                    sortBy={sortBy}
                />
            
                {/* category selection */}
                <CategorySelection setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
            </div>

            {/* Start your build for desktop */}
            <div className="hidden lg:block">
                <StartYourBuild selectedBuild={selectedBuild} setSelectedCategory={setSelectedCategory} handleRemoveFromBuild={handleRemoveFromBuild} addToCart={addToCart}/>
            </div>

            {/* Start your build for mobile */}
            {isMobileBuildOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-[1px] z-50 flex items-end"
                    onClick={() => setIsMobileBuildOpen(false)}
                >
                    <div className="w-full bg-white rounded-t-lg">
                        <div className="p-5 border-b border-gray-300 flex justify-between items-center">
                            <h2>Your Build</h2>
                            <button onClick={() => setIsMobileBuildOpen(false)} className="p-2">
                                <X />
                            </button>
                        </div>
                        <StartYourBuild mobile={true} selectedBuild={selectedBuild} setSelectedCategory={setSelectedCategory} handleRemoveFromBuild={handleRemoveFromBuild} addToCart={addToCart}/>
                    </div>
                </div>
            )}

            {/* mobile filter overlay */}
            <div
                className={`fixed inset-0 bg-black/50 lg:hidden ${
                    isMobileFilterOpen ? "block" : "hidden"
                }`}
                onClick={handleCloseOverlay}
            >
                <div
                    className="flex flex-col border-1 border-gray-300 p-5 gap-3 w-2/3 bg-[#fbfef9] h-full"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* close btn */}
                    <button className="self-end focus:outline-none cursor-pointer"
                        onClick={handleCloseOverlay}
                    >
                        <X />
                    </button>
                        <Filter
                            priceRange={priceRange}
                            setPriceRange={setPriceRange}
                            brand={brand}
                            handleBrandChange={handleBrandChange}
                            setSortBy={setSortBy}
                            sortBy={sortBy}
                        />
                </div>
            </div>

            <div className="lg:hidden fixed bottom-0 left-0 right-0 p-5 bg-[#fbfef9] border-1 border-gray-300">
                <button
                    className="w-full py-3 bg-[#296eb4] !text-white rounded-lg gap-2"
                    onClick={handleOpenMobileBuild}
                >
                    View Build
                </button>
            </div>
        </div>
    )
}

function SearchAndFilter({openFilterOverlay, setSearchQuery, searchQuery, priceRange, setPriceRange, brand, handleBrandChange, setSortBy, sortBy}) {
    return (
    <div className="flex flex-col gap-8">
        <div className="flex items-center gap-3">

            {/* search bar component */}
            <div className="flex-1">
                <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
            </div>

            {/* open filter overlay button for mobile */}
            <button type="button" className="lg:hidden border-1 border-gray-300 p-3 rounded-[10px] cursor-pointer hover:bg-[#ff8811] "
                onClick={openFilterOverlay}
            >
                <ListFilterPlus />
            </button>

        </div>

        {/* filter for desktop */}
        <div className="hidden lg:block">
            <Filter priceRange={priceRange} setPriceRange={setPriceRange} brand={brand} handleBrandChange={handleBrandChange} setSortBy={setSortBy} sortBy={sortBy} />  
        </div>
    </div>
    )
}

function SearchBar({setSearchQuery, searchQuery}) {
    return (
        <search className="bg-gray-100 rounded-lg p-3">
            <form action="" className="w-full flex flex-row gap-2" onSubmit={(event) => event.preventDefault()} >
                <input
                    type="text"
                    placeholder="Search parts..."
                    className="w-full outline-none border-none"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                />
                <button type="submit" className="flex items-center gap-1">
                    <SearchIcon  />
                    Search
                </button>
            </form>
        </search>
    )
}

function Filter({priceRange, setPriceRange, brand, handleBrandChange, setSortBy, sortBy}) {
    const getSortByButtonClass = (sortOption) => {
        const baseClass = "w-full flex items-center justify-start rounded-lg px-3 py-2 transition hover:bg-[#ff8811] hover:text-white";
        return sortBy === sortOption 
            ? `${baseClass} bg-[#296eb4] !text-white` 
            : `${baseClass} border-gray-300`;   };

    return (
        <div className="flex flex-col border-0 lg:border-1 border-gray-300 rounded-[15px] lg:p-5 gap-3">
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
    )
}

function CategorySelection({ setSelectedCategory, selectedCategory}) {
    const getCategoryButtonClass = (category) => {
        const baseClass = "w-30 flex items-center justify-center rounded-[25px] px-3 py-2 transition hover:bg-[#ff8811] hover:text-white";
        return selectedCategory === category 
            ? `${baseClass} bg-[#296eb4] !text-white` 
            : `${baseClass} border-gray-300`;
    };

    return (
    <nav>
        <ul className="flex gap-5 flex-wrap">
            <li><button className={getCategoryButtonClass("CPU")} onClick={() => setSelectedCategory("CPU")}>CPU</button></li>
            <li><button className={getCategoryButtonClass("GPU")} onClick={() => setSelectedCategory("GPU")}>GPU</button></li>
            <li><button className={getCategoryButtonClass("RAM")} onClick={() => setSelectedCategory("RAM")}>RAM</button></li>
            <li><button className={getCategoryButtonClass("Storage")} onClick={() => setSelectedCategory("Storage")}>Storage</button></li>
            <li><button className={getCategoryButtonClass("Motherboard")} onClick={() => setSelectedCategory("Motherboard")}>Motherboard</button></li>
            <li><button className={getCategoryButtonClass("PSU")} onClick={() => setSelectedCategory("PSU")}>PSU</button></li>
            <li><button className={getCategoryButtonClass("Cases")} onClick={() => setSelectedCategory("Cases")}>Cases</button></li>
            <li><button className={getCategoryButtonClass("Cooler")} onClick={() => setSelectedCategory("Cooler")}>Cooler</button></li>
        </ul>
    {/* <p>what you choose : {selectedBuild}</p> */}
    </nav>
    )
}

function StartYourBuild({ mobile = false, selectedBuild, setSelectedCategory, handleRemoveFromBuild, addToCart }) {
    const selectedComponentsCount = Object.values(selectedBuild).filter((component) => component !== null).length;
        const wrapperClass = mobile ? "h-full" : "col-span-1 h-[650px]";
        const selectedContainerClass = mobile
            ? "max-h-[70vh] overflow-y-auto border-1 border-gray-300 rounded-[15px] p-5"
            : "h-full overflow-y-auto border-1 border-gray-300 rounded-[15px] p-5";

    return (
    <div className={wrapperClass}>
        {/* hide if the user has selected at least one component */}
        {selectedComponentsCount === 0 && (
            <div className="flex flex-col gap-5 items-center justify-center border-1 border-gray-300 rounded-[15px] px-10 py-20">
                
                <h1>Start Your Build</h1>
                <p className="text-center !text-[var(--text-muted)]">
                    No parts selected yet. Begin by choosing a CPU to start building your perfect PC.
                </p>
                <button className="flex py-2 px-4 border-1 bg-[#296eb4] hover:bg-[#ff8811] !text-white rounded-lg gap-2 items-center" 
                    onClick={() => setSelectedCategory("CPU")}>
                    Browse CPUs
                    <MoveRight className="!text-white" />
                </button>
            </div>
        )}

        {/* show the selected components */}
        {selectedComponentsCount > 0 && (
            <div className={selectedContainerClass}>
                <h1>Selected Components</h1>
                {BUILD_CATEGORIES.map((category) =>
                    renderSelectedComponentCard({
                        category,
                        component: selectedBuild[category],
                        onBrowseCategory: setSelectedCategory,
                        onRemove: handleRemoveFromBuild,
                    })
                )}
                {selectedComponentsCount === BUILD_CATEGORIES.length && (
                    <div>
                        <button className="w-full flex items-center justify-center py-3 bg-[#296eb4] hover:bg-[#ff8811] !text-white rounded-lg mt-5 gap-2"
                            onClick={addToCart}>
                            <ShoppingCart className="!text-white" />
                            Add Build to Cart
                        </button>
                    </div>
                )}
            </div>
        )}

    </div>
    )
}

function Products({ selectedCategory, handleAddToBuild, selectedBuild, sortBy, searchQuery, inStockCpu, inStockGpu, inStockRam, inStockStorage, inStockMotherboard, inStockPsu, inStockCases, inStockCooler, priceRange, brand }) {
    const getInStockByCategory = (category) => {
        switch (category) {
            case "CPU":
                return inStockCpu;
            case "GPU":
                return inStockGpu;
            case "RAM":
                return inStockRam;
            case "Storage":
                return inStockStorage;
            case "Motherboard":
                return inStockMotherboard;
            case "PSU":
                return inStockPsu;
            case "Cases":
                return inStockCases;
            case "Cooler":
                return inStockCooler;
            default:
                return [];
        }
    };

    return (
        <div>
            {selectedCategory && cardRenderer(
                selectedCategory,
                getInStockByCategory(selectedCategory),
                priceRange,
                brand,
                handleAddToBuild,
                selectedBuild,
                sortBy,
                searchQuery
            )}
        </div>
    );
}

// -----------------------
// Helper functions
// -----------------------

function cardRenderer(category, inStockComponents, priceRange, brand, onAddToBuild, selectedBuild, sortBy, searchQuery) {
    const selectedInCategory = selectedBuild[category];
    const normalizedQuery = searchQuery.trim().toLowerCase();

    const filteredComponents = inStockComponents.filter(
        (component) => {
            const matchesSearch =
                normalizedQuery.length === 0 ||
                component.name.toLowerCase().includes(normalizedQuery) ||
                component.category.toLowerCase().includes(normalizedQuery) ||
                component.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

            return (
            component.price <= priceRange &&
            (brand.length === 0 || brand.includes(component.category)) &&
            matchesSearch
            );
        }
    );

    const sortedComponents = [...filteredComponents].sort((a, b) => {
        if (sortBy === "price-low-to-high") {
            return a.price - b.price;
        }

        if (sortBy === "price-high-to-low") {
            return b.price - a.price;
        }

        if (sortBy === "highest-rating") {
            return b.rating - a.rating;
        }

        if (sortBy === "name-az") {
            return a.name.localeCompare(b.name);
        }

        return 0;
    });

    return (
        <div className="w-full px-10">
            <h1 className="mb-6">{category}</h1>
            <div className="flex flex-wrap gap-6 mb-10 justify-center md:justify-start items-center">
                {sortedComponents.map((component, index) => (
                    <Card
                        key={index}
                        ProductData={component}
                        isSelected={
                            Boolean(selectedInCategory) &&
                            selectedInCategory.name === component.name &&
                            selectedInCategory.price === component.price &&
                            selectedInCategory.image === component.image
                        }
                        addToBuild={() => onAddToBuild(category, component)}
                    />
                ))}
            </div>
        </div>
    )
}

function renderSelectedComponentCard({ category, component, onBrowseCategory, onRemove }) {
    if (!component) {
        return (
            <div key={category} className="flex items-center gap-3 border-1 border-gray-300 rounded-[15px] p-3 my-2">
                <div>
                    <h3 className="font-bold">{category}</h3>
                    <p className="text-sm !text-[var(--text-muted)]">No component selected.</p>
                </div>

                <div className="ml-auto">
                    <button
                        onClick={() => onBrowseCategory(category)}
                        className="flex items-center gap-2 py-2 px-3 border-1 bg-[#296eb4] hover:bg-[#ff8811] !text-white rounded-lg"
                    >
                        Add {category}
                        <MoveRight className="!text-white" />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div key={category} className="flex items-center gap-3 border-1 border-gray-300 rounded-[15px] p-3 my-2">
            <img src={component.image} alt={component.name} className="w-16 h-16 object-cover rounded-lg" />
            <div>
                <p className="text-sm !text-[var(--text-muted)]">{category}</p>
                <h3 className="font-bold">{component.name}</h3>
                <p className="text-lg font-extrabold">${component.price.toFixed(2)}</p>
            </div>

            <div className="ml-auto">
                <button onClick={(e) => {
                    onRemove(category);
                    e.stopPropagation()}} 
                    className="hover:bg-[#ff8811] hover:text-white rounded-full p-2 w-10 h-10 flex items-center justify-center"
                >
                    <Minus />
                </button>
            </div>
        </div>
    );
}