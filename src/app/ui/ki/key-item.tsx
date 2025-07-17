import Image from 'next/image';
import { useState } from 'react';
import { CheckIcon } from "@heroicons/react/24/outline";

export default function KeyItem({ toggleKI, color, keyName, imgSrc, altText }: { toggleKI: (key: string) => void, color: boolean, keyName: string, imgSrc: string, altText: string}) {

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
        <a onClick={() => handleClick()} className="relative">
            <Image 
                src={imgSrc}
                alt={altText}
                height={30}
                width={30}
            />
            {cleared && <CheckIcon className="absolute top-0 size-10 text-emerald-400" />}
        </a>
    );

}