import ParseTime from "@/app/lib/parse-time";

export default function TimerDisplay ({
    currentTime,
} : {
    currentTime: number,
   
}) {
    return (
        <div className="flex flex-col h-full justify-end">
            <div className="ml-40">
                <p className="text-5xl font-bold">{ParseTime(currentTime)}</p>
            </div>
            
        </div>
    );
}