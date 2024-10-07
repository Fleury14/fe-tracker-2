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
import { FlagObject, KeyItems, Boss, Location, TObjective } from "../lib/interfaces";
import { toggleKI, toggleBoss, isAvailable } from "../lib/controls/toggler";
import { beginTimer, endTimer, resetTimer } from "../lib/controls/time-controls";

export default function Page() {

    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams)

    const flags = params.get("flags");
    const bgColor = params.get("bgColor");
    const color:string = bgColor !== null ? bgColor : "black";
    const assuredFlags:string = flags ? flags : "";
    const parsedObjectives:FlagObject = parseFlags(assuredFlags);

    enum Mode {
        Info,
        ObjectiveEdit
    }

    const [objectives, setObjectives] = useState(parsedObjectives.objectives)
    const [objectiveEdit, setObjEdit] = useState(-1)
    const [mode, setMode] = useState<Mode>(Mode.Info);
    const [ki, setKI] = useState<KeyItems>(defaultKI);
    const [bossList, setBossList] = useState<Boss[]>(bosses);
    const [locationList, setLocationList] = useState(locations);
    const [timer, setTimer] = useState({
        startTime: 0,
        currentTime: 0,
        pauseTime: 0,
        isActive: false,
    })

    const currentTimer:any = useRef();
    useEffect(() => {
        return () => clearInterval(currentTimer.current);
    }, []);

    // adjust locations for every KI change
    useEffect(() => {
        const newLocList:Location[] = [];
        locationList.forEach(loc => {
            const newLoc:Location = {
                ...loc,
                available: isAvailable(loc, ki, assuredFlags)
            };
            newLocList.push(newLoc)
        })
        setLocationList(newLocList)
    }, [ki])

    function beginObjectiveEdit(id: number) {
        setObjEdit(id);
        setMode(Mode.ObjectiveEdit);
    }

    function editObjective(id: number, title: string) {
        const target = objectives.find(obj => obj.id === id);
        const targetIndex = objectives.findIndex(obj => obj.id === id);
        if (!!target) {
            const newList = objectives.filter(obj => obj.id !== id);
            const newObj:TObjective = {
                ...target,
                label: title
            }
            newList.push(newObj);
            newList.sort((a, b) => a.id - b.id);
            setObjectives(newList);
            
            if (target.id < objectives.length - 1) {
                if (objectives[targetIndex + 1].random) {
                    setObjEdit(prevState => prevState + 1);
                } else {
                    setObjEdit(-1);
                    setMode(Mode.Info);
                }
            }
        }
    }
    
    return (
        <div className="flex" style={{ backgroundColor: color }}>
            <div className="w-96 border-2 border-double h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
                <div className="flex h-1/4">
                    <div className="w-1/2"><KIDisplay ki={ki} toggleKI={(target: string) => toggleKI(target, setKI)}/></div>
                    <div className="w-1/2"><BossDisplay bosses={bossList} toggleBoss={(id: number, val: boolean) => toggleBoss(id, val, setBossList, bossList)} /></div>
                </div>
                <div className="h-1/4"><ObjectiveDisplay objectives={objectives} req={parsedObjectives.required} onEdit={(id:number) => beginObjectiveEdit(id)} /></div>
                <div className="h-1/4"><LocationDisplay locations={locationList} ki={ki} /></div>
                <div className="h-1/4">
                    <TimerDisplay 
                        currentTime={timer.currentTime}
                        startTime={timer.startTime}
                        isActive={timer.isActive}
                        startTimer={() => beginTimer(timer, setTimer, currentTimer)}
                        stopTimer={() => endTimer(timer, setTimer, currentTimer)}
                        resetTimer={() => resetTimer(setTimer)}
                    />
                </div>
            </div>
            <div className="w-1/2">
                {mode === Mode.Info && <Info />}
                {mode === Mode.ObjectiveEdit && <ObjectiveEditor id={objectiveEdit} onSelect={(id: number, title:string) => editObjective(id, title)} />}
            </div>
        </div>
    )
}