import React from "react";
import {useDispatch, useSelector} from "react-redux";

import Cell from "../../components/cell";
import {changeGameStatus, openCell, setFlag, setGameTime} from "../../redux/actions";
import getAllSafeCellsAround from "../../utils/getAllSafeCellsAround";
import {getSecondsFromTimestamp} from "../../utils/getReadableTime";
import {checkPlayerExist, updateExistedPlayer, savePlayerToLeaderboard} from "../../db/api";
import {GAME_STATUS_DATA} from "../../config";
import './styles.scss'

const Field = ({setDialogOpen}) => {
    const {field, numberOfFlags, numberOfBombs, gameStatus, player, gameTime} = useSelector(state => state)
    const dispatch = useDispatch()

    const cellClickHandler = async (e, {x, y}) => {
        if (gameStatus === GAME_STATUS_DATA.review || field[y][x].flag) {
            return
        }

        if (field[y][x].num === 0 && !field[y][x].bomb) {
            getAllSafeCellsAround(x, y, field, field.length)
                .filter(cords => !field[cords.y][cords.x].bomb)
                .forEach(({x, y}) => dispatch(openCell({x, y})))

        } else if (field[y][x].bomb) {
            field.forEach(parent => parent
                .filter(child => child.bomb)
                .forEach(({id}) => dispatch(openCell(id)))
            )

            dispatch(changeGameStatus(GAME_STATUS_DATA.lost))
            dispatch(setGameTime({gameEnd: Date.now()}))
            setDialogOpen(true)
            return;
        }

        dispatch(openCell({x, y}))
        const openedCellsLength = field
            .map(parent => parent.filter(child => child.click).length)
            .reduce((sum, num) => sum + num, 0)

        if (field.length * 10 === openedCellsLength + numberOfBombs) {
            dispatch(changeGameStatus(GAME_STATUS_DATA.won))
            dispatch(setGameTime({gameEnd: Date.now()}))
            setDialogOpen(true)

            const existedPlayer = await checkPlayerExist(player.username, player.gameMode)
            const atomicTime = getSecondsFromTimestamp({...gameTime, gameEnd: Date.now()})

            if (existedPlayer && existedPlayer.gameTime >= atomicTime) {
                updateExistedPlayer(existedPlayer.id, atomicTime)
            } else if (!existedPlayer) {
                savePlayerToLeaderboard({...player, gameTime: atomicTime})
            }
        }
    }

    const cellRightClickHandler = (e, id) => {
        e.preventDefault()

        // eslint-disable-next-line no-mixed-operators
        if (!numberOfFlags && !field[id.y][id.x].flag || gameStatus === GAME_STATUS_DATA.review) {
            return
        }

        dispatch(setFlag(id))
    }

    return (
        <section className={`field ${gameStatus === GAME_STATUS_DATA.paused && 'hide'}`}>
            {
                field.map((wrapper, index) => (
                    <div key={index} className='field-row'>
                        {
                            wrapper.map(child =>
                                <Cell
                                    key={`${child.id.y} + ${child.id.x}`}
                                    cell={child}
                                    clickHandler={cellClickHandler}
                                    rightClickHandler={cellRightClickHandler}
                                />
                            )
                        }
                    </div>
                ))
            }
        </section>
    )
}

export default Field
