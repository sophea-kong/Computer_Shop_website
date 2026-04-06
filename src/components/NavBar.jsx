import { useState } from "react";
import { Button } from "./Button";
import { Cpu, ShoppingCart, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative flex items-center justify-between px-6 md:px-10 h-24 border-b border-[#c9def4] border-opacity-20 bg-[#fbfef9] w-full z-50">
            
            {/* LOGO SECTION */}
            <div id="logo" className="flex items-center gap-3 shrink-0">
                <Cpu className="bg-[#296eb4] p-2 rounded-xl" color="#ffffff" size={48}></Cpu>
                <p className="text-md font-bold tracking-tight">PC BUILDER SHOP</p>
            </div>

            {/* MOBILE MENU BUTTON (Only shows on small screens) */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-[#296eb4]">
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* NAV LINKS SECTION */}
            {/* Logic: Hidden on mobile unless 'isOpen' is true, Flex on medium screens (md:) */}
            <div className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-24 left-0 w-full md:w-auto bg-[#fbfef9] md:bg-transparent border-b md:border-none border-[#c9def4] p-6 md:p-0 items-center gap-6 font-semibold shadow-lg md:shadow-none`}>
                <Link to="/" onClick={() => setIsOpen(false)}>
                    <Button text="Home" color="#ffffff" holdcolor="#d6d6d6" />
                </Link>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Button text="Contact" color="#ffffff" holdcolor="#d6d6d6" />
                </Link>
                <Link to="/build" onClick={() => setIsOpen(false)}>
                    <Button text="Build" color="#ffffff" holdcolor="#d6d6d6" />
                </Link>
                
                {/* CART BUTTON */}
                <Button 
                    text={
                        <div className="flex items-center gap-2">
                            <ShoppingCart size={20} />
                            <span>Build</span>
                        </div>
                    } 
                    color="#296eb4" 
                    holdcolor="#1e508a" 
                />
            </div>
        </nav>
    )
}

export default NavBar;