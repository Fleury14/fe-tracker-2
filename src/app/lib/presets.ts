import { PresetGroup } from '@/app/lib/interfaces';

const presets:PresetGroup[] = [
    {
        groupTitle: "AFC",
        flags: [
            {
                title: "Adamant Cup Experience",
                flags: "Omode:ki12/random:2,quest/random2:1,tough_quest/req:all/win:crystal Kmain/summon/moon/nofree:dwarf/unweighted Pkey Cstandard/nofree/restrict:cecil,fusoya/j:abilities/paladin/nekkie/party:4/treasure:free,unsafe Twildish Sprice:200/pricey:items/standard Bstandard/alt:gauntlet/whichbez Etoggle Glife/sylph/backrow -kit:better -smith:alt -fusoya:sequential_r -exp:objectivebonus25 -tweak:edwardheal"
            },
            {
                title: "Firebomb Fiesta",
                flags: "O1:quest_forge/2:quest_cavebahamut/3:quest_monsterking/4:quest_monsterqueen/5:quest_masamunealtar/random:3,tough_quest/req:6/win:game Kmain/miab:above/pink/nofree:package/force:magma Pnone Cstandard/nofree/distinct:7/start:not_tellah,not_fusoya/no:fusoya/restrict:cecil/j:abilities/nekkie/nodupes/hero Twildish/mintier:2/money Swild/always:damage_items/no:j Bstandard/nofree/unsafe/alt:gauntlet/whichburn/whichbez/woahdin Etoggle/noexp/nogp Gwarp/life/sylph/backrow -kit:dwarf -kit2:miab -kit3:basic -noadamants -nocursed -spoon -exp:kicheckbonus2 -tweak:edwardheal"
            },
            {
                title: "Zemus Zone Anthology",
                flags: "O1:quest_forge/req:all/win:crystal Kmain/moon/pink/nofree/unweighted/start:spoon Pkey Crelaxed/nofree/distinct:8/thrift:3/j:abilities/nodupes/hero Tsemipro/playable/junk Swildish/no:vampires,damage_items Bstandard/restrict:giant,package/whichburn/whichbez Etoggle Glife/sylph/backrow/64 -kit:freedom -noadamants -fusoya:maybe -exp:maxlevelbonus -tweak:edwardheal"
            },
        ]
    },
    {
        groupTitle: "5.0 Alpha",
        flags: [
            {
                title: "Plink Pony Club",
                flags: "OArandom:4,tough_quest/do_2:spoon/do_4:superweapon OBrandom:4,char/do_2:ribbon/do_4:adamantarmor OC1:collect_boss13/random:4,boss/do_3:siren/do_5:cursedring ODgroup_a:all/group_b:all/group_c:all/do_2:crystal Kmain/summon/moon/miab:lst/char/nofree Pkey Cstandard/nofree/nogiant/distinct:8/start:any/j:abilities/nekkie/nodupes/hero Tpro/playable Sstandard/playable/no:sirens Bchaos/alt:gauntlet/chaosburn Etoggle Xobjbonus:5 Gwarp/life/sylph/backrow Qfastrom/msgspeedfix -kit:better -noadamants -nocursed -smith:alt,playable"
            },
            {
                title: "Holding out for a Hero",
                flags: "OA1:collect_ki8/do_all:cecil OB1:collect_ki9/do_all:crystalsword OC1:collect_ki10/do_all:crystal Kmain/summon/moon/miab:above/char/forge/nofree Pkey Cstandard/no:cecil,fusoya/j:abilities/nekkie/party:4/permajoin/wishes Tstandard Sstandard Bchaos/alt:gauntlet/chaosburn Etoggle Xobjbonus:10 Gwarp/life/backrow Qfastrom/msgspeedfix -kit:freedom -kit2:miab -noadamants -nocursed -spoon -vanilla:agility"
            },
            {
                title: "Intro to Kchar",
                flags: "OA1:collect_ki10/2:quest_forge/do_all:crystal Kmain/miab:above/char Pkey Cstandard/nofree/start:edge/j:abilities Twildish Sstandard Bstandard/alt:gauntlet/whyburn Etoggle Glife/sylph/backrow Qmsgspeedfix -kit:better -spoon -smith:super"
            },
            {
                title: "Dark Matter, 5.0 Edition",
                flags: "Omode_dkmatter:quests/win:crystal OA1:collect_dkmatter20/do_all:superweapon Kmain/summon/miab:above/char/nofree Pkey Cstandard/nofree/distinct:8/j:abilities/nodupes/hero Tpro/playable Sstandard Bchaos/alt:gauntlet/chaosburn Etoggle Xnokeybonus/objbonus:10 Gwarp/life/sylph/backrow Qfastrom/msgspeedfix -kit:better -kit2:freedom -noadamants -spoon -smith:alt,playable"
            },
            {
                title: "You Spoony Ninja",
                flags: "OA1:quest_monsterqueen/2:quest_monsterking/3:quest_murasamealtar/4:quest_crystalaltar/5:quest_whitealtar/6:quest_ribbonaltar/7:quest_masamunealtar/8:quest_baronbasement/random:3,quest/do_1:spoon/do_2:spoon/do_3:spoon/do_4:spoon/do_5:spoon/do_6:spoon/do_7:spoon/do_8:spoon/do_9:spoon/do_10:spoon/do_all:spoon OB1:quest_forge/2:quest_tradepan/3:quest_sealedcave/4:quest_tradepink/do_1:spoon/do_2:spoon/do_3:crystal Kmain/summon/moon Pkey Crelaxed/nofree/distinct:7/start:edge/j:abilities/nekkie Tpro/playable/sparse:70/miabs:standard Sstandard Bchaos/chaosburn Etoggle Xnoboost/nokeybonus/objbonus:10 Glife/sylph/backrow Qfastrom/msgspeedfix -kit:better -kit2:meme -kit3:money -noadamants -smith:alt"
            },
            {
                title: "Angry Bird",
                flags: "OA1:quest_monsterqueen/2:quest_monsterking/3:quest_murasamealtar/4:quest_crystalaltar/5:quest_whitealtar/6:quest_ribbonaltar/7:quest_masamunealtar/8:quest_baronbasement/random:3,quest/do_1:spoon/do_2:spoon/do_3:spoon/do_4:spoon/do_5:spoon/do_6:spoon/do_7:spoon/do_8:spoon/do_9:spoon/do_10:spoon/do_all:spoon OB1:quest_forge/2:quest_tradepan/3:quest_sealedcave/4:quest_tradepink/do_1:spoon/do_2:spoon/do_3:crystal Kmain/summon/moon Pkey Crelaxed/nofree/distinct:7/start:edge/j:abilities/nekkie Tpro/playable/sparse:70/miabs:standard Sstandard Bchaos/chaosburn Etoggle Xnoboost/nokeybonus/objbonus:10 Glife/sylph/backrow Qfastrom/msgspeedfix -kit:better -kit2:meme -kit3:money -noadamants -smith:alt"
            },
        ]
    }
]

export default presets;