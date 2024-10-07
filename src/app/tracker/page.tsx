'use client'

import { useSearchParams } from "next/navigation"
import { useState, useEffect, useRef  } from "react";
import KIDisplay from "../ui/ki/ki-display";
import BossDisplay from "@/app/ui/bosses/boss-display";
import ObjectiveDisplay from "@/app/ui/objectives/obj-display";
import LocationDisplay from "@/app/ui/locations/location-display";
import TimerDisplay from "@/app/ui/timer/timer-display";
import ObjectiveEditor from "@/app/ui/right-panel/objective-editor";
import Info from "@/app/ui/right-panel/info";
import { defaultKI, bosses, locations } from "../lib/default-data";
import parseFlags from "../lib/parse-flags";
import { getPropertySection } from "../lib/parse-flag-section";
import { FlagObject, KeyItems, Boss, Location } from "../lib/interfaces";

export default function Page() {

    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams)

    const flags = params.get("flags");
    const bgColor = params.get("bgColor");
    const color:string = bgColor !== null ? bgColor : "black";
    const assuredFlags:string = flags ? flags : "";
    const objectives:FlagObject = parseFlags(assuredFlags);

    enum Mode {
        Info,
        ObjectiveEdit
    }

    const [mode, setMode] = useState<Mode>(Mode.Info);
    const [ki, setKI] = useState(defaultKI);
    const [bossList, setBossList] = useState(bosses);
    const [locationList, setLocationList] = useState(locations);
    const [timer, setTimer] = useState({
        startTime: 0,
        currentTime: 0,
        pauseTime: 0,
        isActive: false,
    })

    // timer controls TODO: refactor out

    const currentTimer:any = useRef();
    useEffect(() => {
        return () => clearInterval(currentTimer.current);
    }, []);

    function beginTimer() {
        const { pauseTime } = timer;
        const startDate = pauseTime === 0 ? Date.now() : Date.now() - pauseTime;
        currentTimer.current = setInterval(() => {
            setTimer({
                ...timer,
                isActive: true,
                startTime: startDate,
                currentTime: Date.now() - startDate,
            });
        }, 100);
        // OLD: set objectives up, but only if hasnt been done already (editing randoms may do this already)
        // if (!this.state.flagObj) {
        //     this.setState({ flagObj: this.props.flagObj });
        // }
    }

    function endTimer() {
        const { isActive, startTime } = timer;
        if (isActive) {
            clearInterval(currentTimer.current);
            setTimer({ 
                ...timer,
                pauseTime: Date.now() - startTime, 
                isActive: false 
            });
        }
    }

    function resetTimer() {
        setTimer({ 
            isActive: false,
            startTime: 0,
            currentTime: 0,
            pauseTime: 0,
        })
    }

    // location functions TODO refactor out

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

    // toggle controls

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
                <div className="h-1/4">
                    <TimerDisplay 
                        currentTime={timer.currentTime}
                        startTime={timer.startTime}
                        isActive={timer.isActive}
                        startTimer={() => beginTimer()}
                        stopTimer={() => endTimer()}
                        resetTimer={() => resetTimer()}
                    />
                </div>
            </div>
            <div>
                {mode === Mode.Info && <Info />}
                {mode === Mode.ObjectiveEdit && <ObjectiveEditor />}
            </div>
        </div>
    )
}