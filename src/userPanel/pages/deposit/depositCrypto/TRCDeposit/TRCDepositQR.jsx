import {
    Card,
    CardContent,
    Stack,
    Typography,
    Tooltip,
    IconButton,
    Container,
    Box,
    ListItem,
    List
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CountdownTimer from "../../../../userPanelComponent/CountdownTimer";
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { useState } from "react";
import { QRCodeCanvas } from 'qrcode.react';
import { removeDepositQRData, removeCreatedTime, removeExpireTime, setHasTimedOut, removePaymentLoading } from "../../../../../globalState/paymentState/paymentStateSlice";
import useCountdownTimer from "../../../../../hooks/useCountdownTimer";

function TRCDepositQR() {

    const dispatch = useDispatch()

    const { depositQRData, createdTime, expireTime } = useSelector(state => state.payment)

    const timeLeft = useCountdownTimer(createdTime, expireTime, () => {
        // dispatch(setHasTimedOut(true));
        dispatch(removeDepositQRData());
        dispatch(removeCreatedTime());
        dispatch(removeExpireTime());
        dispatch(removePaymentLoading())
    });

    const formatTime = (seconds) => {
        const m = String(Math.floor(seconds / 60)).padStart(2, '0');
        const s = String(seconds % 60).padStart(2, '0');
        return `${m}:${s}`;
    };

    const [copied, setCopied] = useState(false);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    return (
        <Stack mt={"2rem"}>
            <Container>
                <Card
                    sx={{
                        boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                        borderRadius: "2rem",
                        height: "100%",
                        padding: { md: "2rem" }
                    }}>
                    <Container maxWidth="sm">
                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "1rem",
                                wordBreak: "break-word",
                            }}
                        >
                            <Typography variant='h6'>Scan QR Code to Complete Deposit</Typography>
                            {depositQRData ? (
                                <QRCodeCanvas
                                    value={depositQRData?.payment_address}
                                    size={200}
                                    bgColor="#ffffff"
                                    fgColor="#000000"
                                    level="H"
                                    includeMargin
                                />
                            ) : (
                                <Typography color="text.secondary">
                                    QR Code not available
                                </Typography>
                            )}
                            <Typography color="red">Your transaction will automatically complete after payment confirmation</Typography>
                            {/* <CountdownTimer /> */}
                            <Typography fontSize={"1.2rem"} fontWeight={600} color={timeLeft === 0 ? 'error' : 'text.primary'}>
                                {timeLeft <= 0 ? 'Time Out' : `Time Left: ${formatTime(timeLeft)}`}
                            </Typography>
                            <Stack sx={{ alignItems: "center", gap: "10px" }}>
                                <Box sx={{ display: "flex", gap: "5px" }}>
                                    <Typography fontWeight={"bold"}>Amount to deposit: {depositQRData?.receive_amount}</Typography>
                                    <Typography fontWeight={"bold"}>{depositQRData?.token_symbol}</Typography>
                                </Box>
                                <Typography>{depositQRData?.token_name}</Typography>
                            </Stack>
                            <Stack>
                                <Typography fontWeight={"bold"}>Deposit Address:</Typography>
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <Typography>{depositQRData?.payment_address}</Typography>
                                    <Tooltip title={copied ? "Copied!" : "Copy"}>
                                        <IconButton onClick={() => handleCopy(depositQRData?.payment_address)}>
                                            <ContentCopyOutlinedIcon sx={{ fontSize: "20px" }} />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            </Stack>
                            <List sx={{ listStyleType: "disc", pl: 2, py: 0 }}>
                                <Typography fontWeight={"bold"} fontSize={"1.5rem"}>Important Note:</Typography>
                                <ListItem sx={{ display: "list-item", p: 0 }}>The system will automatically confirm your payments.</ListItem>
                                <ListItem sx={{ display: "list-item", p: 0 }}>After sending payment please wait for at least 3 to 4 minutes for confirmations, your deposit will be processed automatically.</ListItem>
                                <ListItem sx={{ display: "list-item", p: 0 }}>The above address will be valid for 3 hours to send payment.</ListItem>
                                <ListItem sx={{ display: "list-item", p: 0 }}>If you send payment after 1 hour on the above address it will be ignored.</ListItem>
                                <ListItem sx={{ display: "list-item", p: 0 }}>Transfer exact amount showing above, other amounts will be ignored.</ListItem>
                            </List>
                        </CardContent>
                    </Container>
                </Card>
            </Container>
        </Stack>
    );
}

export default TRCDepositQR;