"use client";
import { useEffect, useCallback, useState } from "react";
import { Card } from "@/components/card";
type detailsType={
    _id:string;
    item:string;
    price:number;
    brand:string;
    gender:string
}
export default function HomePage() {
    const [details,setDetails]=useState<detailsType[]|null>(null)
    const gettingDetails = useCallback(async () => {
 const response = await fetch("/api/products");
        if (!response.ok) throw new Error("Fetching failure");

        const data = await response.json();
       setDetails(data);
    }, []);

    useEffect(() => {
        gettingDetails();
    }, [gettingDetails]);

    return (
 <div className=" h-screen">
     <div className=" grid grid-cols-2 sm:grid-cols-4 place-items-center mt-5 sm:mt-10 gap-y-2 sm:gap-y-10">
      {details?.map(v=>(
  <div key={v._id}>
      <Card item={v.item} price={v.price} brand={v.brand} gender={v.gender} />
  </div>
      ))}
     </div>
 </div>
    );
}
