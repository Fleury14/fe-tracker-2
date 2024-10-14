import {
    PlayIcon, StopIcon, BackspaceIcon
  } from '@heroicons/react/24/solid';

export default function TimeConrolsDisplay({
    isActive,
    startTimer,
    stopTimer,
    resetTimer,
} : {
    isActive: boolean,
    startTimer: () => void,
    stopTimer: () => void,
    resetTimer: () => void,
}) {
    return (
            <div className="flex justify-center w-100">
                <button onClick={() => startTimer()} disabled={isActive} className="m-5 w-12 h-10 border flex justify-center items-center bg-slate-800 hover:bg-slate-600 border-slate-600"><p className="invisible w-0 h-0">Start Timer</p><PlayIcon className="size-6"/></button>
                <button onClick={() => stopTimer()} className="m-5 w-12 h-10 border flex justify-center items-center bg-slate-800 hover:bg-slate-600 border-slate-600"><p className="invisible w-0 h-0">Stop Timer</p><StopIcon className="size-6"/></button>
                <button onClick={() => resetTimer()} className="m-5 w-12 h-10 border flex justify-center items-center bg-slate-800 hover:bg-slate-600 border-slate-600"><p className="invisible w-0 h-0">Reset Timer</p><BackspaceIcon className="size-6"/></button>
            </div>
    );
}
    
