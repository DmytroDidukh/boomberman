import React, {useEffect} from "react";

const Timer = ({timeCounter, setTimeCounter}) => {

    const counterFormat = (timeCounter) => {
        let min = Math.floor(timeCounter / 60);
        let sec = timeCounter % 60;

        return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`
    }

    useEffect(() => {
        let myInterval = setInterval(() => {
            setTimeCounter(timeCounter + 1)
        }, 950)

        return () => clearInterval(myInterval);
    }, [timeCounter, setTimeCounter]);

    return (
        <div className='timer'>
            <span>{counterFormat(timeCounter)}</span>
        </div>
    )
}

export default Timer
