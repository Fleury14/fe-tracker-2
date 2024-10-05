import Image from 'next/image';
import { KeyItems } from "@/app/lib/interfaces";

export default function KIDisplay({ ki }: { ki: KeyItems }) {
    function KIColor(val:boolean) {
        return val ? "Color" : "Gray";
    }
    return (
        <div className="flex flex-wrap">
            <Image 
                src={`/images/key-item-icons/FFIVFE-Icons-1THECrystal-${KIColor(ki.crystal)}.png`}
                alt="Crystal Crystal"
                height={30}
                width={30}
            />
            <Image 
                src={`/images/key-item-icons/FFIVFE-Icons-2Pass-${KIColor(ki.pass)}.png`}
                alt="The Pass"
                height={30}
                width={30}
            />
            <Image 
                src={`/images/key-item-icons/FFIVFE-Icons-3Hook-${KIColor(ki.hook)}.png`}
                alt="The Hook"
                height={30}
                width={30}
            />
            <Image 
                src={`/images/key-item-icons/FFIVFE-Icons-4DarkCrystal-${KIColor(ki.darkness)}.png`}
                alt="Darkness Crystal"
                height={30}
                width={30}
            />
            <Image 
                src={`/images/key-item-icons/FFIVFE-Icons-5EarthCrystal-${KIColor(ki.earth)}.png`}
                alt="Earth Crystal"
                height={30}
                width={30}
            />
            <Image 
                src={`/images/key-item-icons/FFIVFE-Icons-6TwinHarp-${KIColor(ki.harp)}.png`}
                alt="Twin Harp"
                height={30}
                width={30}
            />
            <Image 
                src={`/images/key-item-icons/FFIVFE-Icons-7Package-${KIColor(ki.package)}.png`}
                alt="The Package"
                height={30}
                width={30}
            />
            <Image 
                src={`/images/key-item-icons/FFIVFE-Icons-8SandRuby-${KIColor(ki.sandruby)}.png`}
                alt="Sand Ruby"
                height={30}
                width={30}
            />
            <Image 
                src={`/images/key-item-icons/FFIVFE-Icons-9BaronKey-${KIColor(ki.baron)}.png`}
                alt="Baron Key"
                height={30}
                width={30}
            />
            <Image 
                src={`/images/key-item-icons/FFIVFE-Icons-10MagmaKey-${KIColor(ki.magma)}.png`}
                alt="Magma Key"
                height={30}
                width={30}
            />
            <Image 
                src={`/images/key-item-icons/FFIVFE-Icons-11TowerKey-${KIColor(ki.tower)}.png`}
                alt="Tower Key"
                height={30}
                width={30}
            />
            <Image 
                src={`/images/key-item-icons/FFIVFE-Icons-12LucaKey-${KIColor(ki.luca)}.png`}
                alt="Luca Key"
                height={30}
                width={30}
            />
            <Image 
                src={`/images/key-item-icons/FFIVFE-Icons-13Adamant-${KIColor(ki.adamant)}.png`}
                alt="Adamant"
                height={30}
                width={30}
            />
            <Image 
                src={`/images/key-item-icons/FFIVFE-Icons-14LegendSword-${KIColor(ki.legend)}.png`}
                alt="Legend Sword"
                height={30}
                width={30}
            />
            <Image 
                src={`/images/key-item-icons/FFIVFE-Icons-15Pan-${KIColor(ki.pan)}.png`}
                alt="Pan"
                height={30}
                width={30}
            />
            <Image 
                src={`/images/key-item-icons/FFIVFE-Icons-16Spoon-${KIColor(ki.spoon)}.png`}
                alt="The Spoon"
                height={30}
                width={30}
            />
            <Image 
                src={`/images/key-item-icons/FFIVFE-Icons-17RatTail-${KIColor(ki.rat)}.png`}
                alt="Rat Tail"
                height={30}
                width={30}
            />
            <Image 
                src={`/images/key-item-icons/FFIVFE-Icons-18PinkTail-${KIColor(ki.pink)}.png`}
                alt="Pink Tail"
                height={30}
                width={30}
            />
        </div>
    );
}