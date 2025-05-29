// @flow

import { quests, bosses, questRewards } from '@/app/lib/default-data';
import { FlagObject, v5Requirement } from '@/app/lib/interfaces';

const parseFlags = (flagString: string):FlagObject => {
    if (!flagString || typeof flagString !== 'string') {
        return {
            objectives: [],
            required: 0,
            isV5: false,
            v5Objectives: [],
            v5Required: [],
        };
    }

    const flagObj:FlagObject = {
        objectives: [],
        required: 0,
        isV5: flagString.indexOf('OA') >= 0,
        v5Objectives: [],
        v5Required: [],
    }

    if (flagObj.isV5) {
        // objective groups
        // since 5.0 will always expective objective groups, even as a minimum of 1,
        // the objectives part of flag object will be a two-dimensional array that gets looped over by the objective display component
        // also "Defeat Zeromus" will no longer be a displayed objective in 5.0 given the potential for multiple win conditions

        const groupTitle = ["A", "B", "C", "D", "E"]

        groupTitle.forEach(title => {

            // get objective set
            const groupIndex = flagString.indexOf(`O${title}`);
            if (groupIndex < 0) return;
            const spaceIndex = flagString.indexOf(" ", groupIndex);
            const setString = flagString.substring(groupIndex, spaceIndex);
            const setObj = [];

            // TODO: refactor objective checks so they aren't listed twice here

                // check set objectives (non-custom)
            if (setString.indexOf('dkmatter') >= 0 ) {
                setObj.push({
                    id: setObj.length,
                    label: 'Turn in 30 Dark Matters to Kory',
                    time: 0,
                });
            }

            if (setString.indexOf('classicforge') >= 0 ) {
                setObj.push({
                    id: setObj.length,
                    label: 'Forge the Crystal',
                    time: 0,
                });
            }

            if (setString.indexOf('classicgiant') >= 0 ) {
                setObj.push({
                    id: setObj.length,
                    label: 'Complete the Giant of Bab-il',
                    time: 0,
                });
            }

            // custom -- character obtain

            const characters = ['Cecil', 'Kain', 'Rydia', 'Tellah', 'Edward', 'Rosa', 'Yang', 'Palom', 'Porom', 'Cid', 'Edge', 'FuSoYa']

            for (const char of characters) {
                if (setString.indexOf(`char_${char.toLowerCase()}`) >= 0 ) {
                    setObj.push({
                        id: flagObj.objectives.length,
                        label: `Get ${char}`,
                        time: 0,
                    });
                }
            }

            // custom - boss hunt
            
            for (const boss of bosses) {
                if (setString.indexOf(`boss_${boss.slug}`) >= 0 ) {
                    setObj.push({
                        id: setObj.length,
                        label: `Defeat ${boss.title}`,
                        time: 0,
                    });
                }
            }

            // custom quests

            for (const quest of quests) {
                if (setString.indexOf(`quest_${quest.slug}`) >= 0 ) {
                    setObj.push({
                        id: flagObj.objectives.length,
                        label: quest.title,
                        time: 0,
                    });
                }
            }

            // collect mode

            function getAmount(str: string, comp: string): string {
                if (!str || !comp) return '';
                const compIndex = str.indexOf(comp);
                if (compIndex < 0) return '';
                const digit1 = parseInt(str.charAt(compIndex + comp.length));
                const digit2 = parseInt(str.charAt(compIndex + comp.length + 1));
                if (isNaN(digit2)) {
                    return digit1.toString();
                }
                return digit1.toString() + digit2.toString();
            }

            if (setString.indexOf('collect_ki') >= 0) {
                setObj.push({
                    id: setObj.length,
                    label: `Obtain ${getAmount(setString, "collect_ki")} key items`,
                    time: 0
                })
            } 

            if (setString.indexOf('collect_boss') >= 0) {
                setObj.push({
                    id: setObj.length,
                    label: `Defeat ${getAmount(setString, "collect_boss")} bosses`,
                    time: 0
                })
            } 

            // un-comment when/if collect_char gets re-added
            // if (setString.indexOf('collect_char') >= 0) {
            //     setObj.push({
            //         id: setObj.length,
            //         label: `Recruit ${getAmount(setString, "collect_char")} characters`,
            //         time: 0
            //     })
            // } 

            // objectives from other groups
            const groups = ["a", "b", "c", "d", "e"];
            groups.forEach(group => {
                if (setString.indexOf(`group_${group}`) >= 0) {
                    const objTrigger = setString.charAt(setString.indexOf(`group_${group}`) + 8);
                    const numOfObj = objTrigger === "a" ? "all" : objTrigger.toString();
                    setObj.push({
                        id: setObj.length,
                        label: `Complete ${numOfObj} objective${numOfObj === "1" ? "" : "s"} from Group ${group.toLocaleUpperCase()}`,
                        time: 0,
                    })
                }
            })
            

            // random objectives
            const randomIndex = setString.indexOf(`random:`);
            if (randomIndex >= 0) {
                for (let i = 0; i < parseInt(setString.charAt(randomIndex + 7)); i++) {
                    setObj.push({
                        id: setObj.length,
                        label: `Random objective ${i + 1}`,
                        time: 0,
                        random: true,
                    });
                }
            }

            flagObj.v5Objectives.push(setObj);

            // requirements
            let doIndex = 0;
            const setReq:v5Requirement = {};
            while (doIndex < setString.length) {
                const current = setString.indexOf("do_", doIndex + 1);
                if (current < 0) {
                    doIndex = setString.length;
                } else {
                    // check digit after do_
                    const nextChar = setString.charAt(current + 3);
                    if (isNaN(parseInt(nextChar)) && nextChar !== "a") {
                        console.log("Invalid character following 'do_'");
                        break;
                    } else {
                        // prep reward
                        // first find the start and ending of current do
                        const startpoint = setString.indexOf(":", current);
                        const endpoint = setString.indexOf("/", current);
                        // get the substring from this reward, and compare it to the reward table
                        const rewardSubstr = setString.substring(startpoint + 1, endpoint < 0 ? setString.length : endpoint);
                        const foundReward = questRewards.find(reward => reward.slug === rewardSubstr);
                        if (!foundReward) {
                            console.log(`Warning: do_ reward ${rewardSubstr} not found in reward table`, current, startpoint, endpoint);
                            doIndex = setString.length;
                            break;
                        }
                        const reward = foundReward.display;

                        switch (nextChar) {
                            case "a":
                                setReq.all = reward;
                                break;
                            case "1":
                                const nexterChar = setString.charAt(current + 4);
                                if (nexterChar === "0") {
                                    setReq[10] = reward;
                                } else {
                                    setReq[1] = reward;
                                }
                                break;
                            case "2":
                                setReq[2] = reward;
                                break;
                            case "3":
                                setReq[3] = reward;
                                break;
                            case "4":
                                setReq[4] = reward;
                                break;
                            case "5":
                                setReq[5] = reward;
                                break;
                            case "6":
                                setReq[6] = reward;
                                break;
                            case "7":
                                setReq[7] = reward;
                                break;
                            case "8":
                                setReq[8] = reward;
                                break;
                            case "9":
                                setReq[9] = reward;
                                break;
                            
                        }
                    }
                    doIndex = current;
                }
            }
            flagObj.v5Required.push(setReq);
        })
        
        
    } else {

        // check set objectives (non-custom)
        if (flagString.indexOf('dkmatter') >= 0 ) {
            flagObj.objectives.push({
                id: flagObj.objectives.length,
                label: 'Turn in 30 Dark Matters to Kory',
                time: 0,
            });
        }

        if (flagString.indexOf('classicforge') >= 0 ) {
            flagObj.objectives.push({
                id: flagObj.objectives.length,
                label: 'Forge the Crystal',
                time: 0,
            });
        }

        if (flagString.indexOf('classicgiant') >= 0 ) {
            flagObj.objectives.push({
                id: flagObj.objectives.length,
                label: 'Complete the Giant of Bab-il',
                time: 0,
            });
        }

        if (flagString.indexOf('fiends') >= 0 ) {
            const fiendList = ['Milon', 'Milon Z', 'Kainazzo', 'Valvalis', 'Rubicant', 'Elements'];
            for (const fiend of fiendList) {
                flagObj.objectives.push({
                    id: flagObj.objectives.length,
                    label: `Defeat ${fiend}`,
                    time: 0,
                });
            }
        }

        // custom -- character obtain

        const characters = ['Cecil', 'Kain', 'Rydia', 'Tellah', 'Edward', 'Rosa', 'Yang', 'Palom', 'Porom', 'Cid', 'Edge', 'FuSoYa']

        for (const char of characters) {
            if (flagString.indexOf(`char_${char.toLowerCase()}`) >= 0 ) {
                flagObj.objectives.push({
                    id: flagObj.objectives.length,
                    label: `Get ${char}`,
                    time: 0,
                });
            }
        }

        // custom - boss hunt
        
        for (const boss of bosses) {
            if (flagString.indexOf(`boss_${boss.slug}`) >= 0 ) {
                flagObj.objectives.push({
                    id: flagObj.objectives.length,
                    label: `Defeat ${boss.title}`,
                    time: 0,
                });
            }
        }

        // custom quests

        for (const quest of quests) {
            if (flagString.indexOf(`quest_${quest.slug}`) >= 0 ) {
                flagObj.objectives.push({
                    id: flagObj.objectives.length,
                    label: quest.title,
                    time: 0,
                });
            }
        }

        

        // grunthack: mode KI
        const modeKIindex = flagString.indexOf(`ki`);
        if (modeKIindex >= 0) {
            const digit1 = parseInt(flagString.charAt(modeKIindex + 2));
            // if (isNaN(digit1)) return;
            if (digit1 === 1) {
                const digit2 = parseInt(flagString.charAt(modeKIindex + 3));
                if (isNaN(digit2)) {
                    flagObj.objectives.push({
                        id: flagObj.objectives.length,
                        label: `Obtain ${digit1} key item`,
                        time: 0,
                    })
                } else {
                    flagObj.objectives.push({
                        id: flagObj.objectives.length,
                        label: `Obtain ${digit1}${digit2} key items`,
                        time: 0,
                    })
                }
            }
            if (digit1 > 1) {
                flagObj.objectives.push({
                    id: flagObj.objectives.length,
                    label: `Obtain ${digit1} key items`,
                    time: 0,
                })
            }
        }

        // don't forget the z-fight
        if (flagString.indexOf('win:game') < 0) {
            flagObj.objectives.push({
                id: flagObj.objectives.length,
                label: 'Defeat Zeromus',
                time: 0,
            })
        }

        // random objectives
        const randomIndex = flagString.indexOf(`random:`);
        if (randomIndex >= 0) {
            for (let i = 0; i < parseInt(flagString.charAt(randomIndex + 7)); i++) {
                flagObj.objectives.push({
                    id: flagObj.objectives.length,
                    label: `Random objective ${i + 1}`,
                    time: 0,
                    random: true,
                });
            }
        }

        // galeswift -- include second objective set
        const random2Index = flagString.indexOf(`random2:`);
        if (random2Index >= 0) {
            for (let i = 0; i < parseInt(flagString.charAt(random2Index + 8)); i++) {
                flagObj.objectives.push({
                    id: flagObj.objectives.length,
                    label: `2nd set Random objective ${i + 1}`,
                    time: 0,
                    random: true,
                });
            }
        }

        // required objective number
        if (flagString.indexOf('req:') >= 0 && flagString.indexOf('req:all') < 0) {
            flagObj.required = parseInt(flagString.charAt(flagString.indexOf('req:') + 4));
        } else if (flagString.indexOf('req:') >= 0 && flagString.indexOf('req:all') >= 0) {
            flagObj.required = flagString.indexOf('win:game') < 0 ? flagObj.objectives.length - 1 : flagObj.objectives.length;
        }

    }


    // console.log('flagobj', flagObj)

    return flagObj;
}

export default parseFlags;