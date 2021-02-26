import React, {useState} from "react";
import RefreshIcon from '@material-ui/icons/Refresh';
import {useDispatch, useSelector} from "react-redux";

import Timer from "../../components/timer";
import Field from "../field";
import AlertDialog from "../../components/dialog";
import {changeGameStatus, setField} from "../../redux/actions";
import createField from "../../utils/createField";
import fillFieldWithBombs from "../../utils/fillFieldWithBombs";
import {GAME_STATUS_DATA} from "../../config";
import './styles.scss'

const Playground = () => {
    const {numberOfFlags, gameStatus, field, numberOfBombs} = useSelector((state) => state)
    const dispatch = useDispatch()

    const [dialogOpen, setDialogOpen] = useState(false);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const handleGoReplay = () => {
        setDialogOpen(false)
        dispatch(changeGameStatus(GAME_STATUS_DATA.preparing))
        dispatch(setField(createField(10)))
    }

    const handleReviewField = () => {
        dispatch(changeGameStatus(GAME_STATUS_DATA.review))
        setDialogOpen(false)
    }

    const refreshField = () => {
        setMinutes(0)
        setSeconds(0)
        dispatch(changeGameStatus(GAME_STATUS_DATA.playing))

        const updatedField = fillFieldWithBombs(createField(field.length), field.length, numberOfBombs)
        dispatch(setField(updatedField))
    }

    return (
        <main className='playground'>
            <section className='playground-header'>
                {gameStatus === GAME_STATUS_DATA.review &&
                <div className='refresh-button' onClick={refreshField}><RefreshIcon/></div>}
                <div className='bombs-indicator'>Flags: {numberOfFlags}</div>
                <div className='boomberman'>&#128520;</div>
                {gameStatus === GAME_STATUS_DATA.playing && <Timer
                    minutes={minutes}
                    seconds={seconds}
                    setMinutes={setMinutes}
                    setSeconds={setSeconds}/>}
            </section>
            <Field setDialogOpen={setDialogOpen}/>
            <AlertDialog open={dialogOpen}
                         handleGoReplay={handleGoReplay}
                         handleReviewField={handleReviewField}
                         handleGoLeaderboard={handleGoReplay}
                         title={gameStatus === GAME_STATUS_DATA.lost || gameStatus === GAME_STATUS_DATA.review ?
                             "GAME OVER"
                             : "CONGRATS! YOU WIN"}
                         userName='Bob Dylan'
                         time={`${minutes < 10 ? '0' + minutes : minutes} min ${seconds < 10 ? '0' + seconds : seconds} sec`}
            />
        </main>
    )
}

export default Playground
