'use client'

import { useSearchParams } from "next/navigation"
import { useState, useEffect  } from "react";
import KIDisplay from "../ui/ki/ki-display";
import BossDisplay from "@/app/ui/bosses/boss-display";
import ObjectiveDisplay from "@/app/ui/objectives/obj-display";
import LocationDisplay from "@/app/ui/locations/location-display";
import TimerDisplay from "@/app/ui/timer/timer-display";
import { defaultKI, bosses, locations } from "../lib/default-data";
import parseFlags from "../lib/parse-flags";
import { getPropertySection } from "../lib/parse-flag-section";
import { FlagObject, KeyItems, Boss, Location } from "../lib/interfaces";

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
    const [timerActive, setActive] = useState(false);
    const [startTime, setStart] = useState(0);
    const [currentTime, setCurrent] = useState(0);

    function isAvailable(loc: Location) {
        const hasUnderground = (ki.magma || ki.hook);
        const hasMoon = ki.darkness;
        // check zone permission first
        if (loc.zone === 2) {
            if (!hasMoon) return false;
        } else if (loc.zone === 1) {
            if (!hasUnderground) return false;
        }
        // check dependencies
        if (loc.dependencies.length === 0) {
            // bedward/dmist exception
            const K = getPropertySection(assuredFlags, 'K');
            const noFree = K.indexOf('nofree') >= 0
            if (loc.id === 13) { // dmist
                return noFree;
            } else if (loc.id === 14) { // bedward
                return !noFree;
            }

            return true;
        } else {
            let depCheck = true;
            loc.dependencies.forEach(dep => {
                if (ki[dep as keyof KeyItems] === false) {
                    depCheck = false
                }
            })
            return depCheck;
        }
    }

    // adjust locations for every KI change
    useEffect(() => {
        const newLocList:Location[] = [];
        locationList.forEach(loc => {
            const newLoc:Location = {
                ...loc,
                available: isAvailable(loc)
            };
            newLocList.push(newLoc)
        })
        setLocationList(newLocList)
    }, [ki])

    function toggleKI(target:string) {
        // adjust ki
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
    
    return (
        <div className="flex" style={{ backgroundColor: color }}>
            <div className="w-96 border-2 border-double h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
                <div className="flex h-1/4">
                    <div className="w-1/2"><KIDisplay ki={ki} toggleKI={(target: string) => toggleKI(target)}/></div>
                    <div className="w-1/2"><BossDisplay bosses={bossList} toggleBoss={(id: number, val: boolean) => toggleBoss(id, val)} /></div>
                </div>
                <div className="h-1/4"><ObjectiveDisplay flagObj={objectives} /></div>
                <div className="h-1/4"><LocationDisplay locations={locationList} ki={ki} /></div>
                <div className="h-1/4"><TimerDisplay currentTime={currentTime} startTime={startTime} /></div>
            </div>
            
        </div>
    )
}