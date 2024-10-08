import Image from 'next/image';
import { Boss } from "@/app/lib/interfaces";

export default function BossDisplay({ bosses, toggleBoss }: { bosses: Boss[], toggleBoss: (id: number, toggle: boolean) => void }) {
    bosses.sort((a, b) => a.id - b.id);
    return (
        <div className="flex flex-wrap">
            {bosses.map(boss => {
                if (boss.id === 99) return null;
                
                return (
                    <a key={boss.title} onClick={() => toggleBoss(boss.id, boss.toggle)} className='m-0.5'>
                        <Image 
                        height={30}
                        width={30}
                        alt={boss.title}
                        src={boss.toggle === true ? `/images/boss-icons/${boss.iconFile}` : `/images/boss-icons/${boss.iconGray}`}
                        />
                    </a>
                )
            })}
        </div>
    );
}