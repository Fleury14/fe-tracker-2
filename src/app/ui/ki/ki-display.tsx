import Image from 'next/image';
import { KeyItems } from "@/app/lib/interfaces";
import KIComponent from './key-item';

export default function KIDisplay({ ki, toggleKI, isV5 }: { ki: KeyItems, toggleKI: (key: string) => void, isV5: boolean }) {
    function KIColor(val:boolean) {
        return val ? "Color" : "Gray";
    }

    const kiObj = Object.values(ki);
    const passModifier = (ki.pass === true && !isV5) ? 1 : 0;
    const numOfKI = kiObj.filter(item => item === true).length - passModifier;
    return (
        <div className='flex flex-col items-center'>
            <div className="flex flex-wrap">
                <KIComponent
                    keyName="crystal"
                    toggleKI={() => toggleKI('crystal')}
                    color={ki.crystal}
                    imgSrc={`/images/key-item-icons/FFIVFE-Icons-1THECrystal-${KIColor(ki.crystal)}.png`}
                    altText="Crystal Crystal"
                />
                <KIComponent
                    keyName="pass"
                    toggleKI={() => toggleKI('pass')}
                    color={ki.pass}
                    imgSrc={`/images/key-item-icons/FFIVFE-Icons-2Pass-${KIColor(ki.pass)}.png`}
                    altText="The Pass"
                />
                <KIComponent
                    keyName="hook"
                    toggleKI={() => toggleKI('hook')}
                    color={ki.hook}
                    imgSrc={`/images/key-item-icons/FFIVFE-Icons-3Hook-${KIColor(ki.hook)}.png`}
                    altText="The Hook"
                />
                <KIComponent
                    keyName="darkness"
                    toggleKI={() => toggleKI('darkness')}
                    color={ki.darkness}
                    imgSrc={`/images/key-item-icons/FFIVFE-Icons-4DarkCrystal-${KIColor(ki.darkness)}.png`}
                    altText="The Darkness"
                />
               <KIComponent
                    keyName="earth"
                    toggleKI={() => toggleKI('earth')}
                    color={ki.earth}
                    imgSrc={`/images/key-item-icons/FFIVFE-Icons-5EarthCrystal-${KIColor(ki.earth)}.png`}
                    altText="Earth Crystal"
                />
                <KIComponent
                    keyName="twinharp"
                    toggleKI={() => toggleKI('harp')}
                    color={ki.harp}
                    imgSrc={`/images/key-item-icons/FFIVFE-Icons-6TwinHarp-${KIColor(ki.harp)}.png`}
                    altText="Twin Harp"
                />
                <KIComponent
                    keyName="package"
                    toggleKI={() => toggleKI('package')}
                    color={ki.package}
                    imgSrc={`/images/key-item-icons/FFIVFE-Icons-7Package-${KIColor(ki.package)}.png`}
                    altText="Package"
                />
                <KIComponent
                    keyName="sandruby"
                    toggleKI={() => toggleKI('sandruby')}
                    color={ki.sandruby}
                    imgSrc={`/images/key-item-icons/FFIVFE-Icons-8SandRuby-${KIColor(ki.sandruby)}.png`}
                    altText="Sand Ruby"
                />
                <KIComponent
                    keyName="baron"
                    toggleKI={() => toggleKI('baron')}
                    color={ki.baron}
                    imgSrc={`/images/key-item-icons/FFIVFE-Icons-9BaronKey-${KIColor(ki.baron)}.png`}
                    altText="Baron Key"
                />
                <KIComponent
                    keyName="magma"
                    toggleKI={() => toggleKI('magma')}
                    color={ki.magma}
                    imgSrc={`/images/key-item-icons/FFIVFE-Icons-10MagmaKey-${KIColor(ki.magma)}.png`}
                    altText="Magma Key"
                />
                <KIComponent
                    keyName="tower"
                    toggleKI={() => toggleKI('tower')}
                    color={ki.tower}
                    imgSrc={`/images/key-item-icons/FFIVFE-Icons-11TowerKey-${KIColor(ki.tower)}.png`}
                    altText="Tower Key"
                />
                <KIComponent
                    keyName="luca"
                    toggleKI={() => toggleKI('luca')}
                    color={ki.luca}
                    imgSrc={`/images/key-item-icons/FFIVFE-Icons-12LucaKey-${KIColor(ki.luca)}.png`}
                    altText="Luca Key"
                />
                <KIComponent
                    keyName="adamant"
                    toggleKI={() => toggleKI('adamant')}
                    color={ki.adamant}
                    imgSrc={`/images/key-item-icons/FFIVFE-Icons-13Adamant-${KIColor(ki.adamant)}.png`}
                    altText="Adamant"
                />
                <KIComponent
                    keyName="legend"
                    toggleKI={() => toggleKI('legend')}
                    color={ki.legend}
                    imgSrc={`/images/key-item-icons/FFIVFE-Icons-14LegendSword-${KIColor(ki.legend)}.png`}
                    altText="Legend Sword"
                />
                <KIComponent
                    keyName="pan"
                    toggleKI={() => toggleKI('pan')}
                    color={ki.pan}
                    imgSrc={`/images/key-item-icons/FFIVFE-Icons-15Pan-${KIColor(ki.pan)}.png`}
                    altText="Pan"
                />
                <KIComponent
                    keyName="spoon"
                    toggleKI={() => toggleKI('spoon')}
                    color={ki.spoon}
                    imgSrc={`/images/key-item-icons/FFIVFE-Icons-16Spoon-${KIColor(ki.spoon)}.png`}
                    altText="Spoon"
                />
                <KIComponent
                    keyName="rat"
                    toggleKI={() => toggleKI('rat')}
                    color={ki.rat}
                    imgSrc={`/images/key-item-icons/FFIVFE-Icons-17RatTail-${KIColor(ki.rat)}.png`}
                    altText="Rat Tail"
                />
                <KIComponent
                    keyName="pink"
                    toggleKI={() => toggleKI('pink')}
                    color={ki.pink}
                    imgSrc={`/images/key-item-icons/FFIVFE-Icons-18PinkTail-${KIColor(ki.pink)}.png`}
                    altText="Pink Tail"
                />
            </div>
            <p className='font-bold font-[family-name:var(--font-geist-mono)] text-sm'>{numOfKI} / {isV5 ? '18' : '17'}</p>
        </div>
    );
}