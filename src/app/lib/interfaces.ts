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
    name: string;
    id: number;
    imageGray: string;
    imageColor: string;
    toggle: false;
}

export type { KeyItems, Boss };