"use client"
import { AdminHeader } from "@/components/adminHeader"
import { useEffect, useState, useCallback } from "react";

type detailsType={
    _id:string;
    item:string;
    price:number;
    brand:string;
    gender:string;
}
export default function AdminPage(){
const [ details, setDetails ] = useState<detailsType[]|null>(null)
    
     const gettingDetails=useCallback( async ()=>{
try{
    const response= await fetch("/api/products");
    if(!response.ok) throw new Error("Failed in admin fetching.");
    const data:detailsType[]=await response.json();
    setDetails(data);
}
catch(error){
    console.log(error)
}
     },[])
   
 useEffect(()=>{
    gettingDetails();
 },[gettingDetails])
 async function removingProduct(id:string){
    try{
        const response=await fetch("/api/products",
            {
                method:"DELETE",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({id})
            }  
        )
        if(!response.ok) throw new Error("button doesn't work")
        setDetails((cur)=>cur?.filter(p=>p._id!==id) || null)     
    }
    catch(err){
        console.log(err)
    }
 }
    return(
<div className={`w-full h-screen`}>
<AdminHeader/>
<div className="w-full h-full flex flex-col gap-y-4 mt-2">
{details?.map(v=>(
<div key={v._id} 
className="w-full flex h-[100px] sm:h-[100px] 
justify-center items-center bg-[#3902c3]
rounded-4xl">
 <ol 
 className="w-[80%] flex justify-evenly 
 items-center text-md sm:text-xl
 font-mono font-bold text-[whitesmoke] cursor-pointer">
<li>{v.brand}</li>
<li>{v.price}</li>
<li>{v.item}</li>
<li>{v.gender}</li>
 </ol>
 <button className="bg-red-600 text-white rounded-lg p-1 
 cursor-pointer active:bg-red-900 active:text-gray-500"
 onClick={()=>removingProduct(v._id)}>delete</button>
</div>
))}
</div>
    </div>
    )
}