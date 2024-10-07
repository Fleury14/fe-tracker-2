import { FlagObject } from "@/app/lib/interfaces";

export default function ObjectiveDisplay({ flagObj, onEdit }: { flagObj: FlagObject, onEdit: Function }) {
    return (
        <div className="flex flex-col">
            <p>Objectives - Required: {flagObj.required}</p>
            {flagObj.objectives.map(obj => {
                return (
                    <div className="flex">
                        <p key={obj.label}>{obj.label}</p>
                        {obj.random && <button onClick={() => onEdit(obj.id)}>Edit</button>}
                    </div>
                );
            })}
        </div>
    );
}