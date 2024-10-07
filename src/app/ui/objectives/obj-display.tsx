import { TObjective } from "@/app/lib/interfaces";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function ObjectiveDisplay({ objectives, req, onEdit }: { objectives: TObjective[], req: number, onEdit: Function }) {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <p className="font-bold">Objectives</p>
                <p className="font-bold font-[family-name:var(--font-geist-mono)]">Required: {req}</p>
            </div>
            {objectives.map(obj => {
                return (
                    <div key={obj.label} className="flex items-center hover:bg-slate-800">
                        <p className="mr-3">{obj.label}</p>
                        {obj.random && <button onClick={() => onEdit(obj.id)}><PencilSquareIcon className="size-6 text-yellow-400" /></button>}
                    </div>
                );
            })}
        </div>
    );
}