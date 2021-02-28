import React, {useState} from "react";
import RefreshIcon from '@material-ui/icons/Refresh';
import {useDispatch, useSelector} from "react-redux";
import IconButton from '@material-ui/core/IconButton';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';

import {Button} from "@material-ui/core";
import Timer from "../../components/timer";
import Field from "../field";
import AlertDialog from "../../components/dialog";
import {changeGameStatus, setField, setGameTime, setPlayer} from "../../redux/actions";
import createField from "../../utils/createField";
import fillFieldWithBombs from "../../utils/fillFieldWithBombs";
import {GAME_STATUS_DATA} from "../../config";
import './styles.scss'

const Playground = () => {
    const {numberOfFlags, gameStatus, field, numberOfBombs, player, gameTime} = useSelector((state) => state)
    const dispatch = useDispatch()

    const [dialogOpen, setDialogOpen] = useState(false);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const handleGoMenu = () => {
        setDialogOpen(false)
        dispatch(changeGameStatus(GAME_STATUS_DATA.preparing))
        dispatch(setField({field: createField(10), numberOfFieldItems: numberOfBombs}))
        dispatch(setPlayer({...player, gameTime: minutes * 60 + seconds}))
    }

    const handleReviewField = () => {
        dispatch(changeGameStatus(GAME_STATUS_DATA.review))
        dispatch(setPlayer({...player, gameTime: minutes * 60 + seconds}))
        setDialogOpen(false)
    }

    const handlePauseGame = () => {
        setDialogOpen(prev => !prev)
        dispatch(changeGameStatus(dialogOpen ? GAME_STATUS_DATA.playing : GAME_STATUS_DATA.paused))

        const timestamp = gameTime.pauseEnd - gameTime.pauseStart
        let keyVariableForPause = 'pauseStart';
        let pauseTimeWithPrevious = Date.now()

        if (dialogOpen) {
            keyVariableForPause = 'pauseEnd'
            pauseTimeWithPrevious += timestamp
        }

        dispatch(setGameTime({[keyVariableForPause]: pauseTimeWithPrevious}))
    }

    const handlePlayAgain = () => {
        setMinutes(0)
        setSeconds(0)
        dispatch(changeGameStatus(GAME_STATUS_DATA.playing))

        const updatedField = fillFieldWithBombs(createField(field.length), field.length, numberOfBombs)
        dispatch(setField({field: updatedField, numberOfFieldItems: numberOfBombs}))
        dispatch(setPlayer({...player, gameTime: 0}))
        setDialogOpen(false)
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
                <IconButton className='refresh-button' onClick={handlePlayAgain}>
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
            <Button variant="contained"
                    color="primary"
                    className={`back-menu-button ${gameStatus === GAME_STATUS_DATA.paused && 'hide'}`}
                    onClick={handleGoMenu}
            >
                BACK TO MENU
            </Button>
            {
                gameStatus === GAME_STATUS_DATA.playing ?
                    null :
                    <AlertDialog open={dialogOpen}
                                 gameStatus={gameStatus}
                                 handleGoMenu={handleGoMenu}
                                 handleReviewField={handleReviewField}
                                 handlePauseGame={handlePauseGame}
                                 handlePlayAgain={handlePlayAgain}
                                 title={getDialogTitle()}
                                 userName={player.username}
                                 gameTime={`${minutes < 10 ? '0' + minutes : minutes} min ${seconds < 10 ? '0' + seconds : seconds} sec`}
                    />
            }
        </main>
    )
}

export default Playground
