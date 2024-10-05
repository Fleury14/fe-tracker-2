import { KeyItems, Boss, Quest, Location } from "./interfaces";

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

const bosses: Boss[] = [{
    slug: 'dmist',
    title: 'D. Mist',
    id: 1,
    iconFile: 'FFIVFE-Bosses-1MistD-Color.png',
    iconGray: 'FFIVFE-Bosses-1MistD-Gray.png',
    toggle: false
},
{
    slug: 'officer',
    title: 'Kaipo Guards',
    id: 2,
    iconFile: 'FFIVFE-Bosses-2Soldier-Color.png',
    iconGray: 'FFIVFE-Bosses-2Soldier-Gray.png',
    toggle: false

},
{
    slug: 'octomamm',
    title: 'Octomamm',
    id: 3,
    iconFile: 'FFIVFE-Bosses-3Octo-Color.png',
    iconGray: 'FFIVFE-Bosses-3Octo-Gray.png',
    toggle: false
},
{
    slug: 'antlion',
    title: 'Antlion',
    id: 4,
    iconFile: 'FFIVFE-Bosses-4Antlion-Color.png',
    iconGray: 'FFIVFE-Bosses-4Antlion-Gray.png',
    toggle: false
},
{
    slug: 'waterhag',
    title: 'WaterHag',
    id: 5,
    iconFile: 'FFIVFE-Bosses-5WHag-Color.png',
    iconGray: 'FFIVFE-Bosses-5WHag-Gray.png',
    toggle: false
},
{
    slug: 'mombomb',
    title: 'Mom Bomb',
    id: 6,
    iconFile: 'FFIVFE-Bosses-6Mombomb-Color.png',
    iconGray: 'FFIVFE-Bosses-6Mombomb-Gray.png',
    toggle: false
},
{
    slug: 'fabulgauntlet',
    title: 'Fabul Gauntlet',
    id: 7,
    iconFile: 'FFIVFE-Bosses-7Gauntlet-Color.png',
    iconGray: 'FFIVFE-Bosses-7Gauntlet-Gray.png',
    toggle: false
},
{
    slug: 'milon/',
    title: 'Milon',
    id: 8,
    iconFile: 'FFIVFE-Bosses-8Milon-Color.png',
    iconGray: 'FFIVFE-Bosses-8Milon-Gray.png',
    toggle: false
},
{
    slug: 'milonz',
    title: 'Milon-Z',
    id: 9,
    iconFile: 'FFIVFE-Bosses-9MilonZ-Color.png',
    iconGray: 'FFIVFE-Bosses-9MilonZ-Gray.png',
    toggle: false
},
{
    slug: 'mirrorcecil',
    title: 'Dark Knight',
    id: 10,
    iconFile: 'FFIVFE-Bosses-10DKCecil-Color.png',
    iconGray: 'FFIVFE-Bosses-10DKCecil-Gray.png',
    toggle: false
},
{
    slug: 'guard',
    title: 'Baron Guards',
    id: 11,
    iconFile: 'FFIVFE-Bosses-11Guards-Color.png',
    iconGray: 'FFIVFE-Bosses-11Guards-Gray.png',
    toggle: false
},
{
    slug: 'karate',
    title: 'Karate',
    id: 12,
    iconFile: 'FFIVFE-Bosses-12Yang-Color.png',
    iconGray: 'FFIVFE-Bosses-12Yang-Gray.png',
    toggle: false
},
{
    slug: 'baigan',
    title: 'Baigan',
    id: 13,
    iconFile: 'FFIVFE-Bosses-13Baigan-Color.png',
    iconGray: 'FFIVFE-Bosses-13Baigan-Gray.png',
    toggle: false
},
{
    slug: 'kainazzo',
    title: 'Kainazzo',
    id: 14,
    iconFile: 'FFIVFE-Bosses-14Kainazzo-Color.png',
    iconGray: 'FFIVFE-Bosses-14Kainazzo-Gray.png',
    toggle: false
},
{
    slug: 'darkelf',
    title: 'Dark Elf',
    id: 15,
    iconFile: 'FFIVFE-Bosses-15DElf-Color.png',
    iconGray: 'FFIVFE-Bosses-15DElf-Gray.png',
    toggle: false
},
{
    slug: 'magus',
    title: 'Magus Sisters',
    id: 16,
    iconFile: 'FFIVFE-Bosses-16MagusSis-Color.png',
    iconGray: 'FFIVFE-Bosses-16MagusSis-Gray.png',
    toggle: false
},
{
    slug: 'valvalis',
    title: 'Valvalis',
    id: 17,
    iconFile: 'FFIVFE-Bosses-17Valvalis-Color.png',
    iconGray: 'FFIVFE-Bosses-17Valvalis-Gray.png',
    toggle: false
},
{
    slug: 'calbrena',
    title: 'Calbrena',
    id: 18,
    iconFile: 'FFIVFE-Bosses-18Calcabrina-Color.png',
    iconGray: 'FFIVFE-Bosses-18Calcabrina-Gray.png',
    toggle: false
},
{
    slug: 'golbez',
    title: 'Golbez',
    id: 19,
    iconFile: 'FFIVFE-Bosses-19Golbez-Color.png',
    iconGray: 'FFIVFE-Bosses-19Golbez-Gray.png',
    toggle: false
},
{
    slug: 'lugae',
    title: 'Dr. Lugae',
    id: 20,
    iconFile: 'FFIVFE-Bosses-20Lugae-Color.png',
    iconGray: 'FFIVFE-Bosses-20Lugae-Gray.png',
    toggle: false
},
{
    slug: 'darkimp',
    title: 'Dark Imps',
    id: 35,
    iconFile: 'FFIVFE-Bosses-35DarkImps-Color.png',
    iconGray: 'FFIVFE-Bosses-35DarkImps-Gray.png',
    toggle: false
},
{
    slug: 'kingqueen',
    title: 'K/Q Eblan',
    id: 21,
    iconFile: 'FFIVFE-Bosses-21Eblan-Color.png',
    iconGray: 'FFIVFE-Bosses-21Eblan-Gray.png',
    toggle: false
},
{
    slug: 'rubicant',
    title: 'Rubicant',
    id: 22,
    iconFile: 'FFIVFE-Bosses-22Rubicante-Color.png',
    iconGray: 'FFIVFE-Bosses-22Rubicante-Gray.png',
    toggle: false
},
{
    slug: 'evilwall',
    title: 'Evil Wall',
    id: 23,
    iconFile: 'FFIVFE-Bosses-23EvilWall-Color.png',
    iconGray: 'FFIVFE-Bosses-23EvilWall-Gray.png',
    toggle: false
},
{
    slug: 'asura',
    title: 'Asura',
    id: 27,
    iconFile: 'FFIVFE-Bosses-27Asura-Color.png',
    iconGray: 'FFIVFE-Bosses-27Asura-Gray.png',
    toggle: false
},
{
    slug: 'leviatan',
    title: 'Leviatan',
    id: 28,
    iconFile: 'FFIVFE-Bosses-28Leviath-Color.png',
    iconGray: 'FFIVFE-Bosses-28Leviath-Gray.png',
    toggle: false
},
{
    slug: 'odin',
    title: 'Odin',
    id: 26,
    iconFile: 'FFIVFE-Bosses-26Odin-Color.png',
    iconGray: 'FFIVFE-Bosses-26Odin-Gray.png',
    toggle: false
},
{
    slug: 'bahamut',
    title: 'Bahamut',
    id: 29,
    iconFile: 'FFIVFE-Bosses-29Bahamut-Color.png',
    iconGray: 'FFIVFE-Bosses-29Bahamut-Gray.png',
    toggle: false
},
{
    slug: 'elements',
    title: 'Elements',
    id: 24, 
    iconFile: 'FFIVFE-Bosses-24Fiends-Color.png',
    iconGray: 'FFIVFE-Bosses-24Fiends-Gray.png',
    toggle: false
},
{
    slug: 'cpu',
    title: 'CPU',
    id: 25,
    iconFile: 'FFIVFE-Bosses-25CPU-Color.png',
    iconGray: 'FFIVFE-Bosses-25CPU-Gray.png',
    toggle: false
},
{
    slug: 'paledim',
    title: 'Pale Dim',
    id: 30,
    iconFile: 'FFIVFE-Bosses-30PaleDim-Color.png',
    iconGray: 'FFIVFE-Bosses-30PaleDim-Gray.png',
    toggle: false
},
{
    slug: 'wyvern',
    title: 'Wyvern',
    id: 34,
    iconFile: 'FFIVFE-Bosses-34Wyvern-Color.png',
    iconGray: 'FFIVFE-Bosses-34Wyvern-Gray.png',
    toggle: false
},
{
    slug: 'plague',
    title: 'Plague',
    id: 32,
    iconFile: 'FFIVFE-Bosses-32Plague-Color.png',
    iconGray: 'FFIVFE-Bosses-32Plague-Gray.png',
    toggle: false
},
{
    slug: 'dlunar',
    title: 'D. Lunars',
    id: 31,
    iconFile: 'FFIVFE-Bosses-31LunarD-Color.png',
    iconGray: 'FFIVFE-Bosses-31LunarD-Gray.png',
    toggle: false
},
{
    slug: 'ogopogo',
    title: 'Ogopogo',
    id: 33,
    iconFile: 'FFIVFE-Bosses-33Ogopogo-Color.png',
    iconGray: 'FFIVFE-Bosses-33Ogopogo-Gray.png',
    toggle: false
},
{
    slug: 'zeromus',
    title: 'Zeromus',
    id: 36,
    iconFile: 'FFIVFE-Bosses-36Zeromus-Color.png',
    iconGray: 'FFIVFE-Bosses-36Zeromus-Gray.png',
    toggle: false
},
{
    slug: 'unknown',
    title: '???',
    id: 99,
    iconFile: 'question.png',
    iconGray: '',
    toggle: false
}
]

