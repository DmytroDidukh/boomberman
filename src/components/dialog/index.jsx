import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

const AlertDialog = ({open, handleGoReplay, handleGoLeaderboard, handleReviewField, title}) => {

    return (
        <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogActions>
                <Button className='dialog-button' onClick={handleGoLeaderboard} color="primary" variant="outlined">
                    Leaderboard
                </Button>
                <Button className='dialog-button' onClick={handleReviewField} color="primary" autoFocus
                        variant="outlined">
                    Review field
                </Button>
                <Button className='dialog-button' onClick={handleGoReplay} color="primary" autoFocus
                        variant="contained">
                    Play again
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AlertDialog;
