import { TObjective } from "@/app/lib/interfaces";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import ParseTime from "@/app/lib/parse-time";

export default function ObjectiveDisplay({ objectives, req, onEdit, onComplete }: { objectives: TObjective[], req: number, onEdit: Function, onComplete: Function }) {
    const active = objectives.filter(obj => obj.time === 0);
    const complete = objectives.filter(obj => !!obj.time && obj.time > 0);

    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <p className="font-bold">Objectives</p>
                <p className="font-bold font-[family-name:var(--font-geist-mono)]">Required: {req}</p>
            </div>
            {active.map(obj => {
                return (
                    <a key={obj.label}  onClick={() => onComplete(obj.id)}>
                        <div className="flex items-center hover:bg-slate-800">
                            <p className="mr-3">{obj.label}</p>
                            {obj.random && <button onClick={() => onEdit(obj.id)}><PencilSquareIcon className="size-6 text-yellow-400" /></button>}
                        </div>
                    </a>
                );
            })}
            {complete.length > 0 && <div className="border"></div>}
            {complete.map(obj => {
                if (!!obj.time) return (
                    <a key={obj.label}  onClick={() => onComplete(obj.id)}>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center hover:bg-slate-800">
                                <p className="mr-3">{obj.label}</p>
                                {obj.random && <button onClick={() => onEdit(obj.id)}><PencilSquareIcon className="size-6 text-yellow-400" /></button>}
                            </div>
                            <p className="bg-slate-300 text-black w-20 text-center font-bold font-[family-name:var(--font-geist-mono)] text-xs ">{ParseTime(obj.time)}</p>
                        </div>
                        
                    </a>
                );
            })}
        </div>
    );
}