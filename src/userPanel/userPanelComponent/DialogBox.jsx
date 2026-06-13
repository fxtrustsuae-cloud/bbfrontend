import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useDeleteBannerMutation } from '../../globalState/admin/adminStateApis';
import { setNotification } from '../../globalState/notification/notificationSlice';
import { useDispatch } from 'react-redux';

function DialogBox({ btnName, btnSx, bannerId }) {

    const dispatch = useDispatch()

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [deleteBanner, { isLoading }] = useDeleteBannerMutation()

    const handleSubmitClose = async () => {
        try {
            const response = await deleteBanner({ bannerId }).unwrap();
            if (response?.status) {
                dispatch(setNotification({ open: true, message: response?.message, severity: "success" }));
                handleClose()
            }
        } catch (error) {
            if (!error?.data?.status) {
                dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to submit. Please try again later.", severity: "error" }));
            }
        }
    }

    return (
        <>
            <Button sx={btnSx && { ...btnSx }} onClick={handleClickOpen}>
                {btnName}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete Banner?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Once you delete this banner, you won't be able to find it.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button disabled={isLoading} onClick={handleSubmitClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default DialogBox;