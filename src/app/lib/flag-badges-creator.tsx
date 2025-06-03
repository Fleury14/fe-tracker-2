import { kitList } from '@/app/lib/kit-list';

const renderCharacters = (flags: string) => {
    const characterText = [];
    // const isV5 = flags.indexOf("OA") >= 0;
    // get character section of flag string
    const charString = getPropertySection(flags, 'C')

    // main character setting
    if (charString.indexOf('standard') >= 0) {
        characterText.push(<span key="standard" className="flag-badge">Standard</span>)
    }
    if (charString.indexOf('vanilla') >= 0) {
        characterText.push(<span key="vanilla" className="flag-badge">Vanilla</span>)
    }
    if (charString.indexOf('relaxed') >= 0) {
        characterText.push(<span key="relaxed" className="flag-badge">Relaxed</span>)
    }
    if (charString.indexOf('hero') >= 0) {
        characterText.push(<span key="hero" className="flag-badge flag-badge-danger">Starting character is the HERO</span>)
    }
    if (charString.indexOf('risky') >= 0) {
        characterText.push(<span key="Crisky" className="flag-badge flag-badge-danger">Risky Placement</span>)
    }
    if (charString.indexOf('wishes') >= 0) {
        characterText.push(<span key="Crisky" className="flag-badge flag-badge-yay">All @ Tower of Wishes</span>)
    }
    if (charString.indexOf('nogiant') >= 0) {
        characterText.push(<span key="Cnogiant" className="flag-badge flag-badge"> No Giant Char</span>)
    }

    // extra settings
    if (charString.indexOf('spells') >= 0) {
        characterText.push(<span key="j-spells" className="flag-badge"> J-Spells</span>)
    }
    if (charString.indexOf('abilities') >= 0) {
        characterText.push(<span key="j-abilities" className="flag-badge"> J-Abilities</span>)
    }
    if (charString.indexOf('nekkie') >= 0) {
        characterText.push(<span key="nekkie" className="flag-badge"> Limited gear start</span>);
    }
    if (charString.indexOf('distinct') >= 0) {
        const distinctIndex = charString.indexOf('distinct');
        const numStart = distinctIndex + 9;
        const isTwoDigit = numStart === charString.length - 1 || charString.charAt(numStart + 1) !== '/';
        const numOfChars = parseInt(charString.slice(numStart, isTwoDigit ? numStart + 2 : numStart + 1));
        characterText.push(numOfChars < 8
        ? <span key="distinct" className="flag-badge flag-badge-danger">{numOfChars} distinct</span>
        : <span key="distinct" className="flag-badge">{numOfChars} distinct</span>
        );
    }
    if (charString.indexOf('maybe') >= 0) {
        characterText.push(<span key="maybe" className="flag-badge"> Not guaranteed</span>)
    }
    if (charString.indexOf('hi') >= 0) {
        characterText.push(<span key="hi" className="flag-badge"> Forced join</span>)
    }
    if (charString.indexOf('fifo') >= 0) {
        characterText.push(<span key="fifo" className="flag-badge flag-badge-danger"> Forced join/First out</span>)
    }
    if (charString.indexOf('paladin') >= 0) {
        characterText.push(<span key="paladin" className="flag-badge flag-badge-yay"> Cecil starts as a paladin</span>)
    }
    if (charString.indexOf('bye') >= 0) {
        characterText.push(<span key="bye" className="flag-badge"> No rejoin</span>)
    }
    if (charString.indexOf('nodupes') >= 0) {
        characterText.push(<span key="nodupes" className="flag-badge"> No Dupes</span>)
    }
    if (charString.indexOf('party') >= 0) {
        const partyIndex = charString.indexOf('party');
        const numStart = partyIndex + 6;
        const partySize = parseInt(charString.slice(numStart, numStart + 1));
        characterText.push(<span key="party-size" className={`flag-badge${partySize < 4 ? ' flag-badge-danger' : ''}`}> Max party size: {partySize}</span>)
    }
    if (charString.indexOf('permadeath') >= 0) {
        characterText.push(<span key="permadeath" className="flag-badge flag-badge-danger"> Permadeath</span>)
    }
    if (charString.indexOf('permajoin') >= 0) {
        characterText.push(<span key="permajoin" className="flag-badge flag-badge-danger"> Permajoin</span>)
    }
    if (charString.indexOf('permadeader') >= 0) {
        characterText.push(<span key="permadeader" className="flag-badge flag-badge-danger"> PermaDEADER</span>)
    }
    if (charString.indexOf('noearned') >= 0) {
        characterText.push(<span key="no-earned" className="flag-badge flag-badge-danger"> No Earned Chars</span>)
    }
    if (charString.indexOf('nopartner') >= 0) {
        characterText.push(<span key="no-earned" className="flag-badge flag-badge-danger"> No Starting Partner</span>)
    }
    if (charString.indexOf('treasure') >= 0) {
        if (charString.indexOf('free') >= 0) {
            characterText.push(<span key="treasure-free" className="flag-badge flag-badge-danger"> Free characters moved to chests</span>)
        }
        if (charString.indexOf('earned') >= 0) {
            characterText.push(<span key="tresure-earned" className="flag-badge flag-badge-danger"> Earned characters moved to chests</span>)
        }
        if (charString.indexOf('relaxed') >= 0) {
            characterText.push(<span key="tresure-relaxed" className="flag-badge flag-badge-danger"> Restricted characters in non-miab chests</span>)
        }
        if (charString.indexOf('unsafe') >= 0) {
            characterText.push(<span key="tresure-unsafe" className="flag-badge flag-badge-danger"> Characters in chests (Moon/underground included)</span>)
        }
    }
    if (charString.indexOf('thrift') >= 0) {
        const tier = charString.charAt(charString.indexOf('thrift') + 7);
        characterText.push(<span key="thrift" className="flag-badge"> Random gear start (max tier {tier})</span>)
    }
    if (charString.indexOf('nofree') >= 0) {
        characterText.push(<span key="nofree" className="flag-badge">No free Chars</span>);
    } else {
        characterText.push(<span key="nofree" className="flag-badge flag-badge-yay">Free Chars</span>);
    }

    return (<div className="flex flex-wrap items-center">{characterText}</div>);
}

