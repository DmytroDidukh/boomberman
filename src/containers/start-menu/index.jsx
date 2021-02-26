import React from "react";
import {useDispatch} from "react-redux";

import './styles.scss'
import StartMenuItem from "../../components/start-menu-item";
import {changeFieldSize, changeGameMode} from "../../redux/actions";
import {FIELD_SIZE_DATA, GAME_MODE_DATA} from "../../config";
import {Button} from "@material-ui/core";


const StartMenu = () => {
    const dispatch = useDispatch()

    const startGame = () => {
        dispatch()
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
