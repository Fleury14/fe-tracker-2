function beginTimer(timer: any, setTimer: Function, currentTimer:any) {
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
    // OLD: set objectives up, but only if hasnt been done already (editing randoms may do this already)
    // if (!this.state.flagObj) {
    //     this.setState({ flagObj: this.props.flagObj });
    // }
}

function endTimer(timer:any, setTimer:Function, currentTimer:any) {
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

function resetTimer(setTimer: Function) {
    setTimer({ 
        isActive: false,
        startTime: 0,
        currentTime: 0,
        pauseTime: 0,
    })
}

export { beginTimer, endTimer, resetTimer }