import { FlagObject } from "@/app/lib/interfaces";

export default function ObjectiveDisplay({ flagObj }: { flagObj: FlagObject }) {
    return (
        <div className="flex flex-col">
            <p>Objectives - Required: {flagObj.required}</p>
            {flagObj.objectives.map(obj => {
                return <p key={obj.label}>{obj.label}</p>
            })}
        </div>
    );
}