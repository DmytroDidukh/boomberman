import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import './styles.scss'
import StartMenuItem from "../../components/start-menu-item";
import {changeFieldSize, changeGameMode} from "../../redux/actions";
import {FIELD_SIZE_DATA, GAME_MODE_DATA} from "../../config";
import {FormControl, MenuItem, Select, Typography, FormHelperText} from "@material-ui/core";


const StartMenu = () => {
    const {gameMode, gameStatus, fieldSize} = useSelector(({gameMode, gameStatus, fieldSize}) => ({
        gameMode,
        gameStatus,
        fieldSize
    }))
    const dispatch = useDispatch()

    return (
        <section className='preview-menu'>
            <StartMenuItem data={FIELD_SIZE_DATA}
                           action={changeFieldSize}
                           dispatch={dispatch}
                           initialValue={10}
                           id='Field size'/>
            <StartMenuItem data={GAME_MODE_DATA}
                           action={changeGameMode}
                           dispatch={dispatch}
                           initialValue={1}
                           id='Game mode'/>
        </section>
    )
}

export default StartMenu;