const renderBosses = (flags: string) => {
    const BossesText = [];

    // get boss section of string
    const bString = getPropertySection(flags, 'B')

    if (bString.indexOf('nofree') >= 0) {
        BossesText.push(<span key="nofree" className="flag-badge flag-badge-danger"> No Free Bosses</span>);
    }
    if (bString.indexOf('unsafe') >= 0 || bString.indexOf('risky') >= 0) {
        BossesText.push(<span key="unsafe" className="flag-badge flag-badge-danger"> No Safety Checks</span>);
    }
    if (bString.indexOf('whichburn') >= 0) {
        BossesText.push(<span key="whichburn" className="flag-badge"> Which-Burn</span>);
    }
    if (bString.indexOf('whyburn') >= 0) {
        BossesText.push(<span key="whyburn" className="flag-badge flag-badge-yay"> Why-burn</span>);
    }
    if (bString.indexOf('chaos') >= 0) {
        BossesText.push(<span key="chaos" className="flag-badge flag-badge-yay"> Chaotic</span>);
    }
    if (bString.indexOf('chaosburn') >= 0) {
        BossesText.push(<span key="chaosburn" className="flag-badge flag-badge-yay"> Unique Wyvern attacks</span>);
    }
    if (bString.indexOf('itburns') >= 0) {
        BossesText.push(<span key="itburns" className="flag-badge flag-badge-danger"> Dangerous Whyburn</span>);
    }
    if (bString.indexOf('whoadin') >= 0) {
        BossesText.push(<span key="whoadin" className="flag-badge"> 1st/2nd Zantestsuken randomized</span>);
    }
    if (bString.indexOf('whybez') >= 0) {
        BossesText.push(<span key="whybez" className="flag-badge"> No Shadow @ Golbez</span>);
    }
    if (bString.indexOf('whichbez') >= 0) {
        BossesText.push(<span key="whichbez" className="flag-badge"> Shadow/Golbez spells randomized</span>);
    }
    if (bString.indexOf('whichburn') < 0 && bString.indexOf('whyburn') < 0) {
        BossesText.push(<span key="wyvern" className="flag-badge"> Standard Wyvern</span>);
    }

    return <div className="flex flex-wrap items-center">{BossesText}</div>
}

const renderTreasure = (flags: string) => {
    const TreasureText = [];

    // get character section of flag string
    const trString = getPropertySection(flags, 'T');
    
    // check initial treasure settings
    if (trString.indexOf('standard') >= 0) {
        TreasureText.push(<span key="standard" className="flag-badge"> Standard (Unweighted)</span>);
    }
    if (trString.indexOf('pro') >= 0) {
        TreasureText.push(<span key="pro" className="flag-badge"> Pro (Weighted)</span>);
    }
    if (trString.indexOf('wildish') >= 0) {
        TreasureText.push(<span key="wildish" className="flag-badge"> Wild-ish (Weighted)</span>)
    }
    if (trString.indexOf('wild') >= 0 && trString.indexOf('wildish') < 0) {
        TreasureText.push(<span key="wild" className="flag-badge flag-badge-yay"> Wild (Unweighted)</span>);
    }

    // modifiers
    if (trString.indexOf('sparse') >= 0) {
        // find where "sparse" is located, then grab out where the percentage
        const sparseIndex = trString.indexOf('sparse');
        const percent = trString.slice(sparseIndex + 7, sparseIndex + 9);
        TreasureText.push(<span key="sparse" className="flag-badge"> Sparse: {percent}%</span>);
    }
    if (trString.indexOf('no:j') >= 0) {
        TreasureText.push(<span key="no-j" className="flag-badge"> No J-Items</span>);
    }
    if (trString.indexOf('junk') >= 0) {
        TreasureText.push(<span key="no-j" className="flag-badge"> Junk Included</span>);
    }
    if (trString.indexOf('maxtier:3') >= 0) {
        TreasureText.push(<span key="max-tier" className="flag-badge flag-badge-danger"> No tier 4-8 untrapped</span>);
    }
    if (trString.indexOf('maxtier:4') >= 0) {
        TreasureText.push(<span key="max-tier" className="flag-badge flag-badge-danger"> No tier 5-8 untrapped</span>);
    }
    if (trString.indexOf('maxtier:5') >= 0) {
        TreasureText.push(<span key="max-tier" className="flag-badge"> No tier 6,7,8 untrapped</span>);
    }
    if (trString.indexOf('maxtier:6') >= 0) {
        TreasureText.push(<span key="max-tier" className="flag-badge"> No tier 7,8 untrapped</span>);
    }
    if (trString.indexOf('maxtier:7') >= 0) {
        TreasureText.push(<span key="max-tier" className="flag-badge"> No tier 8 untrapped</span>);
    }
    if (trString.indexOf('mintier') >= 0) {
        const tier = trString.charAt(trString.indexOf('mintier') + 8)
        TreasureText.push(<span key="money" className="flag-badge"> Minimum tier {tier} treasure</span>);
    }
    if (trString.indexOf('money') >= 0) {
        TreasureText.push(<span key="money" className="flag-badge flag-badge-danger"> All untrapped are $MONEY$</span>);
    }
    if (trString.indexOf('playable') >= 0) {
        TreasureText.push(<span key="money" className="flag-badge flag-badge-yay"> Playable character treasure only</span>);
    }
    if (trString.indexOf('unrestrict') >= 0) {
        if (trString.indexOf('treasury') >= 0) {
            TreasureText.push(<span key="unrestrict-treasury" className="flag-badge"> Treasury unaffected by maxtier</span>);
         }
         if (trString.indexOf('moon') >= 0) {
            TreasureText.push(<span key="unrestrict-moon" className="flag-badge"> Moon unaffected by maxtier</span>);
         }
         if (trString.indexOf('underworld') >= 0) {
            TreasureText.push(<span key="unrestrict-under" className="flag-badge"> Underground unaffected by maxtier</span>);
         }
         if (trString.indexOf('overworld') >= 0) {
            TreasureText.push(<span key="unrestrict-under" className="flag-badge"> Overworld unaffected by maxtier</span>);
         }
    }

    return (<div className="flex flex-wrap items-center">{TreasureText}</div>)
}

