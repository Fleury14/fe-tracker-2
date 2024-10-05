import { KeyItems, Location } from "@/app/lib/interfaces";


export default function LocationDisplay({ locations, ki }: { locations: Location[], ki: KeyItems }) {

    const hasUnderground = (ki.magma || ki.hook);
    const hasMoon = ki.darkness;
    
    function isAvailable(location: Location) {
        if (location.available) {
            return <p key={location.id}>{location.title}</p>
        }
    }
    return (
        <div className="flex flex-col">
            <p>Available Checks</p>
            {locations.map(loc => {
                return isAvailable(loc);
            })}
        </div>
    );
}