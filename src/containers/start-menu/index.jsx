import React from "react";
import {useDispatch} from "react-redux";
import {Button} from "@material-ui/core";

import StartMenuItem from "../../components/start-menu-item";
import {changeFieldSize, changeGameMode, changeGameStatus} from "../../redux/actions";
import {FIELD_SIZE_DATA, GAME_MODE_DATA, GAME_STATUS_DATA} from "../../config";
import './styles.scss'

const StartMenu = () => {
    const dispatch = useDispatch()

    const startGame = () => {
        dispatch(changeGameStatus(GAME_STATUS_DATA.playing))
    }

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
            <Button variant="contained"
                    color="primary"
                    className='start-button'
                    onClick={startGame}
            >
                START
            </Button>
        </section>
    )
}

export default StartMenu;