const renderGlitches = (flags: string) => {
    const glitchText = [];

    // get character section of flag string
    const glitchString = getPropertySection(flags, 'G');

    if (glitchString.indexOf('life') < 0) {
        glitchText.push(<span key="no-life" className="flag-badge flag-badge-danger"> No Life</span>);
    } else {
        glitchText.push(<span key="life" className="flag-badge"> Life</span>);
    }
    if (glitchString.indexOf('warp') >= 0) {
        glitchText.push(<span key="warp" className="flag-badge"> Warp</span>);
    }
    if (glitchString.indexOf('dupe') >= 0) {
        glitchText.push(<span key="dupe" className="flag-badge"> Duplication</span>);
    }
    if (glitchString.indexOf('mp') >= 0) {
        glitchText.push(<span key="mp" className="flag-badge"> MP Overflow</span>);
    }
    if (glitchString.indexOf('64') >= 0) {
        glitchText.push(<span key="64" className="flag-badge"> 64 Door</span>);
    }
    if (glitchString.indexOf('sylph') < 0) {
        glitchText.push(<span key="sylph" className="flag-badge flag-badge-danger"> Sylph gitch OFF</span>)
    }
    if (glitchString.indexOf('backrow') < 0) {
        glitchText.push(<span key="backrow" className="flag-badge flag-badge-danger"> Backrow gitch OFF</span>)
    }
    if (glitchString.indexOf('backrow') >= 0) {
        glitchText.push(<span key="backrow" className="flag-badge"> Backrow</span>)
    }
    if (glitchString.indexOf('sylph') >= 0) {
        glitchText.push(<span key="sylph" className="flag-badge"> Sylph</span>)
    }

    return (<div className="flex flex-wrap items-center">{glitchText}</div>);
}