const quests: Quest[] = [{
    slug: 'mistcave',
    title: 'Mist Cave boss',
    buttonText: 'Mist Cave',
}, {
    slug: 'waterfall',
    title: 'Waterfall boss',
    buttonText: 'Waterfall',
}, {
    slug: 'antlionnest',
    title: 'Complete the Antlion Nest',
    buttonText: 'Antlion Cave',
}, {
    slug: 'hobs',
    title: 'Rescue the hostage on Mt. Hobs',
    buttonText: 'Mt. Hobs',
}, {
    slug: 'fabul',
    title: 'Defend Fabul',
    buttonText: 'Fabul',
}, {
    slug: 'ordeals',
    title: 'Complete Mt. Ordeals',
    buttonText: 'Ordeals',
}, {
    slug: 'baroninn',
    title: 'Defeat Baron Inn bosses',
    buttonText: 'Baron Inn',
}, {
    slug: 'baroncastle',
    title: 'Liberate Baron Castle',
    buttonText: 'Baron King',
}, {
    slug: 'magnes',
    title: 'Complete Cave Magnes',
    buttonText: 'Cave Magnes',
}, {
    slug: 'zot',
    title: 'Complete the Tower of Zot',
    buttonText: 'Tower of Zot',
}, {
    slug: 'dwarfcastle',
    title: 'Defeat the bosses of Dwarf Castle',
    buttonText: 'Dwarf Castle',
}, {
    slug: 'lowerbabil',
    title: 'Defeat the boss of Lower Bab-il',
    buttonText: 'Lugae Spot',
}, {
    slug: 'falcon',
    title: 'Launch the Falcon',
    buttonText: 'Launch Falcon',
}, {
    slug: 'sealedcave',
    title: 'Complete the Sealed Cave',
    buttonText: 'Sealed Cave',
}, {
    slug: 'monsterqueen',
    title: 'Asura spot boss',
    buttonText: 'Asura Spot',
}, {
    slug: 'monsterking',
    title: 'Leviatan spot boss',
    buttonText: 'Leviatan Spot',
}, {
    slug: 'baronbasement',
    title: 'Odin spot boss',
    buttonText: 'Odin Spot',
}, {
    slug: 'giant',
    title: 'Complete the Giant of Bab-il',
    buttonText: 'Giant of Bab-il',
}, {
    slug: 'cavebahamut',
    title: 'Complete Cave Bahamut',
    buttonText: 'Cave Bahamut',
}, {
    slug: 'murasamealtar',
    title: 'Vanilla Murasame (Paledim)',
    buttonText: 'Pale Dim Spot',
}, {
    slug: 'crystalaltar',
    title: 'Vanilla Crystal Sword (Wyvern)',
    buttonText: 'Wyvern Spot',
}, {
    slug: 'whitealtar',
    title: 'Vanilla White Spear (Plague)',
    buttonText: 'Plague Spot',
}, {
    slug: 'ribbonaltar',
    title: 'Vanilla Ribbon (D.Lunars)',
    buttonText: 'D. Lunar Spot',
}, {
    slug: 'masamunealtar',
    title: 'Vanilla Masamune (Ogopogo)',
    buttonText: 'Ogopogo Spot',
}, {
    slug: 'burnmist',
    title: 'Burn the village Mist with the Package',
    buttonText: 'Burn Mist',
}, {
    slug: 'curefever',
    title: 'Cure the fever with the SandRuby',
    buttonText: 'Turn in Sandruby',
}, {
    slug: 'unlocksewer',
    title: 'Unlock the sewer with the Baron Key',
    buttonText: 'Unlock Baron Sewer',
}, {
    slug: 'music',
    title: 'Break the Dark Elf\'s spell with the TwinHarp',
    buttonText: 'Break Magnes Spell',
}, {
    slug: 'toroiatreasury',
    title: 'Open the Toroia treasury',
    buttonText: 'Toroia Treasury',
}, {
    slug: 'magma',
    title: 'Drop the Magma Key into the Agart well',
    buttonText: 'Turn Magma Key',
}, {
    slug: 'supercannon',
    title: 'Destroy the Super Cannon',
    buttonText: 'Super Cannon',
}, {
    slug: 'unlocksealedcave',
    title: 'Unlock the Sealed Cave',
    buttonText: 'Unlock Sealed Cave',
}, {
    slug: 'bigwhale',
    title: 'Raise the Big Whale',
    buttonText: 'Big Whale',
}, {
    slug: 'traderat',
    title: 'Trade away Rat Tail',
    buttonText: 'Rat Tail',
}, {
    slug: 'forge',
    title: 'Have Kokkol Forge',
    buttonText: 'Kokkol Forge',
}, {
    slug: 'wakeyang',
    title: 'Wake Yang with the Pan',
    buttonText: 'Wake Yang',
}, {
    slug: 'tradepan',
    title: 'Return the Pan to Yang\'s wife',
    buttonText: 'Turn in Pan',
}, {
    slug: 'tradepink',
    title: 'Trade away the Pink Tail',
    buttonText: 'Pink Tail',
}, {
    slug: 'pass',
    title: 'Unlock the Pass door in Toroia',
    buttonText: 'Turn in Pass',
}];

