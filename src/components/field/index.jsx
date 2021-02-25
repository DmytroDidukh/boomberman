import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';

import {ceilOpen, ceilSetFlag} from "../../redux/actions";
import './styles.scss'


const Field = () => {
    const field = useSelector(({field}) => field)
    const dispatch = useDispatch()

    const ceilClickHandler = (e, id) => {
        e.preventDefault()
        console.log('click')
        e.type === 'click' ? dispatch(ceilOpen(id)) : dispatch(ceilSetFlag(id))
    }

    return (
        <section className='field'>
            {
                field.map((wrapper, index) => (
                    <div key={index} className='field-row'>
                        {
                            wrapper.map(child =>
                                !child.isClicked ? (
                                    <span key={child.id.join('')} className='field-ceil field-ceil_closed'
                                          onContextMenu={(e) => ceilClickHandler(e, child.id)}
                                          onClick={(e) => ceilClickHandler(e, child.id)}>
                                        {child.flag && <EmojiFlagsIcon/>}
                                    </span>
                                ) : (
                                    <span key={child.id.join('')}
                                          className='field-ceil field-ceil_open'>{child.id.join('')}</span>
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
