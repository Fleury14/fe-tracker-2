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

interface Boss {
    title: string;
    slug: string;
    id: number;
    iconGray?: string;
    iconFile: string;
    toggle: false;
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

export type { KeyItems, Boss, TObjective, FlagObject, Quest };