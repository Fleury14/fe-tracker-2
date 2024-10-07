import { TObjective } from "@/app/lib/interfaces";

export default function ObjectiveDisplay({ objectives, req, onEdit }: { objectives: TObjective[], req: number, onEdit: Function }) {
    return (
        <div className="flex flex-col">
            <p>Objectives - Required: {req}</p>
            {objectives.map(obj => {
                return (
                    <div key={obj.label} className="flex">
                        <p>{obj.label}</p>
                        {obj.random && <button onClick={() => onEdit(obj.id)}>Edit</button>}
                    </div>
                );
            })}
        </div>
    );
}