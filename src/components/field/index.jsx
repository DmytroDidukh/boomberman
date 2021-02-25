import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {ceilClick} from "../../redux/actions";
import './styles.scss'


const Field = () => {
    const field = useSelector(({field}) => field)
    const dispatch = useDispatch()

    const openCeil = (id) => {
        dispatch(ceilClick(id))
    }

    return (
        <section className='field'>
            {
                field.map((wrapper, index) => (
                    <div key={index} className='field-row'>
                        {
                            wrapper.map(child =>
                                    !child.isClicked ? (
                                        <span key={child.id.join('')} className='field-ceil field-ceil_closed' onClick={() => openCeil(child.id)}/>
                                    ) : (
                                        <span key={child.id.join('')} className='field-ceil field-ceil_open'>{child.id.join('')}</span>
                                    )

                            )
                        }
                    </div>
                ))
            }
        </section>
    )
}

export default Field
