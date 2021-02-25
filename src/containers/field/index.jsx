import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';

import {ceilOpen, ceilSetFlag} from "../../redux/actions";
import './styles.scss'
import Ceil from "../../components/ceil";


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
                                <Ceil
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
