import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {openCell, setFlag} from "../../redux/actions";
import Cell from "../../components/cell";
import './styles.scss'
import getAroundCellsCords from "../../utils/getAroundCellsCords";


const Field = () => {
    const field = useSelector(({field}) => field)
    const dispatch = useDispatch()

    const cellClickHandler = (e, id) => {
        if (!field[id.y][id.x].num && !field[id.y][id.x].bomb) {
            const zerosAround = getAroundCellsCords(id.x, id.y, field.length).filter(cords => !field[cords.y][cords.x].num)
            zerosAround.forEach(({x, y}) => dispatch(openCell({x, y})))

        } else {
            console.log('GAME OVER BITCH!')
        }

        dispatch(openCell(id))
    }

    const cellRightClickHandler = (e, id) => {
        e.preventDefault()

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
