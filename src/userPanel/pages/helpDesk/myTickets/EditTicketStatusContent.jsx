import { Stack, Typography, Button } from "@mui/material";
import Selector from "../../../userPanelComponent/Selector";
import { useUpdateSupportTicketMutation } from "../../../../globalState/admin/adminStateApis";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNotification } from "../../../../globalState/notification/notificationSlice";

function EditTicketStatusContent({ data, onClose }) {
    const dispatch = useDispatch();
    const ticketId = data?.ticketId;
    const currentStatus = data?.currentStatus;

    const [status, setStatus] = useState(currentStatus || "");

    useEffect(() => {
        setStatus(currentStatus || "");
    }, [currentStatus]);

    const [updateSupportTicket, { isLoading }] = useUpdateSupportTicketMutation();

    const handleSubmit = async () => {
        try {
            const response = await updateSupportTicket({ ticketId, status }).unwrap();
            if (response?.status) {
                dispatch(setNotification({
                    open: true,
                    message: response?.message,
                    severity: "success"
                }));
                onClose()
            }
        } catch (error) {
            dispatch(setNotification({
                open: true,
                message: error?.data?.message || "Failed to update status.",
                severity: "error"
            }));
        }
    };

    return (
        <Stack spacing={2}>
            <Typography variant='h5' fontWeight={"700"} fontSize={"1.5rem"}>
                Update Status
            </Typography>
            <Selector
                items={["OPEN", "CLOSED", "PROCESSING"]}
                showDefaultOption={false}
                value={status}
                disabled={isLoading}
                onChange={(newStatus) => setStatus(newStatus.target.value)}
            />
            <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={isLoading || status === currentStatus}
                sx={{
                    textTransform: "capitalize",
                    boxShadow: "none",
                    bgcolor: "primary.main",
                    color: "white",
                    "&:hover": {
                        boxShadow: "none"
                    }
                }}
            >
                Update Status
            </Button>
        </Stack>
    );
}

export default EditTicketStatusContent;