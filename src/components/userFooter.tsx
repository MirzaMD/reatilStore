"use client"
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";
export function UserFooter(){
    const tex: React.CSSProperties = {
        textShadow: `2px 2px 4px aqua`
    };

    return (
        <footer className="w-full h-[115px] flex justify-evenly items-center font-mono text-white bg-[#0c0c36]" style={tex}>
            <p>Strictly meant for shopping</p>
            <Link href="mailto:mohammedhussain2727@gmail.com">
                <FaEnvelope className="text-3xl sm:text-4xl text-white" />
            </Link>
        </footer>
    );
}
