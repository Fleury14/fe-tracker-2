import { TObjective } from "../interfaces";

enum Mode {
    Info,
    ObjectiveEdit
}

function beginObjectiveEdit(id: number, setObjEdit: Function, setMode: Function) {
    setObjEdit(id);
    setMode(Mode.ObjectiveEdit);
}

function editObjective(id: number, title: string, objectives: TObjective[], setObjectives: Function, setObjEdit: Function, setMode: Function) {
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

export { beginObjectiveEdit, editObjective }