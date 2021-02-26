import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@material-ui/core";

import StartMenuItem from "../../components/start-menu-item";
import {changeFieldSize, changeGameMode, changeGameStatus, setFieldWithBombs} from "../../redux/actions";
import {FIELD_SIZE_DATA, GAME_MODE_DATA, GAME_STATUS_DATA} from "../../config";
import './styles.scss'
import fillFieldWithBombs from "../../utils/fillFieldWithBombs";

const StartMenu = () => {
    const {field, numberOfBombs} = useSelector(({field, numberOfBombs}) => ({
        field,
        numberOfBombs
    }))
    const dispatch = useDispatch()

    const startGame = () => {
        const updatedField = fillFieldWithBombs(field, field.length, numberOfBombs)

        dispatch(setFieldWithBombs(updatedField))
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
