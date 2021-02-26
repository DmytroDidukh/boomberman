import React, {useState} from "react";
import {MenuItem, Select, FormControl} from "@material-ui/core";


const StartMenuItem = ({data, initialValue, id, dispatch, action}) => {
    const [value, setValue] = useState(initialValue)

    const handleChange = (e) => {
        const target = data.find(item => item.value === e.target.value)

        setValue(target.value)
        dispatch(action(id === 'Field size' ? target.value : target.name.toLocaleLowerCase()))
    };

    return (
        <div className="start-menu-item">
            <h4>{id}:</h4>
            <FormControl>
                <Select
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
