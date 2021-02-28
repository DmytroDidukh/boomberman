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

import {getReadableTime} from '../../utils/getReadableTime'

const LeaderboardTable = ({data, index}) => (
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

export default LeaderboardTable
