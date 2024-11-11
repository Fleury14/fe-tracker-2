import { Location } from "@/app/lib/interfaces";


export default function LocationDisplay({ locations, onSelect, isMiab }: { locations: Location[], onSelect: (id: number) => void, isMiab: boolean }) {

    function drawMiab(location: Location) {
        if (location.type === 'miab') {
            return <span> [{location.miab}]</span>
        }
    }
    
    function isAvailable(location: Location) {
        if (location.type === 'miab' && !isMiab) return;
        if (location.available && !location.cleared) {
            let color = '';
            switch(location.zone) {
                case 2:
                    color = 'text-indigo-300 font-semibold'
                    break;
                case 1:
                    color = 'text-red-300 font-semibold'
                    break;
                default:
                    color = 'text-green-300 font-semibold'
            }
            return (
                <a className="hover:bg-slate-800 z-10" key={location.title} onClick={() => onSelect(location.id)}>
                    <p key={location.id} className={color}>{location.title}{drawMiab(location)}</p>
                </a>
            )
        }
    }
    return (
        <div className="flex flex-col max-h-full">
            <p className="font-bold text-lg">Available Checks</p>
            <div className="max-h-64 flex flex-col flex-wrap">
                {locations.map(loc => {
                    return isAvailable(loc);
                })}
            </div>
        </div>
        
    );
}