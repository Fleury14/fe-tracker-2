import { renderCharacters, renderGlitches, renderKeyItems, renderMisc, renderShops, renderTreasure, renderVanilla, renderEncounters, renderKits, renderBosses } from '@/app/lib/flag-badges-creator';

export default function Info({ flags }: { flags: string}) {
    return (
        <div className="p-5">
            <div className='flex items-center border border-slate-600'>
                <div className="bg-slate-200 self-stretch flex items-center min-w-28 w-28">
                    <p className='bg-slate-200 text-slate-900 font-bold p-1'>Key Items</p>
                </div>
                {renderKeyItems(flags)}
            </div>
            <div className='flex items-center border border-slate-600'>
                <div className="bg-slate-200 self-stretch flex items-center min-w-28 w-28">
                    <p className='text-slate-900 font-bold p-1'>Characters</p>
                </div>
                {renderCharacters(flags)}
            </div>
            <div className='flex items-center border border-slate-600'>
                <div className="bg-slate-200 self-stretch flex items-center min-w-28 w-28">
                    <p className='text-slate-900 font-bold p-1'>Treasure</p>
                </div>
                {renderTreasure(flags)}
            </div>
            <div className='flex items-center border border-slate-600'>
                <div className="bg-slate-200 self-stretch flex items-center min-w-28 w-28">
                    <p className='text-slate-900 font-bold p-1'>Shops</p>
                </div>
                {renderShops(flags)}
            </div>
            <div className='flex items-center border border-slate-600'>
                <div className="bg-slate-200 self-stretch flex items-center min-w-28 w-28">
                    <p className='text-slate-900 font-bold p-1'>Bosses</p>
                </div>
                {renderBosses(flags)}
            </div>
            <div className='flex items-center border border-slate-600'>
                <div className="bg-slate-200 self-stretch flex items-center min-w-28 w-28">
                    <p className='text-slate-900 font-bold p-1'>Encounters</p>
                </div>
                {renderEncounters(flags)}
            </div>
            <div className='flex items-center border border-slate-600'>
                <div className="bg-slate-200 self-stretch flex items-center min-w-28 w-28">
                    <p className='text-slate-900 font-bold p-1'>Glitches</p>
                </div>
                {renderGlitches(flags)}
            </div>
            <div className='flex items-center border border-slate-600'>
                <div className="bg-slate-200 self-stretch flex items-center min-w-28 w-28">
                    <p className='text-slate-900 font-bold p-1'>Kits</p>
                </div>
                {renderKits(flags)}
            </div>
            <div className='flex items-center border border-slate-600'>
                <div className="bg-slate-200 self-stretch flex items-center min-w-28 w-28">
                    <p className='text-slate-900 font-bold p-1'>Misc.</p>
                </div>
                {renderMisc(flags)}
            </div>
            <div className='flex items-center border border-slate-600'>
                <div className="bg-slate-200 self-stretch flex items-center min-w-28 w-28">
                    <p className='text-slate-900 font-bold p-1'>Vanilla</p>
                </div>
                {renderVanilla(flags)}
            </div>
            
        </div>
    )
}