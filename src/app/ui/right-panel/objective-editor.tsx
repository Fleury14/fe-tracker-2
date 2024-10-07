import Image from 'next/image';
import { characters } from "@/app/lib/default-data";

export default function ObjectiveEditor( { id }: { id: number }) {
    return (
        <div className="flex flex-col p-10">
            <p>Character</p>
            <div className="flex">
                {characters.map(char => (<Image 
                    key={char.slug}
                    src={`/images/character-icons/${char.iconActive}`}
                    alt={char.title}
                    height={50}
                    width={30}
                />))}
            </div>
            <p>Bosses</p>
            <p>Quests</p>
        </div>
    );
}