import React from "react";
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';

import './styles.scss'

const Cell = ({cell, clickHandler, rightClickHandler}) => (
    <>
        {
            !cell.isClicked ? (
                <span className='field-cell field-cell_closed'
                      onContextMenu={(e) => rightClickHandler(e, cell.id)}
                      onClick={(e) => clickHandler(e, cell.id)}>
                                        {cell.flag && <EmojiFlagsIcon/>}
                                    </span>
            ) : (
                <span className='field-cell field-cell_open'>{cell.bomb ? <span>&#128163;</span> : cell.num}</span>
            )
        }
    </>
)


export default Cell;
