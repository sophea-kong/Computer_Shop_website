import React from "react";
import { ShoppingCart } from "lucide-react";

function Button({ text,color,holdcolor }) {
    let c = "flex items-center px-4 my-2 rounded-xl bg-[" + color + "] text-white hover:bg-["+ holdcolor +"]"
    if(color=="#ffffff"){
        c = "flex items-center px-4 my-2 rounded-xl bg-[" + color + "] text-black hover:bg-["+ holdcolor +"]"
    }
    if (holdcolor=="#ffffff"){
        c += " hover:text-black";
    }
    return (
    <button className={c}>{text}</button>
    );
}

export { Button };