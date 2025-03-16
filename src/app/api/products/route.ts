import { dbconnect } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import RS from "@/app/models/retailStore";

export async function GET(){
    await dbconnect();
    try{
    const data=await RS.find({});
    return NextResponse.json(data, { status: 200})
    }catch{
        return NextResponse.json({error:"GET function error"},{ status: 400})
    }
}

export async function POST(req:Request){
await dbconnect();
try{
    const { item, price, brand, gender } = await req.json()
    const newEntry=new RS({ item, price, brand, gender });
    await newEntry.save();
    return NextResponse.json({status:201});
}
catch{
    return NextResponse.json({error:"Couldn't post"},{status:500})
}
}
export async function DELETE(req:Request){
    await dbconnect()
    try{
        const { id }= await req.json()

        if(!id) throw new Error("Invalid id.");

        const deletedID=await RS.findByIdAndDelete(id);
      
        return NextResponse.json({message:"deleted succesfully"},{status:202})
    }
    catch{
        return NextResponse.json({message:"Failded ot delete",status:405})
    }
}