"use client"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
const adminSchema=z.object({
    name:z.string().min(1,"Enter the admin name.")
    .refine((val)=>val.toLowerCase().trim()==="hussain",{
        message:"Incorrect admin."
    }),
    pass:z.string().min(1,"password can't be blank ")
    .refine((val)=>val.toLowerCase()==="mmhb046",
    {message:"invalid password"}), 
});
type TadminSchema=z.infer<typeof adminSchema>
export default function AdminLoginPage(){
    const{ register, handleSubmit, formState:{errors,isSubmitting},
    reset}=useForm({ resolver:zodResolver(adminSchema)})
   const [ name, setName ] = useState<string>('') ;
   const [ pass, setPass ] = useState<string>('') ;
   const router=useRouter();
   function updateName(e:React.ChangeEvent<HTMLInputElement>):void{
    setName(e.target.value)
   }
   function updatePass(e:React.ChangeEvent<HTMLInputElement>):void{
    setPass(e.target.value)
   }
   async function submitting(data:TadminSchema):Promise<void>{
       console.log(data);
       reset();
       router.push("/admin/adminpage")
   }
   return(
    <div className="w-screen h-screen flex flex-col justify-center items-center">
     <h1 className="font-mono text-lg sm:text-2xl text-white">Welcome to the retail store</h1>
     <br/>
     <p className="font-mono text-sm sm:text-lg text-white">login to continue</p>   
   <form onSubmit={handleSubmit(submitting)}
   className={`w-[300px] sm:w-[500px] h-[250px] sm:h-[300px]
   flex flex-col justify-center items-center gap-2 text-white font-mono`}>
    <label htmlFor="adname">Admin Name:</label>
    <input 
    id="adname"
    {...register("name")}
    type="text" 
    onChange={updateName} 
    className="w-[80%] border-2 border-[whitesmoke] rounded-lg"
    value={name}
    placeholder="enter the administrator name"/>
    {errors.name && (
        <p className="text-red-600">{`${errors.name.message}`}</p>
    )}
    <label htmlFor="adPass">Password:</label>
    <input
     id="adPass"
     {...register("pass")}
     type="password" 
     onChange={updatePass} 
     className="w-[80%] border-2 border-[whitesmoke] rounded-lg"
     value={pass}
     placeholder="enter the password"/>
    {errors.pass && (
        <p className="text-red-600">{`${errors.pass.message}`}</p>
    )}
    <button type="submit"
    className={!isSubmitting?
    "bg-white text-[#030320] p-1 sm:p-2 cursor-pointer rounded-3xl"
    :
    "disabled bg-gray-600 text-[#070740] p-1 sm:p-2 cursor-wait rounded-3xl"}>
    {isSubmitting?"logging in...":"login"}
    </button>
   </form>
   </div>)
}