import {
    Card,
    CardContent,
    Container,
    Stack,
    Typography,
    Tooltip,
    IconButton,
    InputLabel,
    TextField,
    Button,
    useMediaQuery
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CountdownTimer from "../../../../userPanelComponent/CountdownTimer";
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { useState } from "react";
import { useVerifyTransactionHashMutation } from "../../../../../globalState/walletState/walletStateApis";
import { useForm } from "react-hook-form";
import { setNotification } from "../../../../../globalState/notification/notificationSlice";
import { removeDepositQRData, setHasTimedOut } from "../../../../../globalState/walletState/walletStateSlice";

function DepositCryptoQRs() {

    const matchs = useMediaQuery("(max-width:500px)")

    const dispatch = useDispatch()

    const { depositQRData } = useSelector(state => state.wallet)

    const depositQR = depositQRData;

    const [copied, setCopied] = useState(false);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    const { register, handleSubmit, reset } = useForm({
        defaultValues: { transactionHash: "" }
    });

    const [verifyTransactionHash, { isLoading }] = useVerifyTransactionHashMutation()

    const onSubmit = async (data) => {

        try {
            const response = await verifyTransactionHash(data).unwrap();
            if (response?.status) {
                reset(defaultValues);
                dispatch(setNotification({ open: true, message: response?.message, severity: "success" }));
                dispatch(removeDepositQRData())
                dispatch(setHasTimedOut(true));
            }
        } catch (error) {
            if (error?.data) {
                dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to submit. Please try again later.", severity: "error" }));
            }
        }

    };

    return (
        <Stack mt={"2rem"}>
            <Container>
                <Card
                    sx={{
                        boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                        borderRadius: "2rem",
                        height: "100%",
                        padding: { xs: "1rem", md: "2rem" }
                    }}
                    component={"form"}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "1rem",
                            wordBreak: "break-word"
                        }}
                    >
                        <Typography variant='h6'>Scan QR Code to Complete Deposit</Typography>
                        {depositQR ? (
                            <img
                                src={depositQR?.data}
                                alt="Deposit QR"
                                style={{
                                    maxWidth: "150px",
                                    width: "100%",
                                    height: "auto",
                                    border: "1px solid #ccc",
                                    borderRadius: "8px"
                                }}
                            />
                        ) : (
                            <Typography color="text.secondary">
                                QR Code not available
                            </Typography>
                        )}
                        <CountdownTimer />
                        <Stack
                            sx={{
                                flexDirection: "row",
                                alignItems: "center"
                            }}
                        >
                            <Typography>Deposit Address: {depositQR?.depositAddress}</Typography>
                            <Tooltip title={copied ? "Copied!" : "Copy"}>
                                <IconButton onClick={() => handleCopy(depositQR?.depositAddress)}>
                                    <ContentCopyOutlinedIcon sx={{ fontSize: "20px" }} />
                                </IconButton>
                            </Tooltip>
                        </Stack>
                        <Stack width={matchs ? "100%" : "400px"}>
                            <InputLabel sx={{ mb: ".5rem" }}>Transaction hash</InputLabel>
                            <TextField multiline {...register("transactionHash", { require: true })} size='small' fullWidth placeholder="Transaction hash" variant="outlined" />
                            <Button
                                variant='contained'
                                size='small'
                                type='submit'
                                disabled={isLoading}
                                sx={{
                                    textTransform: "capitalize",
                                    width: "5rem",
                                    mt: "1rem",
                                    boxShadow: "none",
                                    bgcolor: "primary.main",
                                    fontSize: "1rem",
                                    color: "white",
                                    "&:hover": {
                                        boxShadow: "none"
                                    }
                                }}
                            >Verify</Button>
                        </Stack>
                    </CardContent>
                </Card>
            </Container>
        </Stack>
    );
}

export default DepositCryptoQRs;