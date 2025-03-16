"use client"
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { LogoutOption } from "./logoutOption";
import { usePathname } from "next/navigation";
export function UserHeader(){
    const tex:React.CSSProperties={
        textShadow:`2px 2px 4px aqua`
    }
    const path=usePathname();
    const [ logoutKey, setLogoutKey]=useState<boolean>(true);
    function updateLogoutKey(){
        setLogoutKey(false);
    }
    return(
    <div className="w-full h-[115px] flex flex-col justify-center items-center"> 
     <h1 
     className="text-white font-mono font-extrabold text-xl sm:text-3xl mt-3 sm:mt-6"
     style={tex}><u>Retail Store</u></h1>
     <span className="w-full flex justify-end" >
    {logoutKey?(<FaBars className="text-white text-lg sm:text-2xl mr-4 mb-2" style={tex}
     onClick={updateLogoutKey}/>)
    :
    (<LogoutOption setLogoutKey={setLogoutKey}/>)
    } 
    </span>
     <div className="w-full flex justify-around items-center text-white
     text-sm sm:text-lg font-mono" style={tex}>   
    <Link className={path==="/homepage"?"border-b-2 border-white":"border-none"}
    href="/homepage">HOME</Link>
    <Link className={path==="/about"?"border-b-2 border-white":"border-none"}
    href="/about">ABOUT</Link>
    <Link className={path==="/contactus"?"border-b-2 border-white":"border-none"}
    href="/contactus">CONTACT US</Link>
    </div>
    </div>)
}