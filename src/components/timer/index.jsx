import React, {useEffect} from "react";

const Timer = ({seconds, minutes, setMinutes, setSeconds}) => {

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds === 59) {
                setSeconds(0);
                setMinutes(minutes + 1)
            } else {
                setSeconds(seconds + 1);
            }

        }, 1000)

        return () => clearInterval(myInterval);
    });

    return (
        <div className='timer'>
            {minutes === 0 && seconds === 0
                ? '00:00'
                : <span>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
            }
        </div>
    )
}

export default Timer
