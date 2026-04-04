import { Button } from "./Button";
import {Cpu,ShoppingCart} from 'lucide-react'
import { Link } from 'react-router-dom'

function NavBar(){
    return (
        <> 
        <div className="flex pl-10 pt-5 pr-10 pb-5 border-0 border-b-1 border border-[#c9def4] border-opacity-5">
            <div id="logo" className="flex items-center justify-center">
                <Cpu className="bg-[#296eb4] p-2 rounded-xl" color="#ffffff" size={50}></Cpu>
                <p className="hidden sm:flex sm:pl-3 sm:text-md sm:font-bold">PC BUILDER SHOP</p>
            </div>
            <div id="blank" className="w-[60%]"></div>
            <div className="flex items-center justify-end w-auto">
                <div className="hidden sm:flex gap-4 font-semibold items-center w-[20%] justify-end">
                    <Link to="/"><Button text="Home" color="#ffffff" holdcolor="#d6d6d6" /></Link>
                    <Link to="/contact"><Button text="Contact" color="#ffffff" holdcolor="#d6d6d6" /></Link>
                    <Link to="/build"><Button text="Build" color="#ffffff" holdcolor="#d6d6d6" /></Link>
                    <Button className="flex items-center gap-2" text={<><ShoppingCart></ShoppingCart><p className="py-3">Build</p></>} color="#296eb4" holdcolor="#296eb4"/>
                </div>
                <div className="sm:hidden sm:w-0 flex items-center justify-end gap-4 font-semibold w-[20%] justify-end">
                    <Link to="/contact"><Button text="Contact" color="#ffffff" holdcolor="#d6d6d6" /></Link>
                    <Button className="flex items-center gap-2" text={<><ShoppingCart></ShoppingCart><p className="py-3">Build</p></>} color="#296eb4" holdcolor="#296eb4"/>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default NavBar;