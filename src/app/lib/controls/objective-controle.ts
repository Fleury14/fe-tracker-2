import { Dispatch, SetStateAction } from "react";
import { TimerState, TObjective } from "../interfaces";

enum Mode {
    Info,
    ObjectiveEdit
}

function beginObjectiveEdit(id: number, setObjEdit: (id: number,) => void, setMode: (mode: Mode) => void) {
    setObjEdit(id);
    setMode(Mode.ObjectiveEdit);
}

function beginv5ObjectiveEdit(id: number, group:number, setObjEdit: (id: number,) => void, setMode: (mode: Mode) => void, setGroupEdit: (group: number) => void) {
    setObjEdit(id);
    setGroupEdit(group);
    setMode(Mode.ObjectiveEdit);
}

function editObjective(id: number, title: string, objectives: TObjective[], setObjectives: (list: TObjective[]) => void, setObjEdit: Dispatch<SetStateAction<number>>, setMode: (mode: Mode) => void) {
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
                setObjEdit((prevState: number) => prevState + 1);
            } else {
                setObjEdit(-1);
                setMode(Mode.Info);
            }
        }
    }
}

function editV5Objective(id: number, group: number, title: string, objectives: Array<TObjective[]>, setv5Objectives: (list: Array<TObjective[]>) => void, setObjEdit: Dispatch<SetStateAction<number>>, setMode: (mode: Mode) => void) {
    console.log('editing v5');
    const target = objectives[group].find(obj => obj.id === id);
    const targetIndex = objectives[group].findIndex(obj => obj.id === id);
    if (!!target) {
        console.log('target found');
        const newList = objectives.filter(obj => obj === obj);
        const targetGroup = newList[group];
        const newGroupList = targetGroup.filter(obj => obj.id !== id);
        const newObj:TObjective = {
            ...target,
            label: title
        }
        newGroupList.push(newObj);
        newGroupList.sort((a, b) => a.id - b.id);
        newList.splice(group, 1, newGroupList)
        setv5Objectives(newList);
        
        if (target.id < objectives.length - 1) {
            if (objectives[group][targetIndex + 1].random) {
                setObjEdit((prevState: number) => prevState + 1);
            } else {
                setObjEdit(-1);
                setMode(Mode.Info);
            }
        }
    }
}

function completeObjective(id: number, objectives: TObjective[], setObjectives: (list: TObjective[]) => void, timer: TimerState) {
    const target = objectives.find(obj => obj.id === id);
    if (!!target) {
        const newObj:TObjective = {
            ...target,
            time: !!target.time && target.time > 0 ? 0 : timer.currentTime
        }
        const newList = objectives.filter(obj => obj.id !== id);
        newList.push(newObj);
        setObjectives(newList);
    }
}

function completeV5Objective(id: number, group: number, objectives: Array<TObjective[]>, setv5Objectives: (list: Array<TObjective[]>) => void, timer: TimerState) {
    const target = objectives[group].find(obj => obj.id === id);
    if (!!target) {
        const newObj:TObjective = {
            ...target,
            time: !!target.time && target.time > 0 ? 0 : timer.currentTime
        }
        const newList = objectives.filter(obj => obj === obj);
        const targetGroup = newList[group]
        const newGroupList = targetGroup.filter(obj => obj.id !== id);
        newGroupList.push(newObj);
        newList.splice(group, 1, newGroupList);
        setv5Objectives(newList);
    }
}

export { beginObjectiveEdit, beginv5ObjectiveEdit, editObjective, editV5Objective, completeObjective, completeV5Objective }