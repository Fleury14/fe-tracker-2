import Image from 'next/image';
import { characters, bosses, quests } from "@/app/lib/default-data";

export default function ObjectiveEditor( { id }: { id: number }) {
    return (
        <div className="flex flex-col p-10 w-3/4">
            <p>Character</p>
            <div className="flex">
                {characters.map(char => (<Image 
                    key={char.slug}
                    src={`/images/character-icons/${char.iconActive}`}
                    alt={char.title}
                    height={48}
                    width={32}
                />))}
            </div>
            <p>Bosses</p>
            <div className="flex flex-wrap">
                {bosses.map(boss => boss.id < 36 ? (<Image // z id is 36, unknown is 99, neither are selectable objectives
                    key={boss.id}
                    height={30}
                    width={30}
                    alt={boss.title}
                    src={`/images/boss-icons/${boss.iconFile}`}

                />) : null)}
            </div>
            <p>Quests</p>
        </div>
    );
}