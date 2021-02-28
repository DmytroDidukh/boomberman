import React, {useState} from "react";
import RefreshIcon from '@material-ui/icons/Refresh';
import {useDispatch, useSelector} from "react-redux";
import IconButton from '@material-ui/core/IconButton';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';

import Timer from "../../components/timer";
import Field from "../field";
import AlertDialog from "../../components/dialog";
import {changeGameStatus, setField, setPlayer} from "../../redux/actions";
import createField from "../../utils/createField";
import fillFieldWithBombs from "../../utils/fillFieldWithBombs";
import {GAME_STATUS_DATA} from "../../config";
import './styles.scss'

const Playground = () => {
    const {numberOfFlags, gameStatus, field, numberOfBombs, player} = useSelector((state) => state)
    const dispatch = useDispatch()

    const [dialogOpen, setDialogOpen] = useState(false);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const handleGoReplay = () => {
        setDialogOpen(false)
        dispatch(changeGameStatus(GAME_STATUS_DATA.preparing))
        dispatch(setField({field: createField(10), numberOfFieldItems: numberOfBombs}))
        dispatch(setPlayer({...player, time: minutes * 60 + seconds}))
    }

    const handleReviewField = () => {
        dispatch(changeGameStatus(GAME_STATUS_DATA.review))
        dispatch(setPlayer({...player, time: minutes * 60 + seconds}))
        setDialogOpen(false)
    }

    const handlePauseGame = () => {
        setDialogOpen(prev => !prev)
        dispatch(changeGameStatus(dialogOpen ? GAME_STATUS_DATA.playing : GAME_STATUS_DATA.paused))
    }

    const resetField = () => {
        setMinutes(0)
        setSeconds(0)
        dispatch(changeGameStatus(GAME_STATUS_DATA.playing))

        const updatedField = fillFieldWithBombs(createField(field.length), field.length, numberOfBombs)
        dispatch(setField({field: updatedField, numberOfFieldItems: numberOfBombs}))
        dispatch(setPlayer({...player, time: 0}))
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
                <div className='bombs-indicator'>
                    <span>Flags: {numberOfFlags}</span>
                    <span>Bombs: {numberOfBombs}</span>
                </div>
                {gameStatus === GAME_STATUS_DATA.review &&
                <IconButton className='refresh-button' onClick={resetField}>
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
            <Field setDialogOpen={setDialogOpen} gameTime={minutes * 60 + seconds}/>
            {
                gameStatus === GAME_STATUS_DATA.playing ?
                    null :
                    <AlertDialog open={dialogOpen}
                                 gameStatus={gameStatus}
                                 handleGoReplay={handleGoReplay}
                                 handleReviewField={handleReviewField}
                                 handlePauseGame={handlePauseGame}
                                 title={getDialogTitle()}
                                 userName={player.username}
                                 time={`${minutes < 10 ? '0' + minutes : minutes} min ${seconds < 10 ? '0' + seconds : seconds} sec`}
                    />
            }
        </main>
    )
}

export default Playground
