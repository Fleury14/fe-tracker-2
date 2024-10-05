import { KeyItems, Boss } from "./interfaces";

const defaultKI: KeyItems = {
    crystal: false,
    pass: false,
    hook: false,
    darkness: false,
    earth: false,
    harp: false,
    package: false,
    sandruby: false,
    baron: false,
    magma: false,
    tower: false,
    luca: false,
    adamant: false,
    legend: false,
    pan: false,
    spoon: false,
    rat: false,
    pink: false,
}

const defaultBossList: Boss[] = [
    {
        name: "D. Mist",
        id: 1,
        toggle: false,
        imageGray: '',
        imageColor: '/images/boss-icons/FFIVFE-Bosses-1MistD-Color.png'
    }
];

export { defaultKI, defaultBossList };