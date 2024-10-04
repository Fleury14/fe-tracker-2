import Image from 'next/image';
import { KeyItems } from "@/app/lib/interfaces";

export default function KIDisplay({ ki }: { ki: KeyItems }) {
    return (
        <div>
            <Image 
                src="/images/key-item-icons/FFIVFE-Icons-1THECrystal-Color.png"
                alt="Crystal Crystal"
                height={30}
                width={30}
            />
        </div>
    );
}