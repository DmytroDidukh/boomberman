import React from "react";
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';

import './styles.scss'

const Ceil = ({ceil, clickHandler}) => {

    const getCeilInner = () => {
        return ceil.bomb ? <span>&#128163;</span> : ceil.num
    }

    return (
        <>
            {
                !ceil.isClicked ? (
                    <span key={ceil.id.join('')} className='field-ceil field-ceil_closed'
                          onContextMenu={(e) => clickHandler(e, ceil.id)}
                          onClick={(e) => clickHandler(e, ceil.id)}>
                                        {ceil.flag && <EmojiFlagsIcon/>}
                                    </span>
                ) : (
                    <span key={ceil.id.join('')}
                          className='field-ceil field-ceil_open'>{getCeilInner()}</span>
                )
            }
        </>
    )
}


export default Ceil;
