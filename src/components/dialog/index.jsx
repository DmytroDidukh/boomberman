import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';

import {GAME_STATUS_DATA} from "../../config";

const AlertDialog = ({
                         open,
                         gameStatus,
                         handleGoMenu,
                         handleReviewField,
                         handlePauseGame,
                         handlePlayAgain,
                         title,
                         userName,
                         gameTime
                     }) => (
    <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        {
            gameStatus !== GAME_STATUS_DATA.paused && <DialogContent>
                <DialogContentText className='dialog-body' id="alert-dialog-description">
                    User: {userName} <br/>
                    Time: {gameTime}
                </DialogContentText>
            </DialogContent>
        }
        <DialogActions>
            {
                gameStatus === GAME_STATUS_DATA.paused ?
                    <Button className='dialog-button' onClick={handlePauseGame} color="primary" autoFocus
                            variant="contained">
                        Continue
                    </Button>
                    :
                    <>
                        <Button className='dialog-button' onClick={handleGoMenu} color="primary" autoFocus
                                variant="outlined">
                            Back to menu
                        </Button>
                        <Button className='dialog-button' onClick={handleReviewField} color="primary" autoFocus
                                variant="outlined">
                            Review field
                        </Button>
                        <Button className='dialog-button' onClick={handlePlayAgain} color="primary" autoFocus
                                variant="contained">
                            Play again
                        </Button>
                    </>
            }
        </DialogActions>
    </Dialog>
);

export default AlertDialog;
