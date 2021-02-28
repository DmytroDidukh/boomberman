import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, TextField} from "@material-ui/core";

import StartMenuItem from "../../components/start-menu-item";
import Leaderboard from "../leaderboard";
import {
    changeFieldSize,
    changeGameMode,
    changeGameStatus,
    setField,
    setLeaderboard,
    setPlayer
} from "../../redux/actions";
import {getTopTenPlayers} from '../../db/api'
import fillFieldWithBombs from "../../utils/fillFieldWithBombs";
import {FIELD_SIZE_DATA, GAME_MODE_DATA, GAME_STATUS_DATA} from "../../config";
import './styles.scss'

const inputRegExpValidator = (value) => /^[a-zA-Z ]{2,30}$/.test(value)

const StartMenu = () => {
    const {field, numberOfBombs, gameMode, player} = useSelector((state) => state)
    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState(player.username)
    const [shouldValidate, setShouldValidate] = useState(false)

    useEffect(() => {
        (async () => {
            const [easy, normal, hard] = await Promise.all([
                getTopTenPlayers('easy'),
                getTopTenPlayers('normal'),
                getTopTenPlayers('hard')
            ])

            return {easy, normal, hard}
        })()
            .then(data => dispatch(setLeaderboard(data)))
            .catch(e => console.error(e))
    }, [])

    const startGame = () => {
        if (!inputRegExpValidator(inputValue)) {
            setShouldValidate(true)
            return
        }

        const updatedField = fillFieldWithBombs(field, field.length, numberOfBombs)

        dispatch(setField({field: updatedField, numberOfFieldItems: numberOfBombs}))
        dispatch(changeGameStatus(GAME_STATUS_DATA.playing))
        dispatch(setPlayer({...player, username: inputValue, gameMode}))
    }

    const handleInputChange = (e) => {
        const value = e.target.value.trim();
        setInputValue(value)

        if (inputRegExpValidator(value)) {
            setShouldValidate(false)
        } else {
            setShouldValidate(true)
        }
    }

    return (
        <section className='start-menu'>
            <div className='game-options'>
                <TextField
                    error={shouldValidate}
                    id="standard-error-helper-text"
                    label="Enter your name"
                    helperText={shouldValidate ? "Invalid name" : ''}
                    className='username-input'
                    onChange={handleInputChange}
                    value={inputValue}
                />
                <StartMenuItem data={FIELD_SIZE_DATA}
                               action={changeFieldSize}
                               dispatch={dispatch}
                               initialValue={10}
                               id='Field size'/>
                <StartMenuItem data={GAME_MODE_DATA}
                               action={changeGameMode}
                               dispatch={dispatch}
                               initialValue={0}
                               id='Game mode'/>
                <Button variant="contained"
                        color="primary"
                        className='start-button'
                        onClick={startGame}
                >
                    START
                </Button>
            </div>
            <Leaderboard/>
        </section>
    )
}

export default StartMenu;
