import ParseTime from "@/app/lib/parse-time";
import {
    PlayIcon, StopIcon, BackspaceIcon
  } from '@heroicons/react/24/solid';
export default function TimerDisplay ({
    currentTime,
    startTime
} : {
    currentTime: number,
    startTime: number,
}) {
    return (
        <div className="flex flex-col h-full justify-end items-center">
            <div className="flex justify-around">
                <button className="m-5 w-12 h-10 border flex justify-center items-center bg-slate-800 hover:bg-slate-600 border-slate-600"><PlayIcon className="size-6"/></button>
                <button className="m-5 w-12 h-10 border flex justify-center items-center bg-slate-800 hover:bg-slate-600 border-slate-600"><StopIcon className="size-6"/></button>
                <button className="m-5 w-12 h-10 border flex justify-center items-center bg-slate-800 hover:bg-slate-600 border-slate-600"><BackspaceIcon className="size-6"/></button>
            </div>
            <p className="text-5xl font-bold">{ParseTime(currentTime - startTime)}</p>
        </div>
    );
}