const renderShops = (flags: string) => {
    const shopText = [];

    // get shop section of flag string
    const shopString = getPropertySection(flags, 'S');

    if (shopString.indexOf('vanilla') >= 0 && shopString.indexOf('miabs:vanilla') < 0) {
        shopText.push(<span key="vanilla" className="flag-badge">Vanilla</span>);
    }
    if (shopString.indexOf('standard') >= 0 && shopString.indexOf('miabs:standard') < 0) {
        shopText.push(<span key="standard" className="flag-badge">Standard</span>);
    }
    if (shopString.indexOf('pro') >= 0 && shopString.indexOf('miabs:pro') < 0) {
        shopText.push(<span key="pro" className="flag-badge">Pro</span>);
    }
    if (shopString.indexOf('wildish') >= 0 && shopString.indexOf('miabs:wildish') < 0) {
        shopText.push(<span key="wildish" className="flag-badge flag-badge-yay">Wild-ish</span>);
    }
    if (shopString.indexOf('wild') >= 0 && shopString.indexOf('wildish') < 0 && shopString.indexOf('miabs:wild') < 0) {
        shopText.push(<span key="wild" className="flag-badge flag-badge-yay">Wild</span>);
    }
    if (shopString.indexOf('miabs:vanilla') >= 0) {
        shopText.push(<span key="miabs-vanilla" className="flag-badge flag-badge">Miabs: Vanilla</span>);
    }
    if (shopString.indexOf('miabs:pro') >= 0) {
        shopText.push(<span key="miabs-pro" className="flag-badge flag-badge">Miabs: Pro</span>);
    }
    if (shopString.indexOf('miabs:standard') >= 0) {
        shopText.push(<span key="miabs-standard" className="flag-badge flag-badge">Miabs: Standard</span>);
    }
    if (shopString.indexOf('miabs:wildish') >= 0) {
        shopText.push(<span key="miabs-wildish" className="flag-badge flag-badge-yay">Miabs: Wildish</span>);
    }
    if (shopString.indexOf('miabs:wild') >= 0 && shopString.indexOf('miabs:wildish') < 0) {
        shopText.push(<span key="miabs-wild" className="flag-badge flag-badge-yay">Miabs: Wild</span>);
    }
    if (shopString.indexOf('miabs:vanilla') >= 0) {
        shopText.push(<span key="miabs-vanilla" className="flag-badge flag-badge-yay">Miabs: Vanilla</span>);
    }
    if (shopString.indexOf('miabs:vanilla') >= 0) {
        shopText.push(<span key="miabs-vanilla" className="flag-badge flag-badge-yay">Miabs: Vanilla</span>);
    }
    if (shopString.indexOf('free') >= 0) {
        shopText.push(<span key="free-shops" className="flag-badge flag-badge-yay">Everything is FREE</span>);
    }
    if (shopString.indexOf('mixed') >= 0) {
        shopText.push(<span key="mixed-prices" className="flag-badge">Prices Randomized</span>);
    }
    if (shopString.indexOf('cabins') >= 0) {
        shopText.push(<span key="only-cabins" className="flag-badge flag-badge-danger">Only Cabins</span>);
    }
    if (shopString.indexOf('empty') >= 0) {
        shopText.push(<span key="only-cabins" className="flag-badge flag-badge-danger">Shops empty</span>);
    }
    if (shopString.indexOf('same') >= 0) {
        shopText.push(<span key="only-same" className="flag-badge flag-badge-danger">All shops sell the same one item</span>);
    }
    if (shopString.indexOf('sell:quarter') >= 0) {
        shopText.push(<span key="sell-quarter" className="flag-badge flag-badge-danger">Items sell at 1/4 price</span>);
    }
    if (shopString.indexOf('sell:0') >= 0) {
        shopText.push(<span key="sell-0" className="flag-badge flag-badge-danger">Everything Sells for 0GP</span>);
    }
    if (shopString.indexOf('life') >= 0) {
        shopText.push(<span key="no-life" className="flag-badge flag-badge-danger">No Life Potions</span>);
    }
    if (shopString.indexOf('price:') >= 0) {
        const priceSub = getPropertySubSection(shopString, 'price:');
        const percent = priceSub.slice(priceSub.indexOf(':') + 1);
        shopText.push(<span key="price-adjustment" className="flag-badge flag-badge">Prices are {percent}% of normal</span>);
        if (shopString.indexOf('pricey:') >= 0) {
            const pricey = getPropertySubSection(shopString, 'pricey:').slice(7);
            shopText.push(<span key="price-adjustment-effect" className="flag-badge flag-badge">Prices affect {pricey}</span>);
        }
    }
    if (shopString.indexOf('no:') >= 0) {
        const bannedString = getPropertySection(shopString, 'no:');
        if (bannedString.indexOf("j") >= 0 ) {
            shopText.push(<span key="no-j" className="flag-badge flag-badge-danger">No J-Items</span>);
        }
        if (bannedString.indexOf('apples') >= 0) {
            shopText.push(<span key="never-apples" className="flag-badge">Apples banned</span>);    
        }
        if (bannedString.indexOf('sirens') >= 0) {
            shopText.push(<span key="never-sirens" className="flag-badge">Sirens banned</span>);    
        }
        if (bannedString.indexOf('vampires') >= 0) {
            shopText.push(<span key="never-vampires" className="flag-badge">Vampires banned</span>);    
        }
        if (bannedString.indexOf('hrglass') >= 0) {
            shopText.push(<span key="never-hrglass" className="flag-badge">HrGlass2 banned</span>);    
        }
        if (bannedString.indexOf('bacchus') >= 0) {
            shopText.push(<span key="never-bacchus" className="flag-badge">Bacchus banned</span>);    
        }
        if (bannedString.indexOf('starveil') >= 0) {
            shopText.push(<span key="never-starveil" className="flag-badge">Starveil banned</span>);    
        }
        if (bannedString.indexOf('cure3') >= 0) {
            shopText.push(<span key="never-cure3" className="flag-badge">Cure3 banned</span>);    
        }
        if (bannedString.indexOf('illusion') >= 0) {
            shopText.push(<span key="never-illusion" className="flag-badge">Illusions banned</span>);
        }
        if (bannedString.indexOf('coffin') >= 0) {
            shopText.push(<span key="never-coffin" className="flag-badge">Coffins banned</span>);    
        }
        if (bannedString.indexOf('damage_items') >= 0) {
            shopText.push(<span key="never-damage-items" className="flag-badge">Elemental damage items banned</span>);    
        }
    }
    if (shopString.indexOf('always') >= 0) {
        const guaranteedString = getPropertySubSection(shopString, 'always:');
        if (guaranteedString.indexOf('apples') >= 0) {
            shopText.push(<span key="always-apples" className="flag-badge">Apples guaranteed</span>);    
        }
        if (guaranteedString.indexOf('sirens') >= 0) {
            shopText.push(<span key="always-sirens" className="flag-badge">Sirens guaranteed</span>);    
        }
        if (guaranteedString.indexOf('vampires') >= 0) {
            shopText.push(<span key="always-vampires" className="flag-badge">Vampires guaranteed</span>);    
        }
        if (guaranteedString.indexOf('hrglass') >= 0) {
            shopText.push(<span key="always-hrglass" className="flag-badge">HrGlass2 guaranteed</span>);    
        }
        if (guaranteedString.indexOf('bacchus') >= 0) {
            shopText.push(<span key="always-bacchus" className="flag-badge">Bacchus guaranteed</span>);    
        }
        if (guaranteedString.indexOf('starveil') >= 0) {
            shopText.push(<span key="always-starveil" className="flag-badge">Starveil guaranteed</span>);    
        }
        if (guaranteedString.indexOf('cure3') >= 0) {
            shopText.push(<span key="always-cure3" className="flag-badge">Cure3 guaranteed</span>);    
        }
        if (guaranteedString.indexOf('illusion') >= 0) {
            shopText.push(<span key="always-illusion" className="flag-badge">Illusions guaranteed</span>);
        }
        if (guaranteedString.indexOf('coffin') >= 0) {
            shopText.push(<span key="always-coffin" className="flag-badge">Coffins guaranteed</span>);    
        }
        if (guaranteedString.indexOf('damage_items') >= 0) {
            shopText.push(<span key="always-damage-items" className="flag-badge">Elemental damage items guaranteed</span>);    
        }
    }

    return (<div className="flex flex-wrap items-center">{shopText}</div>);
}

