import { TObjective, V5FlagObject } from "@/app/lib/interfaces";
import { PencilSquareIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import ParseTime from "@/app/lib/parse-time";

export default function ObjectiveDisplay({ objectives, req, onEdit, onComplete }: { objectives: TObjective[], req: number, onEdit: (id: number) => void, onComplete: (id: number) => void }) {
    const active = objectives.filter(obj => obj.time === 0);
    const complete = objectives.filter(obj => !!obj.time && obj.time > 0);
    const goMode = complete.length >= req;

    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <p className="font-bold text-lg">Objectives</p>
                <p className="font-bold font-[family-name:var(--font-geist-mono)]">Required: {req}</p>
            </div>
            {active.map(obj => {
                return (
                    <div key={obj.label} className="flex items-center hover:bg-slate-800">
                        <p className="mr-3 font-semibold">{obj.label}</p>
                        {obj.random && <button onClick={() => onEdit(obj.id)}><p className="invisible w-0 h-0">Edit Objective {obj.id}</p><PencilSquareIcon className="size-6 text-yellow-400" /></button>}
                        <button onClick={() => onComplete(obj.id)}><p className="invisible w-0 h-0">Complete Objective {obj.id}</p><CheckCircleIcon className="size-6 text-green-400" /></button>
                        {(goMode && obj.label.indexOf('Zeromus') < 0) && <p className="ml-3 text-sm bg-yellow-600 pr-2 pl-2 font-bold text-black">Not required</p>}
                    </div>
                );
            })}
            {complete.length > 0 && <div className="border"></div>}
            {complete.map(obj => {
                if (!!obj.time) return (
                    <div key={obj.label} className="flex justify-between items-center">
                        <div className="flex items-center hover:bg-slate-800">
                            <p className="mr-3">{obj.label}</p>
                            {obj.random && <button onClick={() => onEdit(obj.id)}><PencilSquareIcon className="size-6 text-yellow-400" /></button>}
                            <button onClick={() => onComplete(obj.id)}><p className="invisible w-0 h-0">Undo Objective {obj.id}</p><XCircleIcon className="size-6 text-red-400" /></button>
                        </div>
                        <p className="bg-slate-300 text-black w-20 text-center font-bold font-[family-name:var(--font-geist-mono)] text-xs ">{ParseTime(obj.time)}</p>
                    </div>
                );
            })}
        </div>
    );
}