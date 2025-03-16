"use client"
import { useRouter } from "next/navigation"
export function LogoutOption({setLogoutKey}:{setLogoutKey:(cur:boolean)=>void}){
    const router=useRouter();
    const tex:React.CSSProperties={
        textShadow:`2px 2px 10px aqua`
    }
    return(
        <div className={`flex flex-col font-mono text-sm sm:text-lg text-white w-fit mr-3`} >
            <button className="border-b-2 border-[#CCCCFF]"
            onClick={()=>router.replace('/')} style={tex}>Logout</button>
            <button className="border-b-2 border-[#CCCCFF]"
             onClick={() => setLogoutKey(true)} style={tex}>Cancel</button>
        </div>
    )
}