const renderKeyItems = (flags: string) => {
    const keyItems = [];

    const keyItemString = getPropertySection(flags, 'K');

    if (keyItemString.indexOf('vanilla') >= 0) {
        keyItems.push(<span key="vanilla" className="flag-badge">Vanilla</span>);
    }
    if (keyItemString.indexOf('summon') >= 0) {
        keyItems.push(<span key="summon" className="flag-badge">Summon</span>);
    }
    if (keyItemString.indexOf('moon') >= 0) {
        keyItems.push(<span key="moon" className="flag-badge">Moon</span>);
    }
    if (keyItemString.indexOf('char') >= 0) {
        keyItems.push(<span key="char" className="flag-badge">Character checks</span>);
    }
    if (keyItemString.indexOf('miab') >= 0) {
        const above = keyItemString.indexOf("above") >= 0;
        const below = keyItemString.indexOf("below") >= 0;
        const lst = keyItemString.indexOf("lst") >= 0;
        let granularString = "";
        if (!above && !below && !lst) {
            granularString = "All"
        } else {
            if (above) granularString += "Above ";
            if (below) granularString += "Below ";
            if (lst) granularString += "LST ";
        }
        keyItems.push(<span key="vanilla" className="flag-badge">Miab:{granularString}</span>);
    }
    if (keyItemString.indexOf('unweighted') >= 0) {
        keyItems.push(<span key="unweighted" className="flag-badge">Unweighted KI distribution</span>);
    }
    if (keyItemString.indexOf('pink') >= 0) {
        keyItems.push(<span key="pink" className="flag-badge">Pink tail is a KI check</span>);
    }
    if (keyItemString.indexOf('forge') >= 0) {
        keyItems.push(<span key="forge" className="flag-badge">Forging is a KI check</span>);
    }
    if (keyItemString.indexOf('risky') >= 0) {
        keyItems.push(<span key="unsafe" className="flag-badge flag-badge-danger">Safety checks OFF</span>);
    }
    if (keyItemString.indexOf('unsafe') >= 0 && keyItemString.indexOf('unsafer') < 0) {
        keyItems.push(<span key="unsafe" className="flag-badge flag-badge-danger">Safety checks OFF</span>);
    }
    if (keyItemString.indexOf('unsafer') >= 0) {
        keyItems.push(<span key="unsafer" className="flag-badge flag-badge-danger">Underground access through moon</span>);
    }
    if (keyItemString.indexOf('force:hook') >= 0) {
        keyItems.push(<span key="force-hook" className="flag-badge flag-badge-danger">Hook route forced</span>);
    }
    if (keyItemString.indexOf('force:magma') >= 0) {
        keyItems.push(<span key="force-magma" className="flag-badge flag-badge-yay">Magma route forced</span>);
    }
    if (keyItemString.indexOf('nofree') >= 0) {
        const noFree = getPropertySubSection(keyItemString, 'nofree:');
        if (noFree.indexOf('dwarf') >= 0) {
            keyItems.push(<span key="nofree-dwarf" className="flag-badge">Bed Key Item in Dwarf Castle</span>);    
        } else if (noFree.indexOf('package') >= 0) {
            keyItems.push(<span key="nofree-package" className="flag-badge">Must burn Mist village for Rydia&apos;s mom to appear</span>);    
        } else {
            keyItems.push(<span key="nofree" className="flag-badge">No free Key Item</span>);
        }
        
    } else {
        keyItems.push(<span key="nofree" className="flag-badge flag-badge-yay">Bedward ON</span>);
    }
    if (keyItemString.indexOf('start:') >= 0) {
        const startingItem = getPropertySubSection(keyItemString, 'start:').slice(6);
        keyItems.push(<span key="fixed-start" className="flag-badge">Starting {startingItem}</span>);
    }
    if (keyItemString.indexOf('main') >= 0 && keyItemString.indexOf('summon') < 0 && keyItemString.indexOf('miab') < 0 && keyItemString.indexOf('moon') < 0) {
        keyItems.push(<span key="main-only" className="flag-badge flag-badge-yay">Main Checks Only</span>);
    }
    return (<div className="flex flex-wrap items-center">{keyItems}</div>)

}

