import { Dispatch, SetStateAction, MutableRefObject } from "react";
import { TimerState } from "@/app/lib/interfaces";

function beginTimer(timer: TimerState, setTimer: Dispatch<SetStateAction<TimerState>>, currentTimer:MutableRefObject<NodeJS.Timeout | undefined>) {
    const { pauseTime } = timer;
    const startDate = pauseTime === 0 ? Date.now() : Date.now() - pauseTime;
    currentTimer.current = setInterval(() => {
        setTimer({
            ...timer,
            isActive: true,
            startTime: startDate,
            currentTime: Date.now() - startDate,
        });
    }, 100);
}

function endTimer(timer: TimerState, setTimer: Dispatch<SetStateAction<TimerState>>, currentTimer:MutableRefObject<NodeJS.Timeout | undefined>) {
    const { isActive, startTime } = timer;
    if (isActive) {
        clearInterval(currentTimer.current);
        setTimer({ 
            ...timer,
            pauseTime: Date.now() - startTime, 
            isActive: false 
        });
    }
}

function resetTimer(setTimer: Dispatch<SetStateAction<TimerState>>) {
    setTimer({ 
        isActive: false,
        startTime: 0,
        currentTime: 0,
        pauseTime: 0,
    })
}

export { beginTimer, endTimer, resetTimer }