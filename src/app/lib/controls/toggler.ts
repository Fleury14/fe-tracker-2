import { Boss, KeyItems } from "@/app/lib/interfaces";

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

export { toggleKI, toggleBoss }