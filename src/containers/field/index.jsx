import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {openCell, setFlag} from "../../redux/actions";
import Cell from "../../components/cell";
import checkAroundCells from "../../utils/checkAroundCells";
import './styles.scss'


const Field = () => {
    const field = useSelector(({field}) => field)
    const dispatch = useDispatch()

    const cellClickHandler = (e, id) => {
        e.preventDefault()

        if (e.type === 'click') {
            const zerosAround = checkAroundCells(field, id[0], id[1], 'num').filter(item => !item)

            console.log(zerosAround)

            dispatch(openCell(id))
        } else {
            dispatch(setFlag(id))
        }
    }

    return (
        <section className='field'>
            {
                field.map((wrapper, index) => (
                    <div key={index} className='field-row'>
                        {
                            wrapper.map(child =>
                                <Cell
                                    key={child.id}
                                    ceil={child}
                                    clickHandler={cellClickHandler}
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
