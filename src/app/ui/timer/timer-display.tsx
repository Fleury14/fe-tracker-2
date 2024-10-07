import ParseTime from "@/app/lib/parse-time";
import {
    PlayIcon, StopIcon, BackspaceIcon
  } from '@heroicons/react/24/solid';
export default function TimerDisplay ({
    currentTime,
    startTime,
    isActive,
    startTimer,
    stopTimer,
    resetTimer,
} : {
    currentTime: number,
    startTime: number,
    isActive: boolean,
    startTimer: Function,
    stopTimer: Function,
    resetTimer: Function,
}) {
    return (
        <div className="flex flex-col h-full justify-end">
            <div className="flex justify-center w-100">
                <button onClick={() => startTimer()} disabled={isActive} className="m-5 w-12 h-10 border flex justify-center items-center bg-slate-800 hover:bg-slate-600 border-slate-600"><PlayIcon className="size-6"/></button>
                <button onClick={() => stopTimer()} className="m-5 w-12 h-10 border flex justify-center items-center bg-slate-800 hover:bg-slate-600 border-slate-600"><StopIcon className="size-6"/></button>
                <button onClick={() => resetTimer()} className="m-5 w-12 h-10 border flex justify-center items-center bg-slate-800 hover:bg-slate-600 border-slate-600"><BackspaceIcon className="size-6"/></button>
            </div>
            <div className="ml-32">
                <p className="text-5xl font-bold">{ParseTime(currentTime)}</p>
            </div>
            
        </div>
    );
}