const locations: Location[] = [
    {
        id: 1,
        title: 'Antlion Cave',
        type: 'main',
        zone: 0,
        dependencies: [],
        available: true,
        cleared: false,
    },
    {
        id: 2,
        title: 'Fabul Defense',
        type: 'main',
        zone: 0,
        dependencies: [],
        available: true,
        cleared: false,
    },
    {
        id: 3,
        title: 'Mt. Ordeals',
        type: 'main',
        zone: 0,
        dependencies: [],
        available: true,
        cleared: false,
    },
    {
        id: 4,
        title: 'Baron Inn',
        type: 'main',
        zone: 0,
        dependencies: [],
        available: true,
        cleared: false,
    },
    {
        id: 5,
        title: 'Baron Castle',
        type: 'main',
        zone: 0,
        dependencies: ['baron'],
        available: false,
        cleared: false,
    },
    {
        id: 6,
        title: 'Cave Magnes',
        dependencies: ['harp'],
        type: 'main',
        zone: 0,
        available: false,
        cleared: false,
    },
    {
        id: 7,
        title: 'Tower Of Zot',
        type: 'main',
        zone: 0,
        dependencies: ['earth'],
        available: false,
        cleared: false,
    },
    {
        id: 8,
        title: 'Dwarf Castle',
        type: 'main',
        zone: 1,
        dependencies: [],
        available: false,
        cleared: false,
    },
    {
        id: 9,
        title: 'Lower Babil (Boss)',
        type: 'main',
        zone: 1,
        dependencies: [],
        available: false,
        cleared: false,
    },
    {
        id: 10,
        title: 'Lower Babil (Cannon)',
        type: 'main',
        zone: 1,
        dependencies: ['tower'],
        available: false,
        cleared: false,
    },
    {
        id: 11,
        title: 'Sealed Cave',
        type: 'main',
        zone: 1,
        dependencies: ['luca'],
        available: false,
        cleared: false,
    },
    {
        id: 12,
        title: 'Adamant Grotto',
        type: 'main',
        zone: 1,
        dependencies: ['hook', 'rat'],
        available: false,
        cleared: false,
    },
    {
        id: 13,
        title: 'D. Mist Hunt',
        type: 'main',
        zone: 0,
        dependencies: [],
        available: false,
        cleared: false,
    },
    {
        id: 14,
        title: 'Toroia Castle',
        type: 'main',
        zone: 0,
        dependencies: [],
        available: false,
        cleared: false,
    },
    {
        id: 15,
        title: 'Sheila One (1)',
        type: 'main',
        zone: 1,
        dependencies: [],
        available: false,
        cleared: false,
    },
    {
        id: 16,
        title: 'Shiela Two (2)',
        type: 'main',
        zone: 1,
        dependencies: ['pan'],
        available: false,
        cleared: false,
    },
    {
        id: 17,
        title: 'Baron Castle Basement',
        type: 'summon',
        zone: 0,
        dependencies: [],
        available: false,
        cleared: false,
    },
    {
        id: 18,
        title: 'Feymarch Queen',
        type: 'summon',
        zone: 1,
        dependencies: [],
        available: false,
        cleared: false,
    },
    {
        id: 19,
        title: 'Feymarch King',
        type: 'summon',
        zone: 1,
        dependencies: [],
        available: false,
        cleared: false,
    },
    {
        id: 20,
        title: 'Sylph Cave Bonk',
        type: 'summon',
        zone: 1,
        dependencies: ['pan'],
        available: false,
        cleared: false,
    },
    {
        id: 21,
        title: 'Cave Bahamut',
        type: 'summon',
        zone: 2,
        dependencies: ['darkness'],
        available: false,
        cleared: false,
    },
    {
        id: 22,
        title: 'Murasame Altar',
        type: 'moon',
        zone: 2,
        dependencies: ['darkness'],
        available: false,
        cleared: false,
    },
    {
        id: 23,
        title: 'White Spear Altar',
        type: 'moon',
        zone: 2,
        dependencies: ['darkness'],
        available: false,
        cleared: false,
    },
    {
        id: 24,
        title: 'Ribbon Room',
        type: 'moon',
        zone: 2,
        dependencies: ['darkness'],
        available: false,
        cleared: false,
    },
    {
        id: 25,
        title: 'Masamune Altar',
        type: 'moon',
        zone: 2,
        dependencies: ['darkness'],
        available: false,
        cleared: false,
    },
    {
        id: 26,
        title: 'Crystal Sword Altar',
        type: 'moon',
        zone: 2,
        dependencies: ['darkness'],
        available: false,
        cleared: false,
    },
];


export { defaultKI, bosses, quests, locations };