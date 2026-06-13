import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ForgotPassword from '../../authPages/forgotPassword/ForgotPassword';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    pb: 5
};

function ForgotPasswordModal({ btnName }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Typography onClick={handleOpen} sx={{ cursor: "pointer", color: "#f1b811" }}>{btnName}</Typography>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box textAlign={"right"} mb={"1rem"}><CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} /></Box>
                    <ForgotPassword onClose={handleClose} />
                </Box>
            </Modal>
        </div>
    );
}

export default ForgotPasswordModal;