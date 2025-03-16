"use client"
import { GiWoodenCrate } from "react-icons/gi";
type productsType={
    item:string;
    price:number;
    brand:string;
    gender:string;
}
export function Card({item,price,brand,gender}:productsType){
    const tex:React.CSSProperties={
        textShadow:`2px 2px 4px blue`
    }
    return(
    <div className={`h-[200px] sm:h-[300px] w-[160px] sm:w-[250px] flex flex-col justify-center items-center
    bg-[whitesmoke] border-2 border-aqua rounded-lg font-mono text-[black]`} style={tex}>
     <span 
     className={`h-[220px] sm:h-[320px] flex items-center justify-center
    rounded-sm`}>
        <GiWoodenCrate className={`text-[7rem] sm:text-[12rem] text-[aqua]`}/>
    </span>
    <h1 className={`text-lg text-xl`}><b>{brand.toUpperCase()}</b></h1>
    <ul className="flex flex-col justify-start items-center text-sm sm:text-lg">
        <li className={`text-red-600`}>Price:${price}</li>
        <li><i>{item.toUpperCase()}</i></li>
        <li>For:{gender.toUpperCase()}</li>
    </ul>
    </div>)
}