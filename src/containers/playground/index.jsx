import React, {useState} from "react";
import RefreshIcon from '@material-ui/icons/Refresh';
import {useDispatch, useSelector} from "react-redux";
import IconButton from '@material-ui/core/IconButton';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';

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

    const handlePauseGame = () => {
        setDialogOpen(prev => !prev)
        dispatch(changeGameStatus(dialogOpen ? GAME_STATUS_DATA.playing : GAME_STATUS_DATA.paused))
    }

    const refreshField = () => {
        setMinutes(0)
        setSeconds(0)
        dispatch(changeGameStatus(GAME_STATUS_DATA.playing))

        const updatedField = fillFieldWithBombs(createField(field.length), field.length, numberOfBombs)
        dispatch(setField(updatedField))
    }

    const getDialogTitle = () => {
        switch (gameStatus) {
            case GAME_STATUS_DATA.paused:
                return 'PAUSED';
            case GAME_STATUS_DATA.won:
                return 'CONGRATS! YOU WIN';
            default:
                return 'GAME OVER'
        }
    }

    return (
        <main className='playground'>
            <section className='playground-header'>
                <div className='bombs-indicator'>Flags: {numberOfFlags}</div>
                {gameStatus === GAME_STATUS_DATA.review &&
                <IconButton className='refresh-button' onClick={refreshField}>
                    <RefreshIcon/>
                </IconButton>
                }
                <div className='boomberman'>&#128520;</div>
                {
                    gameStatus === GAME_STATUS_DATA.playing && <>
                        <IconButton className='pause-button' onClick={handlePauseGame}>
                            <PauseCircleOutlineIcon/>
                        </IconButton>
                        <Timer
                            minutes={minutes}
                            seconds={seconds}
                            setMinutes={setMinutes}
                            setSeconds={setSeconds}/>
                    </>
                }
            </section>
            <Field setDialogOpen={setDialogOpen}/>
            {
                gameStatus === GAME_STATUS_DATA.playing ?
                    null :
                    <AlertDialog open={dialogOpen}
                                 gameStatus={gameStatus}
                                 handleGoReplay={handleGoReplay}
                                 handleReviewField={handleReviewField}
                                 handleGoLeaderboard={handleGoReplay}
                                 handlePauseGame={handlePauseGame}
                                 title={getDialogTitle()}
                                 userName='Bob Dylan'
                                 time={`${minutes < 10 ? '0' + minutes : minutes} min ${seconds < 10 ? '0' + seconds : seconds} sec`}
                    />
            }
        </main>
    )
}

export default Playground
