import Image from 'next/image';
import { useState } from 'react';
import { CheckIcon } from "@heroicons/react/24/outline";

export default function KeyItem({ toggleKI, color, keyName }: { toggleKI: (key: string) => void, color: boolean, keyName: string}) {

    const [cleared, setCleared] = useState(false);

    function handleClick() {
        if (!color) {
            console.log('toggling from ki component');
            toggleKI(keyName);
        } else if (!cleared) {
            setCleared(true);
        } else {
            setCleared(false);
            toggleKI(keyName);
        }
    }

    function KIColor(val:boolean) {
        return val ? "Color" : "Gray";
    }

    return (
        <a onClick={() => handleClick()}>
            <Image 
                src={`/images/key-item-icons/FFIVFE-Icons-1THECrystal-${KIColor(color)}.png`}
                alt="Crystal Crystal"
                height={30}
                width={30}
            />
            {cleared && <CheckIcon className="absolute top-2 size-10 text-yellow-400" />}
        </a>
    );

}