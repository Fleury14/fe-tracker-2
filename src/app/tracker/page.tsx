'use client'

import { useSearchParams } from "next/navigation"
import KIDisplay from "../ui/ki/ki-display";
import { defaultKI } from "../lib/default-data";

export default function Page() {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams)

    const flags = params.get("flags");
    const bgColor = params.get("bgColor");
    const color:string = bgColor ? bgColor : "black";

    return (
        <div className="flex" style={{ backgroundColor: color }}>
            <div className="w-96 border-2 border-double h-screen flex flex-col">
            <div className="flex">
                <div className="w-1/2"><KIDisplay ki={defaultKI} /></div>
                <div className="w-1/2">Bosses</div>
            </div>
            <div>Objectives</div>
            <div>Available Locations</div>
            <div>Timer</div>
            </div>
            
        </div>
    )
}