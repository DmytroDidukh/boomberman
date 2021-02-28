import React from "react";
import {
    TableContainer,
    Paper,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    Table,
} from '@material-ui/core'


const LeaderboardTable = ({data, index}) => {

    const getReadableTime = (timestamp) => {
        const hours = Math.floor(timestamp / 60 / 60);
        const minutes = Math.floor(timestamp / 60) - (hours * 60);
        const seconds = timestamp % 60;

        return `${hours ? hours + 'h' : ''} ${minutes ? minutes + 'm' : ''} ${seconds}s`
    }

    return (
        <TableContainer component={Paper} index={index}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell>Username</TableCell>
                        <TableCell align="right">Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map(player => (
                            <TableRow key={player.username}>
                                <TableCell component="th" scope="row">
                                    {player.username}
                                </TableCell>
                                <TableCell align="right">{getReadableTime(player.gameTime)}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default LeaderboardTable