const renderMisc = (flags: string) => {
    const misc = [];

    const experienceString = getPropertySection(flags, 'X');

    if (experienceString.indexOf('objbonus:2') >= 0 && experienceString.indexOf('objbonus:20') < 0 && experienceString.indexOf('objbonus:25') < 0) {
        misc.push(<span key="objbonus2" className="flag-badge flag-badge-yay">+2% XP per objective</span>)
    }
    if (experienceString.indexOf('objbonus:3') >= 0) {
        misc.push(<span key="objbonus3" className="flag-badge flag-badge-yay">+3% XP per objective</span>)
    }
    if (experienceString.indexOf('objbonus:5') >= 0) {
        misc.push(<span key="objbonus5" className="flag-badge flag-badge-yay">+5% XP per objective</span>)
    }
    if (experienceString.indexOf('objbonus:8') >= 0) {
        misc.push(<span key="objbonus8" className="flag-badge flag-badge-yay">+8.3% XP per objective</span>)
    }
    if (experienceString.indexOf('objbonus:10') >= 0) {
        misc.push(<span key="objbonus10" className="flag-badge flag-badge-yay">+10% XP per objective</span>)
    }
    if (experienceString.indexOf('objbonus:12') >= 0) {
        misc.push(<span key="objbonus12" className="flag-badge flag-badge-yay">+12.5% XP per objective</span>)
    }
    if (experienceString.indexOf('objbonus:14') >= 0) {
        misc.push(<span key="objbonus14" className="flag-badge flag-badge-yay">+14.3% XP per objective</span>)
    }
    if (experienceString.indexOf('objbonus:16') >= 0) {
        misc.push(<span key="objbonus16" className="flag-badge flag-badge-yay">+16.6% XP per objective</span>)
    }
    if (experienceString.indexOf('objbonus:20') >= 0) {
        misc.push(<span key="objbonus20" className="flag-badge flag-badge-yay">+20% XP per objective</span>)
    }
    if (experienceString.indexOf('objbonus:25') >= 0) {
        misc.push(<span key="objbonus25" className="flag-badge flag-badge-yay">+25% XP per objective</span>)
    }
    if (flags.indexOf('spoon') >= 0) {
        misc.push(<span key="spoon" className="flag-badge flag-badge-yay">SPOON!</span>)
    }
    if (flags.indexOf('fastrom') >= 0) {
        misc.push(<span key="fastrom" className="flag-badge flag-badge-danger">FastROM enabled</span>)
    }
    if (flags.indexOf('supersmith') >= 0 || flags.indexOf('smith:super') >= 0) {
        misc.push(<span key="weapon-forge" className="flag-badge flag-badge-yay">GBA Weapon Forge</span>)
    }
    if (flags.indexOf('smith:alt') >= 0) {
        misc.push(<span key="smith-alt" className="flag-badge flag-badge-yay">Alt Forge</span>)
    }
    if (flags.indexOf('smith:playable') >= 0) {
        misc.push(<span key="smith-playable" className="flag-badge flag-badge-yay">Guaranteed usable item</span>)
    }
    if (flags.indexOf('nocursed') >= 0) {
        misc.push(<span key="nocursed" className="flag-badge flag-badge-yay">No Cursed Rings</span>)
    }
    if (flags.indexOf('noadamants') >= 0) {
        misc.push(<span key="nooadamants" className="flag-badge">No adamant armors</span>)
    }
    if (flags.indexOf('pushbtojump') >= 0) {
        misc.push(<span key="pushbtojump" className="flag-badge flag-badge-yay">Push B to Jump</span>)
    }
    if (flags.indexOf('noboost') >= 0) {
        misc.push(<span key="noboost" className="flag-badge">No Slingshot</span>)
    }
    if (flags.indexOf('nokeybonus') >= 0) {
        misc.push(<span key="nokeybonus" className="flag-badge">No 10KI Boost</span>)
    }
    if (flags.indexOf('monsterevade') >= 0) {
        misc.push(<span key="ohnoeosevasion" className="flag-badge flag-badge-danger">Monsters get proper physical/magical evade</span>)
        if (flags.indexOf('monsterflee') >= 0) {
            misc.push(<span key="monster-flee" className="flag-badge">Monsters can flee</span>)
        }
    }
    if (flags.indexOf('fusoya:') >= 0) {
        const fuFlags = getPropertySubSection(flags, '-fusoya:');
        if (fuFlags.indexOf('sequential_p') >= 0) {
            misc.push(<span key="fu-twins" className="flag-badge">Fu spells: Palom/porom levels</span>)    
        }
        if (fuFlags.indexOf('sequential_r') >= 0) {
            misc.push(<span key="fu-rosdia" className="flag-badge">Fu spells: Rydia/Rosa levels</span>)    
        }
        if (fuFlags.indexOf('location') >= 0) {
            misc.push(<span key="fu-location" className="flag-badge">Fu spells: Location dependent</span>)
        }
        if (fuFlags.indexOf('nerfed') >= 0) {
            misc.push(<span key="fu-nerfed" className="flag-badge flag-badge-danger">Fu spells: Starting spells only</span>)    
        }
    }
    
    if (flags.indexOf('crystalbonus') >= 0) {
        misc.push(<span key="exp-crystal-bonus" className="flag-badge flag-badge-yay">Double XP after getting Crystal</span>)
    }

    if (flags.indexOf('objectivebonus25') >= 0) {
        misc.push(<span key="exp-obj-bonus-25" className="flag-badge">+25% XP per objective completed</span>)
    }
    if (flags.indexOf('objectivebonus10') >= 0) {
        misc.push(<span key="exp-obj-bonus-10" className="flag-badge">+10% XP per objective completed</span>)
    }
    if (flags.indexOf('objectivebonus_num') >= 0) {
        misc.push(<span key="fu-location" className="flag-badge">+100% / Total objectives XP per objective completed</span>)
    }

    if (flags.indexOf('kicheckbonus') >= 0) {
        const KCBIndex = flags.indexOf('kicheckbonus');
        const mult = flags.charAt(KCBIndex + 12);
        if (mult === "1") misc.push(<span key="10pctkeybonus" className="flag-badge">+10%XP per KI Check</span>)
        if (mult === "5") misc.push(<span key="5pctkeybonus" className="flag-badge">+5%XP per KI Check</span>)
        if (mult === "2") misc.push(<span key="2pctkeybonus" className="flag-badge">+2%XP per KI Check</span>)
        if (mult === "_") misc.push(<span key="numpctkeybonus" className="flag-badge">+100% / total KI checks XP per KI Check</span>)
        
    }

    if (flags.indexOf('zonkbonus') >= 0) {
        const KCBIndex = flags.indexOf('zonkbonus');
        const mult = flags.charAt(KCBIndex + 9);
        if (mult === "1") misc.push(<span key="10pctkeybonuszonk" className="flag-badge">+10%XP per zonk</span>)
        if (mult === "5") misc.push(<span key="5pctkeybonuszonk" className="flag-badge">+5%XP per zonk</span>)
        if (mult === "2") misc.push(<span key="2pctkeybonuszonk" className="flag-badge">+2%XP per zonk</span>)
    }

    if (flags.indexOf('miabbonus100') >= 0) {
        misc.push(<span key="exp-miab-100" className="flag-badge">Miab encounters give double XP</span>)
    }
    if (flags.indexOf('miabbonus50') >= 0) {
        misc.push(<span key="exp-miab-50" className="flag-badge">Miab encounters give +50% XP</span>)
    }
    if (flags.indexOf('moonbonus200') >= 0) {
        misc.push(<span key="exp-moon-200" className="flag-badge">Moon encounters give triple XP</span>)
    }
    if (flags.indexOf('moonbonus100') >= 0) {
        misc.push(<span key="exp-moon-100" className="flag-badge">Moon encounters give double XP</span>)
    }

    if (flags.indexOf('maxlevelbonus') >= 0) {
        misc.push(<span key="exp-level-bonus" className="flag-badge">High maxparty/enemy level difference grants bonus XP</span>)
    }

    if (flags.indexOf('doorsrando:') >= 0) {
        const doorFlags = getPropertySubSection(flags, "doorsrando:");
        if (doorFlags.indexOf('normal') >= 0) {
            misc.push(<span key="doors-normal" className="flag-badge flag-badge-danger">Door Rando: No Cross World Shuffle</span>)
        }
        if (doorFlags.indexOf('gated') >= 0) {
            misc.push(<span key="doors-gated" className="flag-badge flag-badge-danger">Door Rando: Underworld/Moon shuffled</span>)
        }
        if (doorFlags.indexOf('blueplanet') >= 0) {
            misc.push(<span key="doors-blue" className="flag-badge flag-badge-danger">Door Rando: Underworld/Overworld shuffled</span>)
        }
        if (doorFlags.indexOf('why') >= 0) {
            misc.push(<span key="doors-why" className="flag-badge flag-badge-danger">Door Rando: Moon/Overworld shuffled</span>)
        }
        if (doorFlags.indexOf('all') >= 0) {
            misc.push(<span key="doors-all" className="flag-badge flag-badge-danger">Door Rando: All worlds shuffled</span>)
        }
    }

    if (flags.indexOf('entrancesrando:') >= 0) {
        const doorFlags = getPropertySubSection(flags, "entrancesrando:");
        if (doorFlags.indexOf('normal') >= 0) {
            misc.push(<span key="entrances-normal" className="flag-badge flag-badge-danger">Entrance Rando: No Cross World Shuffle</span>)
        }
        if (doorFlags.indexOf('gated') >= 0) {
            misc.push(<span key="entrances-gated" className="flag-badge flag-badge-danger">Entrance Rando: Underworld/Moon shuffled</span>)
        }
        if (doorFlags.indexOf('blueplanet') >= 0) {
            misc.push(<span key="entrances-blue" className="flag-badge flag-badge-danger">Entrance Rando: Underworld/Overworld shuffled</span>)
        }
        if (doorFlags.indexOf('why') >= 0) {
            misc.push(<span key="entrances-why" className="flag-badge flag-badge-danger">Entrance Rando: Moon/Overworld shuffled</span>)
        }
        if (doorFlags.indexOf('all') >= 0) {
            misc.push(<span key="entrances-all" className="flag-badge flag-badge-danger">Entrance Rando: All worlds shuffled</span>)
        }
    }

    return (<div className="flex flex-wrap items-center">{misc}</div>)
}

