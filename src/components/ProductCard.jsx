import { BoxIcon, Tag } from "lucide-react";
import { Button } from "./Button";

function Tags({ text }){
    return (
        <>  
            <p className="flex bg-stone-50 flex-warp border-1 border-stone-200 items-center justify-center rounded-xl">{text}</p>
        </>
    )
}



function ProductCard({ ProductData, addToBuild }){
    return (
        <>
            <div className="flex-col gap-2 border-1 border-stone-400 items-center justify-center w-80 h-auto rounded-lg">
                <img src={ProductData.image} className="rounded-t-lg"></img>
                <div>
                    <div className="flex px-5 pt-2 text-stone-500">
                        <p className="w-[50%]">{ProductData.category}</p>
                        <p className="w-[50%] text-right">&#11088;{ProductData.rating}</p>
                    </div>
                    <div className="flex text-xl items-start justify-start px-6 pt-2 pb-9 font-bold">
                        <p>{ProductData.name}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-3 px-5">
                        {ProductData.tags.map((tag,index)=>(
                            <Tags text={tag} key={index}></Tags>
                        ))}
                    </div>
                    <div className="px-5 pt-4">
                        <p className="flex bg-stone-200 flex-warp border-1 border-stone-200 items-center justify-center rounded-lg text-sm w-[70%] font-bold">
                            <BoxIcon color="#296eb4"></BoxIcon>
                            In Stock : Pick up today
                        </p>
                    </div>
                    <div className="flex p-5">
                        <p className="flex text-[#296eb4] p-4 font-extrabold text-xl mr-auto">{ProductData.price + "$"}</p>
                        <Button text="Add to build" color="#296eb4" holdcolor="#296eb4" addToBuild={addToBuild}/>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default ProductCard;