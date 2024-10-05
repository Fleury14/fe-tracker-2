'use client'

import { useSearchParams } from "next/navigation"
import { useState  } from "react";
import KIDisplay from "../ui/ki/ki-display";
import BossDisplay from "@/app/ui/bosses/boss-display";
import ObjectiveDisplay from "@/app/ui/objectives/obj-display";
import LocationDisplay from "@/app/ui/locations/location-display";
import { defaultKI, bosses, locations } from "../lib/default-data";
import parseFlags from "../lib/parse-flags";
import { FlagObject, KeyItems, Boss } from "../lib/interfaces";

export default function Page() {

    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams)

    const flags = params.get("flags");
    const bgColor = params.get("bgColor");
    const color:string = bgColor ? bgColor : "black";
    const assuredFlags:string = flags ? flags : "";
    const objectives:FlagObject = parseFlags(assuredFlags);

    const [ki, setKI] = useState(defaultKI);
    const [bossList, setBossList] = useState(bosses);
    const [locationList, setLocationList] = useState(locations);

    function toggleKI(target:string) {
        setKI((prevState) => ({
            ...prevState,
            [target]: !prevState[target as keyof KeyItems]
        }));
    }

    function toggleBoss(id:number, val: boolean) {
        setBossList((prevState) => {
            const target = prevState.find(boss => boss.id === id);
            const newBoss = bossList.filter(boss => boss.id !== id);
            if (target) {
                target.toggle = !val;
                return [...newBoss, target];
            }
            return prevState;
        })
    }
    
    console.log('boss state', bossList);

    return (
        <div className="flex" style={{ backgroundColor: color }}>
            <div className="w-96 border-2 border-double h-screen flex flex-col">
                <div className="flex h-1/4">
                    <div className="w-1/2"><KIDisplay ki={ki} toggleKI={(target: string) => toggleKI(target)}/></div>
                    <div className="w-1/2"><BossDisplay bosses={bossList} toggleBoss={(id: number, val: boolean) => toggleBoss(id, val)} /></div>
                </div>
                <div className="h-1/4"><ObjectiveDisplay flagObj={objectives} /></div>
                <div className="h-1/4"><LocationDisplay locations={locationList} ki={ki} /></div>
                <div className="h-1/4">Timer</div>
            </div>
            
        </div>
    )
}