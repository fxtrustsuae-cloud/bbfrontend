import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState, createElement } from 'react';
import { Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function ModalComponent({ open, btnName, btnSx, type = "button", color, startIcon, Content, modalWidth, contentData, onOpen, padding }) {

    // const [open, setOpen] = useState(false);
    const [internalOpen, setInternalOpen] = useState(false);
    const modalOpen = typeof open === "boolean" ? open : internalOpen;

    // const handleOpen = () => {
    //     if (onOpen) onOpen();
    //     setOpen(true);
    // };

    const handleOpen = () => {
        if (onOpen) onOpen();
        setInternalOpen(true);
    };

    // const handleClose = () => setOpen(false);
    const handleClose = () => {
        if (typeof open === "boolean") {
            if (contentData?.onModalClose) contentData.onModalClose();
        } else {
            setInternalOpen(false);
        }
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: modalWidth ? modalWidth : 600,
        bgcolor: 'background.paper',
        borderRadius: ".5rem",
        boxShadow: 24,
        p: padding ? padding : 3,
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
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <CloseIcon
                        sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            cursor: "pointer",
                            zIndex: 10,
                        }}
                        onClick={handleClose}
                    />
                    <Content data={contentData} onClose={handleClose} />
                </Box>
            </Modal>
        </div>
    );
}

export default ModalComponent;