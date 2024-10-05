import Image from 'next/image';
import { Boss } from "@/app/lib/interfaces";

export default function BossDisplay({ bosses }: { bosses: Boss[] }) {
    return (
        <div className="flex flex-wrap">
            {bosses.map(boss => {
                return <Image 
                    height={30}
                    width={30}
                    key={boss.title}
                    alt={boss.title}
                    src={`/images/boss-icons/${boss.iconFile}`}
                />
            })}
        </div>
    );
}