const renderVanilla = (flags: string) => {
    const vanilla = [];

    const vanillaString = getPropertySection(flags, '-vanilla');

    if (vanillaString.indexOf('agility') >= 0) {
        vanilla.push(<span key="agility" className="flag-badge flag-badge-danger">Agility (Cecil Anchors)</span>);
    }
    if (vanillaString.indexOf('exp') >= 0) {
        vanilla.push(<span key="experience" className="flag-badge flag-badge-danger">XP gain</span>);
    }
    if (vanillaString.indexOf('fusoya') >= 0) {
        vanilla.push(<span key="fusoya" className="flag-badge flag-badge-yay">FuSoYa (all spells at start)</span>);
    }
    if (vanillaString.indexOf('miabs') >= 0) {
        vanilla.push(<span key="traps" className="flag-badge">Monster boxes</span>);
    }
    if (vanillaString.indexOf('hobs') >= 0) {
        vanilla.push(<span key="hobs" className="flag-badge">Hobs (Rydia learns Fire1)</span>);
    }
    if (vanillaString.indexOf('giant') >= 0) {
        vanilla.push(<span key="giant" className="flag-badge flag-badge-danger">No Exiting Giant</span>);
    }

    return vanilla.length > 0 ? (<div className="flex flex-wrap items-center">{vanilla}</div>) : null;
}

