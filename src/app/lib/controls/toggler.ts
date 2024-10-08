import { Boss, KeyItems, Location } from "@/app/lib/interfaces";
import { getPropertySection } from "@/app/lib/parse-flag-section";

function toggleKI(target:string, setKI:Function) {
    // adjust ki
    setKI((prevState: KeyItems) => ({
        ...prevState,
        [target]: !prevState[target as keyof KeyItems]
    }));
}

function toggleBoss(id:number, val: boolean, setBossList:Function, bossList:Boss[]) {
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

function clearLocation(id: number, locationList:Location[], setLocationList: Function) {
    const target = locationList.find(loc => loc.id === id);
    if (!!target) {
        const newList = locationList.filter(loc => loc.id !== id);
        const newLoc: Location = {
            ...target,
            cleared: !target.cleared
        }
        newList.push(newLoc);
        setLocationList(newList);
    }
    
    
}

export { toggleKI, toggleBoss, isAvailable, clearLocation }