import React from "react";
import {withStyles} from '@material-ui/core/styles';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 12,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const LeaderboardTable = () => {

    return (
        <TableContainer component={Paper} index={0}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Username</StyledTableCell>
                        <StyledTableCell align="right">Time</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    <StyledTableRow key={'row.name'}>
                        <StyledTableCell component="th" scope="row">
                            54
                        </StyledTableCell>
                        <StyledTableCell align="right">hhhh</StyledTableCell>
                    </StyledTableRow>

                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default LeaderboardTable
