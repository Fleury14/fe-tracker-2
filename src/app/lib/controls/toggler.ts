import { Boss, KeyItems, Location } from "@/app/lib/interfaces";
import { getPropertySection } from "@/app/lib/parse-flag-section";
import { Dispatch, SetStateAction } from "react";

function toggleKI(target:string, setKI:Dispatch<SetStateAction<KeyItems>>) {
    // adjust ki
    setKI((prevState: KeyItems) => ({
        ...prevState,
        [target]: !prevState[target as keyof KeyItems]
    }));
}

function toggleBoss(id:number, val: boolean, setBossList:Dispatch<SetStateAction<Boss[]>>, bossList:Boss[]) {
    setBossList((prevState: Boss[]) => {
        const target = prevState.find(boss => boss.id === id);
        const newBoss = bossList.filter(boss => boss.id !== id);
        if (target) {
            target.toggle = !val;
            return [...newBoss, target];
        }
        return prevState;
    })
}

function isAvailable(loc: Location, ki: KeyItems, assuredFlags:string) {
    const hasUnderground = (ki.magma || ki.hook);
    const hasMoon = ki.darkness;
    const hasMiab = assuredFlags.indexOf('miab') >= 0;
    const miabZones = hasMiab ? {
        above: assuredFlags.indexOf('above') >= 0,
        below: assuredFlags.indexOf('below') >= 0,
        lst: assuredFlags.indexOf('lst') >= 0,
    } : {}
    const isPlainMiab = hasMiab && (!miabZones.above && !miabZones.below && !miabZones.lst);

    // check zone permission first
    if (loc.zone === 2) {
        if (!hasMoon) return false;
    } else if (loc.zone === 1) {
        if (!hasUnderground) return false;
    }

    // check miab permissions
    if (loc.type === 'miab') {
        if (!hasMiab) return false;
        if (!isPlainMiab) {
            if (loc.id === 35 && !miabZones.lst) { // lst
                return false;
            }
            if (loc.zone === 1 && !miabZones.below) return false;
            if (loc.zone === 0 && !miabZones.above) return false;
        }
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

function clearLocation(id: number, locationList:Location[], setLocationList: Dispatch<SetStateAction<Location[]>>) {
    const target = locationList.find(loc => loc.id === id);
    if (!!target) {
        const newList = locationList.filter(loc => loc.id !== id);
        const newLoc: Location = target.type === 'miab' && !!target.miab && target.miab > 1 ? {
            ...target,
            miab: target.miab - 1
        } : {
            ...target,
            cleared: !target.cleared
        }
        newList.push(newLoc);
        newList.sort((a, b) => a.id - b.id)
        setLocationList(newList);
    }
    
    
}

export { toggleKI, toggleBoss, isAvailable, clearLocation }