import { Location } from '../lib/interfaces'

const initLocations = (Kflags: string, locations: Location[]) => {
    const newLocations = locations;
    if (Kflags.indexOf('summon') < 0) {
        newLocations.forEach(loc => {
            if (loc.type === "summon") {
                loc.available = false;
            }
        })
    }

    if (Kflags.indexOf('moon') < 0) {
        newLocations.forEach(loc => {
            if(loc.type === "moon") {
                loc.available = false;
            }
        })
    }

    return newLocations;
}

export default initLocations;
