import React, {useState} from "react";
import RefreshIcon from '@material-ui/icons/Refresh';
import {useDispatch, useSelector} from "react-redux";
import IconButton from '@material-ui/core/IconButton';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import {Button} from "@material-ui/core";

import Timer from "../../components/timer";
import Field from "../field";
import AlertDialog from "../../components/dialog";
import {changeGameStatus, resetGameTime, setField, setGameTime} from "../../redux/actions";
import createField from "../../utils/createField";
import fillFieldWithBombs from "../../utils/fillFieldWithBombs";
import {getSecondsFromTimestamp, getReadableTime} from '../../utils/getReadableTime'
import {GAME_STATUS_DATA} from "../../config";
import './styles.scss'

const Playground = () => {
    const {numberOfFlags, gameStatus, field, numberOfBombs, player, gameTime} = useSelector((state) => state)
    const dispatch = useDispatch()

    const [dialogOpen, setDialogOpen] = useState(false);
    const [timeCounter, setTimeCounter] = useState(0);

    const handleGoMenu = () => {
        setDialogOpen(false)
        dispatch(changeGameStatus(GAME_STATUS_DATA.preparing))
        dispatch(setField({field: createField(10), numberOfFieldItems: numberOfBombs}))
        dispatch(resetGameTime())
    }

    const handleReviewField = () => {
        dispatch(changeGameStatus(GAME_STATUS_DATA.review))
        setDialogOpen(false)
    }

    const handlePauseGame = () => {
        setDialogOpen(prev => !prev)
        dispatch(changeGameStatus(dialogOpen ? GAME_STATUS_DATA.playing : GAME_STATUS_DATA.paused))

        //Calculating pause time
        let keyVariableForPause = 'pauseStart';
        let pauseTimeWithPreviousOrNot = Date.now()

        if (dialogOpen) {
            keyVariableForPause = 'pauseEnd'
            pauseTimeWithPreviousOrNot += gameTime.pauseEnd && Date.now() - gameTime.pauseStart
        }

        dispatch(setGameTime({[keyVariableForPause]: pauseTimeWithPreviousOrNot}))
    }

    const handlePlayAgain = () => {
        setTimeCounter(0)
        dispatch(changeGameStatus(GAME_STATUS_DATA.playing))

        const updatedField = fillFieldWithBombs(createField(field.length), field.length, numberOfBombs)
        dispatch(setField({field: updatedField, numberOfFieldItems: numberOfBombs}))
        dispatch(resetGameTime())
        dispatch(setGameTime({gameStart: Date.now()}))
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
                            timeCounter={timeCounter}
                            setTimeCounter={setTimeCounter}/>
                    </>
                }
            </section>
            <Field setDialogOpen={setDialogOpen} timeCounter={timeCounter}/>
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
                                 gameTime={getReadableTime(getSecondsFromTimestamp(gameTime))}
                    />
            }
        </main>
    )
}

export default Playground
