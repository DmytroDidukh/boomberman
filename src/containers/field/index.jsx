import React from "react";
import {useDispatch, useSelector} from "react-redux";

import Cell from "../../components/cell";
import {changeGameStatus, openCell, setFlag} from "../../redux/actions";
import getAroundCellsCords from "../../utils/getAroundCellsCords";
import getAllSafeCellsAround from "../../utils/getAllSafeCellsAround";
import {GAME_STATUS_DATA} from "../../config";
import './styles.scss'


const Field = ({setDialogOpen}) => {
    const {field, numberOfFlags, numberOfBombs, gameStatus} = useSelector(state => state)
    const dispatch = useDispatch()

    const cellClickHandler = (e, id) => {
        if (gameStatus === GAME_STATUS_DATA.review || field[id.y][id.x].flag) {
            return
        }

        if (field[id.y][id.x].num === 0 && !field[id.y][id.x].bomb) {
            const safeCells = getAllSafeCellsAround(id.x, id.y, field)
            //const zerosAround = getAroundCellsCords(id.x, id.y, field.length).filter(cords => !field[cords.y][cords.x].bomb)

            //const cellsAroundZerosWithoutBombs = getAllSafeCellsAround(zerosAround, field)
            //console.log(safeCells)
            //cellsAroundZerosWithoutBombs.forEach((item) => item.forEach(({x, y}) => dispatch(openCell({x, y}))))

            safeCells.forEach(({x, y}) => dispatch(openCell({x, y})))

        } else if (field[id.y][id.x].bomb) {
            field.forEach(parent => parent
                .filter(child => child.bomb)
                .forEach(({id: {x, y}}) => dispatch(openCell({x, y})))
            )

            dispatch(changeGameStatus(GAME_STATUS_DATA.lost))
            setDialogOpen(true)
            return;
        }


        const openedCellsLength = field
            .map(parent => parent.filter(child => child.isClicked).length)
            .reduce((sum, num) => sum + num, 1)

        if (field.length * 10 === openedCellsLength + numberOfBombs) {
            dispatch(changeGameStatus(GAME_STATUS_DATA.won))
            setDialogOpen(true)
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
