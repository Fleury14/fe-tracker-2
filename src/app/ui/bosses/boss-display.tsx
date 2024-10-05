import Image from 'next/image';
import { Boss } from "@/app/lib/interfaces";

export default function BossDisplay({ bosses }: { bosses: Boss[] }) {
    return (
        <div className="flex flex-wrap">
            {bosses.map(boss => {
                if (boss.id === 99) return null;
                return <Image 
                    height={30}
                    width={30}
                    key={boss.title}
                    alt={boss.title}
                    src={boss.toggle ? `/images/boss-icons/${boss.iconFile}` : `/images/boss-icons/${boss.iconGray}`}
                />
            })}
        </div>
    );
}