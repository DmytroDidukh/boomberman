import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {ceilOpen, ceilSetFlag} from "../../redux/actions";
import './styles.scss'
import Cell from "../../components/cell";


const Field = () => {
    const field = useSelector(({field}) => field)
    const dispatch = useDispatch()

    const ceilClickHandler = (e, id) => {
        e.preventDefault()
        e.type === 'click' ? dispatch(ceilOpen(id)) : dispatch(ceilSetFlag(id))
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
                                    clickHandler={ceilClickHandler}
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
