import { Button } from "./Button";
import {Cpu,ShoppingCart} from 'lucide-react'
import { Link } from 'react-router-dom'

function NavBar(){
    return (
        <> 
        <div className="flex pl-10 pt-5 pr-10 pb-5 border-0 border-b-1 border border-[#c9def4] border-opacity-5">
            <div id="logo" className="flex w-60 items-center">
                <Cpu className="bg-[#296eb4] p-2 rounded-xl" color="#ffffff" size={50}></Cpu>
                <p className="pl-3 text-md font-bold">PC BUILDER SHOP</p>
            </div>
            <div id="blank" className="w-[60%]"></div>
            <div className="flex gap-4 font-semibold">
                <Link to="/"><Button text="Home" color="#ffffff" holdcolor="#d6d6d6" /></Link>
                <Link to="/contact"><Button text="Contact" color="#ffffff" holdcolor="#d6d6d6" /></Link>
                <Link to="/build"><Button text="Build" color="#ffffff" holdcolor="#d6d6d6" /></Link>
                <Button text={<><ShoppingCart></ShoppingCart><p>Build</p></>} color="#296eb4" holdcolor="#296eb4"/>
            </div>
        </div>
        
        </>
    )
}

export default NavBar;