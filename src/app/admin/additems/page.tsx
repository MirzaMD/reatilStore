"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { AdminHeader } from "@/components/adminHeader"
import { useForm } from "react-hook-form"
const detailsSchema=z.object({
    item:z.string().min(1,"Item can't be blank"),
    price:z.string().min(1,"price can't be blank")
           .transform((val)=>parseFloat(val))
          .refine((val)=>val>0,{
            message:"it can't be 0 or less"
          }),
    brand:z.string().min(1,"brand can't be blank"),  
    gender:z.string().min(1,"Item can't be blank")
            .refine((val)=> val.trim().toLowerCase()==="male" || val.toLowerCase().trim()==="female" || val.trim().toLowerCase()==="unisex",
        {
            message:"Gender could only be male, female or unisex"
        })    
})
type TdetailsSchema=z.infer<typeof detailsSchema>
export default function AddItemsPage(){
const { register, handleSubmit, reset, formState:{ errors, isSubmitting }}=useForm({resolver:zodResolver(detailsSchema)})
const tex:React.CSSProperties={
    textShadow:`2px 2px 4px aqua`
}
async function sub(data:TdetailsSchema){
    try{
       const response= await fetch("/api/products",
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        }
       )
       if(!response.ok) throw new Error ("Failed to save.")
       reset(); 
    } catch{
        console.log("Error saving")
    }
}
    return(
    <div className="w-full h-full text-[whitesmoke] flex flex-col justify-center items-center" style={tex}>
     <AdminHeader/>
     <div className="w-[300px] sm:w-[600px] mt-20 bg-[#1F305E] rounded-lg">
     <form onSubmit={handleSubmit(sub)}
     className="w-full h-full flex flex-col justify-center items-center gap-y-2">
        <label htmlFor="item">ITEM:</label>
        <input 
        type="text"
         id="item" 
        {...register("item")}
        className="w-[90%] bg-white text-[#0c0c36] text-sm sm:text-lg rounded-sm"
        placeholder="enter the item"/>
        {errors.item && (
            <p className="font-mono text-red-500">{`${errors.item.message}`}</p>
        )}
        <label htmlFor="price">PRICE:</label>
        <input 
        type="text"
         id="price" 
        {...register("price")}
        className="w-[90%] bg-white text-[#0c0c36] text-sm sm:text-lg rounded-sm"
        placeholder="enter the price"/>
        {errors.price && (
            <p className="font-mono text-red-500">{`${errors.price.message}`}</p>
        )}
        <label htmlFor="brand">BRAND:</label>
        <input 
        type="text"
         id="brand" 
        {...register("brand")}
        className="w-[90%] bg-white text-[#0c0c36] text-sm sm:text-lg rounded-sm"
        placeholder="enter the brand"/>
        {errors.brand && (
            <p className="font-mono text-red-500">{`${errors.brand.message}`}</p>
        )}
        <label htmlFor="gender">GENDER:</label>
        <input 
        type="text"
         id="gender" 
        {...register("gender")}
        className="w-[90%] bg-white text-[#0c0c36] text-sm sm:text-lg rounded-sm"
        placeholder="enter the gender"/>
        {errors.gender && (
            <p className="font-mono text-red-500">{`${errors.gender.message}`}</p>
        )}
        <button className="mt-4 rounded-xl p-1 bg-[whitesmoke] text-[#0c0c36] cursor-pointer    "
        type="submit">{isSubmitting?"saving...":"SAVE"}</button>
     </form>
     </div>
    </div>)
}