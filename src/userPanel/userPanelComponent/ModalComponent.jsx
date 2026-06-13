import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState, createElement } from 'react';
import { Typography } from '@mui/material';

function ModalComponent({ btnName, btnSx, type = "button", color, startIcon, Content, modalWidth, contentData, onOpen }) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        if (onOpen) onOpen();
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: modalWidth ? modalWidth : 600,
        bgcolor: 'background.paper',
        borderRadius: ".5rem",
        boxShadow: 24,
        p: 3,
    }

    return (
        <div>
            {type === "button" ? (
                <Button
                    variant='contained'
                    size='small'
                    startIcon={startIcon}
                    onClick={handleOpen}
                    sx={{ ...btnSx, textTransform: "none" }}
                >
                    {btnName}
                </Button>
            ) : type === "icon" ? (
                createElement(btnName, {
                    onClick: handleOpen,
                    sx: { ...btnSx, cursor: "pointer" },
                })
            ) : (
                <Typography onClick={handleOpen} sx={{ cursor: "pointer", color: color }}>
                    {btnName}
                </Typography>
            )}
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Content data={contentData} onClose={handleClose} />
                </Box>
            </Modal>
        </div>
    );
}

export default ModalComponent;