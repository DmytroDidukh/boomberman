import React from "react";
import {MenuItem, Typography, Select, FormControl} from "@material-ui/core";

import './styles.scss'

const StartMenuItem = ({data, handleChange, initialValue, id}) => (
    <div className="preview-menu-item">
        <Typography variant='h3'>{id}:</Typography>
        <FormControl>
            <Select
                data-id={data.id}
                value={initialValue}
                onChange={(e) => handleChange(e, id)}
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


export default StartMenuItem
