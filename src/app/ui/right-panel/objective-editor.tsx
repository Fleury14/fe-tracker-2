import Image from 'next/image';
import { characters, bosses, questsByKI, quests } from "@/app/lib/default-data";
import { KIObjectives } from '@/app/lib/interfaces';
import { GlobeAltIcon } from '@heroicons/react/16/solid';

export default function ObjectiveEditor( { id, group, objLen, onSelect, isDone }: { id: number, group: number, objLen: number, onSelect: (id: number, title: string, group: number) => void, isDone: () => void }) {

    function renderQuestSet(set: KIObjectives) {
        switch(set.ki) {
            case 'none':
                return (
                    <div key={set.ki} className="flex items-center border m-0.5 p-px">
                        <div className='mr-2 mb-px'>
                            <GlobeAltIcon className='size-8' />
                        </div>
                        <div className='flex flex-wrap bg-slate-800'>
                            {set.objectives.map((obj, index) => {
                                const targetObj = quests.find(quest => quest.slug === obj);
                                if (!!targetObj) {
                                    return <button 
                                        key={`button${index}`}
                                        onClick={() =>  {
                                            onSelect(id, targetObj.title, group);
                                            if (id === objLen - 1) {
                                                isDone();
                                            }
                                        }}
                                        className='text-sm font-bold m-1 p-1 hover:bg-slate-600'
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
                    <div key={set.ki} className="flex items-center border m-0.5 p-px">
                        <div className='mr-2 mb-px flex'>
                            <Image 
                                src={set.images[0]}
                                height={30}
                                width={30}
                                alt={`${set.ki}`}
                            />
                            <p className='ml-2'>/</p>
                            <Image 
                                src={set.images[1]}
                                height={30}
                                width={30}
                                alt={`${set.ki}`}
                            />
                        </div>
                        <div className='flex flex-wrap bg-slate-800'>
                            {set.objectives.map((obj, index) => {
                                const targetObj = quests.find(quest => quest.slug === obj);
                                if (!!targetObj) {
                                    return <button 
                                            key={`button${index}`}
                                            onClick={() =>  {
                                                onSelect(id, targetObj.title, group);
                                                if (id === objLen - 1) {
                                                    isDone();
                                                }
                                            }}
                                            className='text-sm font-bold m-1 p-1 hover:bg-slate-600'
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
                    <div key={set.ki} className="flex items-center border m-0.5 p-px">
                        <div className='min-w-8 flex justify-center items-center'>
                            {set.images.map((img, index) => (<Image 
                                src={img}
                                height={30}
                                width={30}
                                alt={`${set.ki} ${index}`}
                                key={`${set.ki}${index}`}
                            />))}
                        </div>
                        <div className='flex flex-wrap bg-slate-800'>
                            {set.objectives.map((obj, index) => {
                                const targetObj = quests.find(quest => quest.slug === obj);
                                if (!!targetObj) {
                                    return <button
                                        key={`button${index}`}
                                        onClick={() =>  {
                                            onSelect(id, targetObj.title, group);
                                            if (id === objLen - 1) {
                                                isDone();
                                            }
                                        }}
                                        className="text-sm font-bold m-1 p-1 hover:bg-slate-600"
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
            <button className="bg-red-700 hover:bg-red-500" onClick={() => isDone()}>Stop Editing</button>
            <p>Character</p>
            <div className="flex">
                {characters.map(char => (
                    <a key={char.slug} onClick={() =>  {
                        onSelect(id, `Get ${char.title}`, group);
                        if (id === objLen - 1) {
                            isDone();
                        }
                    }}>
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
                    <a key={boss.id} onClick={() =>  {
                        onSelect(id, `Defeat ${boss.title}`, group);
                        if (id === objLen - 1) {
                            isDone();
                        }
                    }}>
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