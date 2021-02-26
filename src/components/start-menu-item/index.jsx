import React, {useState} from "react";
import {MenuItem, Typography, Select, FormControl} from "@material-ui/core";

import './styles.scss'

const StartMenuItem = ({data, initialValue, id, dispatch, action}) => {
    const [value, setValue] = useState(initialValue)

    const handleChange = (e) => {
        const target = data.find(item => item.value === e.target.value)

        console.log(id)
        console.log(target.name.toLocaleLowerCase())
        setValue(target.value)
        dispatch(action(id === 'Field size' ? target.value : target.name.toLocaleLowerCase()))
    };

    return (
        <div className="preview-menu-item">
            <Typography variant='h6'>{id}:</Typography>
            <FormControl>
                <Select
                    data-id={data.id}
                    value={value}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{'aria-label': 'Without label'}}
                >
                    {
                        data.map(item => (
                            <MenuItem key={item.name} value={item.value}>{item.name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </div>
    )
}


export default StartMenuItem
