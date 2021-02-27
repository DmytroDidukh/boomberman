import React, {useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import LeaderboardTable from '../leaderboard-table'
import './styles.scss'

const Leaderboard = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className='leaderboard'>
            <Typography variant='h5'>Leaderboard</Typography>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="action tabs example"
                >
                    <Tab label="Easy"/>
                    <Tab label="Normal"/>
                    <Tab label="Hard"/>
                </Tabs>
            </AppBar>
            <SwipeableViews
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                {
                    [0, 2, 4].map((_, i) => (
                        <LeaderboardTable key={_} index={i}/>
                    ))
                }
            </SwipeableViews>
        </div>
    );
}

export default Leaderboard;
