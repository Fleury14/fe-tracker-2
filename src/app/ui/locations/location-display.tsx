import { KeyItems, Location } from "@/app/lib/interfaces";


export default function LocationDisplay({ locations, onSelect }: { locations: Location[], onSelect: (id: number) => void }) {

    function drawMiab(location: Location) {
        if (location.type === 'miab') {
            return <span> [{location.miab}]</span>
        }
    }
    
    function isAvailable(location: Location) {
        if (location.available && !location.cleared) {
            let color = '';
            switch(location.zone) {
                case 2:
                    color = 'text-indigo-400'
                    break;
                case 1:
                    color = 'text-red-400'
                    break;
                default:
                    color = 'text-green-400'
            }
            return (
                <a className="hover:bg-slate-800" key={location.title} onClick={() => onSelect(location.id)}>
                    <p key={location.id} className={color}>{location.title}{drawMiab(location)}</p>
                </a>
            )
        }
    }
    return (
        <div className="flex flex-col max-h-full">
            <p className="font-bold">Available Checks</p>
            <div className="max-h-64 flex flex-col flex-wrap">
                {locations.map(loc => {
                    return isAvailable(loc);
                })}
            </div>
        </div>
        
    );
}