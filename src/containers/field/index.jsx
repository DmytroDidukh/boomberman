import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {changeGameStatus, openCell, setFlag} from "../../redux/actions";
import Cell from "../../components/cell";
import getAroundCellsCords from "../../utils/getAroundCellsCords";
import {GAME_STATUS_DATA} from "../../config";
import './styles.scss'


const Field = ({setDialogOpen}) => {
    const {field, numberOfFlags, gameStatus} = useSelector(state => state)
    const dispatch = useDispatch()

    const cellClickHandler = (e, id) => {
        if (gameStatus === GAME_STATUS_DATA.review) {
            return
        }

        if (field[id.y][id.x].num === 0 && !field[id.y][id.x].bomb) {
            const zerosAround = getAroundCellsCords(id.x, id.y, field.length).filter(cords => !field[cords.y][cords.x].num)
            zerosAround.forEach(({x, y}) => dispatch(openCell({x, y})))

        } else if (field[id.y][id.x].bomb) {
            field.forEach(parent => parent
                .filter(child => child.bomb)
                .forEach(({id: {x, y}}) => dispatch(openCell({x, y})))
            )

            dispatch(changeGameStatus(GAME_STATUS_DATA.lost))
            setDialogOpen(true)
            console.log('GAME OVER!!!')
        }

        dispatch(openCell(id))
    }

    const cellRightClickHandler = (e, id) => {
        e.preventDefault()

        if (!numberOfFlags && !field[id.y][id.x].flag || gameStatus === GAME_STATUS_DATA.review) {
            return
        }

        dispatch(setFlag(id))
    }

    return (
        <section className='field'>
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
