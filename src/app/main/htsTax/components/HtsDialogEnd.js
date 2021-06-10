import { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import { green, red, blue } from '@material-ui/core/colors';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },

    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const useStyles = makeStyles((theme) => ({

    color: {

        color: blue[700],
    }
}));

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function HtsDialogEnd({ evento1, evento2, evento3, evento4 }) {

   
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (

        <div>
            <Button type="submit" variant="outlined" color="primary" onClick={handleClickOpen}>
                Save Selection
        </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle className={classes.color} id="customized-dialog-title" onClose={handleClose}>
                    HTS : {evento1}
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <ListItem className={classes.color}>Categories: </ListItem>
                        <ListItem>{evento2.L0}</ListItem>
                        <ListItem>{evento2.L1}</ListItem>
                        <ListItem>{evento2.L2}</ListItem>
                        <ListItem>{evento2.L3}</ListItem>
                    </Typography>
                    <Typography gutterBottom>
                        <ListItem className={classes.color}>Description: </ListItem>
                        <ListItem>{evento3} </ListItem>
                    </Typography>
                    <Typography gutterBottom>
                        <ListItem className={classes.color}>Import Taxes (Duties): </ListItem>
                        <ListItem>{evento4}</ListItem>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Finish
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}