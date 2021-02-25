import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import './styles.scss'
import StartMenuItem from "../../components/start-menu-item";
import {changeFieldSize, changeGameMode} from "../../redux/actions";

const GAME_MODE_DATA = [
    {id: 0, value: 0, name: 'Easy'},
    {id: 1, value: 1, name: 'Normal'},
    {id: 2, value: 2, name: 'Hard'}
]

const FIELD_SIZE_DATA = [
    {idX: 0, value: 10, name: '10x10'},
    {idX: 1, value: 20, name: '20x20'},
    {idX: 2, value: 30, name: '30x30'}
]

const StartMenu = () => {
    const {gameMode, gameStatus, fieldSize} = useSelector(({gameMode, gameStatus, fieldSize}) => ({
        gameMode,
        gameStatus,
        fieldSize
    }))
    const dispatch = useDispatch()

    const [mode, setMode] = useState(1)
    const [size, setSize] = useState(10)

    const handleChange = (e, selectId) => {
        console.log(e)
        const id = e.target.dataset.id

        if (selectId === 'Field size') {
            setSize(e.target.value);
            dispatch(changeFieldSize(FIELD_SIZE_DATA[id].name.toLocaleLowerCase()))
        } else {
            setMode(e.target.value);
            dispatch(changeGameMode(GAME_MODE_DATA[id].name.toLocaleLowerCase()))
        }
    };

    return (
        <section className='preview-menu'>
            <StartMenuItem data={FIELD_SIZE_DATA} handleChange={handleChange} initialValue={size} id='Field size'/>
            <StartMenuItem data={GAME_MODE_DATA} handleChange={handleChange} initialValue={mode} id='Game mode'/>
        </section>
    )
}

export default StartMenu;
