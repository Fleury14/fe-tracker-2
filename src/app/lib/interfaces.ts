interface KeyItems {
    crystal: boolean;
    pass: boolean;
    hook: boolean;
    darkness: boolean;
    earth: boolean;
    harp: boolean;
    package: boolean;
    sandruby: boolean;
    baron: boolean;
    magma: boolean;
    tower: boolean;
    luca: boolean;
    adamant: boolean;
    legend: boolean;
    pan: boolean;
    spoon: boolean;
    rat: boolean;
    pink: boolean;

}
// zones: 0 = overworld, 1 = underground, 2 = moon
interface Location {
    id: number;
    title: string;
    type: string;
    zone: number;
    dependencies: string[];
    cleared: boolean;
    available: boolean;
}

interface Boss {
    title: string;
    slug: string;
    id: number;
    iconGray?: string;
    iconFile: string;
    toggle: boolean;
}

interface TObjective {
    id: number;
    label: string;
    time?: number;
    random?: boolean;
}

interface FlagObject {
    objectives: TObjective[];
    required: number;
}

interface Quest {
    slug: string;
    title: string;
    buttonText: string;
}

interface Character {
    slug: string;
    title: string;
    iconActive: string;
}

interface KIObjectives {
    ki: string;
    objectives: string[];
    images: string[];
}


export type { KeyItems, Boss, TObjective, FlagObject, Quest, Location, Character, KIObjectives };