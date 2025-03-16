"use client"
import Link from "next/link"
export function LoginOptions(){

    const tex:React.CSSProperties={
        textShadow:`2px 2px 4px aqua`
    }
    const box:React.CSSProperties={
       boxShadow:`1px 1px 4px aqua`
    }

    return(
    <div className="flex w-[80%] sm:w-[40%] flex-col justify-evenly items-center gap-y-10 
    bg-[#ffffff16] rounded-lg">
        <h1 className={`text-lg sm:text-4xl font-mono text-[whitesmoke]
        mt-4`} style={tex}>Welcome to retail store</h1>
     <h1 className={`text-sm sm:text-3xl font-mono text-[whitesmoke]
        mt-4`} style={tex}>Please login in to continue...</h1>
     <div className="flex w-full justify-evenly items-center">
        <Link href={`/admin/adminlogin`}><button className={`border-2 border-white text-white bg-[#0000003a]
            rounded-md cursor-pointer hover:bg-white hover:text-[aqua] text-sm sm:text-lg font-mono`}
            style={box}>ADMIN</button></Link>
        <Link href={`/homepage`}><button className={`border-2 border-white text-white bg-[#0000003a]
            rounded-md cursor-pointer hover:bg-white hover:text-[aqua] text-sm sm:text-lg font-mono`}
            style={box}>USER</button></Link>
     </div>
     <p className="text-white font-mono" style={tex}>(select accordingly)</p>
    </div>)
}