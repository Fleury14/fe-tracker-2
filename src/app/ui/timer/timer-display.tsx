import ParseTime from "@/app/lib/parse-time";

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
                <button>Start</button>
                <button>Stop</button>
                <button>Reset</button>
            </div>
            <p className="text-5xl font-bold">{ParseTime(currentTime - startTime)}</p>
        </div>
    );
}