const renderEncounters = (flags: string) => {
    const encounters = [];

    const encounterFlagString = getPropertySection(flags, 'E');
    
    if (encounterFlagString.indexOf('sirens') >= 0 || encounterFlagString.indexOf('jdrops') >= 0) {
        encounters.push(<span key="no-siren-steal" className="flag-badge">Cannot steal Sirens</span>);
    }
    if (encounterFlagString.indexOf('cantrun') >= 0) {
        encounters.push(<span key="no-escape" className="flag-badge">No escape</span>);
    }
    if (encounterFlagString.indexOf('danger') >= 0) {
        encounters.push(<span key="danger" className="flag-badge">Back/surprise attacks enabled</span>);
    }
    if (encounterFlagString.indexOf('noencounters') >= 0) {
        encounters.push(<span key="no-encounters" className="flag-badge flag-badge-danger">No encounters</span>);
    }
    if (encounterFlagString.indexOf('noexp') >= 0) {
        encounters.push(<span key="no-exp" className="flag-badge flag-badge-danger">No XP from encounters</span>);
    }
    if (encounterFlagString.indexOf('nogp') >= 0) {
        encounters.push(<span key="no-gp" className="flag-badge">No GP from encounters</span>);
    }
    if (encounterFlagString.indexOf('nodmachin') >= 0) {
        encounters.push(<span key="no-dmoney" className="flag-badge">D.Machin disabled</span>);
    }

    return <div className="flex flex-wrap items-center">{encounters}</div>
}

const renderKits = (flags: string) => {
    const kits = [];
    const kitStrings = [];

    if(flags.indexOf('kit:')) kitStrings.push(getPropertySection(flags, 'kit'));
    if(flags.indexOf('kit2')) kitStrings.push(getPropertySection(flags, 'kit2'));
    if(flags.indexOf('kit3')) kitStrings.push(getPropertySection(flags, 'kit3'));

    for (const kitString of kitStrings) {
        for (const kit of kitList) {
            if (kitString.indexOf(kit.flag) >= 0) {
                kits.push(<span key={kit.flag} className="flag-badge">{kit.title}</span>)
            }
        }
    }
    return <div className="flex flex-wrap items-center">{kits}</div>
}

const getPropertySubSection = (flags: string, criteria: string) => {
    // get shop section of flag string
    const begin = flags.indexOf(criteria);
    let end = flags.length;
    for (let i = begin; i < flags.length; i++) {
        const charTest = flags.charAt(i);
        if(charTest === ' ' || charTest === '/') {
            end = i;
            break;
        }
    }

    const results = flags.slice(begin, end);
    return results;
}

const getPropertySection = (flags: string, criteria: string) => {
    // get shop section of flag string
    let begin = flags.indexOf(criteria);
    if (flags.charAt(begin - 1) === "O") {
        begin = flags.indexOf(criteria, begin + 1);
    }
    let end = flags.length;
    for (let i = begin; i < flags.length; i++) {
        const charTest = flags.charAt(i);
        if(charTest === ' ') {
            end = i;
            break;
        }
    }

    const results = flags.slice(begin, end);
    return results;
}

export { renderCharacters, renderGlitches, renderKeyItems, renderMisc, renderShops, renderTreasure, renderVanilla, renderEncounters, renderKits, renderBosses };
