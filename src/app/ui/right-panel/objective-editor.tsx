import Image from 'next/image';
import { characters, bosses, questsByKI, quests } from "@/app/lib/default-data";
import { KIObjectives } from '@/app/lib/interfaces';
import { GlobeAltIcon } from '@heroicons/react/16/solid';

export default function ObjectiveEditor( { id, onSelect }: { id: number, onSelect: Function }) {

    function renderQuestSet(set: KIObjectives) {
        switch(set.ki) {
            case 'none':
                return (
                    <div key={set.ki} className="flex items-center">
                        <div className='mr-3 mb-px'>
                            <GlobeAltIcon className='size-8' />
                        </div>
                        <div className='flex flex-wrap'>
                            {set.objectives.map((obj, index) => {
                                const targetObj = quests.find(quest => quest.slug === obj);
                                if (!!targetObj) {
                                    return <button 
                                        key={`button${index}`}
                                        onClick={() => onSelect(id, targetObj.title)}
                                    >
                                        {targetObj.buttonText}
                                    </button>
                                }
                                return null;
                            })}
                        </div>
                    </div>
                );
            case 'underground':
                return (
                    <div key={set.ki} className="flex items-center">
                        <div className='mr-3 mb-px flex'>
                            <Image 
                                src={set.images[0]}
                                height={30}
                                width={30}
                                alt={`${set.ki}`}
                            />
                            <p className='mr-3 ml-3'>/</p>
                            <Image 
                                src={set.images[1]}
                                height={30}
                                width={30}
                                alt={`${set.ki}`}
                            />
                        </div>
                        <div className='flex flex-wrap'>
                            {set.objectives.map((obj, index) => {
                                const targetObj = quests.find(quest => quest.slug === obj);
                                if (!!targetObj) {
                                    return <button 
                                            key={`button${index}`}
                                            onClick={() => onSelect(id, targetObj.title)}
                                        >
                                            {targetObj.buttonText}
                                        </button>
                                }
                                return null;
                            })}
                        </div>
                    </div>
                )
            default:
                return (
                    <div key={set.ki} className="flex items-center">
                        <div className='mr-3 mb-px'>
                            {set.images.map((img, index) => (<Image 
                                src={img}
                                height={30}
                                width={30}
                                alt={`${set.ki} ${index}`}
                                key={`${set.ki}${index}`}
                            />))}
                        </div>
                        <div className='flex flex-wrap'>
                            {set.objectives.map((obj, index) => {
                                const targetObj = quests.find(quest => quest.slug === obj);
                                if (!!targetObj) {
                                    return <button
                                        key={`button${index}`}
                                        onClick={() => onSelect(id, targetObj.title)}
                                    >
                                        {targetObj.buttonText}
                                    </button>
                                }
                                return null;
                            })}
                        </div>
                    </div>
                )
        }
    }

    return (
        <div className="flex flex-col p-10">
            <p>Character</p>
            <div className="flex">
                {characters.map(char => (
                    <a key={char.slug} onClick={() => onSelect(id, `Get ${char.title}`)}>
                        <Image 
                            src={`/images/character-icons/${char.iconActive}`}
                            alt={char.title}
                            height={48}
                            width={32}
                        />
                    </a>
                ))}
            </div>
            <p>Bosses</p>
            <div className="flex flex-wrap">
                {bosses.map(boss => boss.id < 36 ? (
                    <a key={boss.id} onClick={() => onSelect(id, `Defeat ${boss.title}`)}>
                        <Image // z id is 36, unknown is 99, neither are selectable objectives
                            height={30}
                            width={30}
                            alt={boss.title}
                            src={`/images/boss-icons/${boss.iconFile}`}
                        />
                    </a>
                ) : null)}
            </div>
            <p>Quests</p>
            <div className="flex flex-col">
                <div className="flex flex-wrap">
                    {questsByKI.map(set => renderQuestSet(set))}
                </div>
            </div>
        </div>
    );
}