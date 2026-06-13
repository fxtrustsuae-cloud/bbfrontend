import { Button, Card, Container, Divider, Stack, Typography, TextField, InputLabel } from '@mui/material'
import Grid from "@mui/material/Grid2"
import { useInternalTransferMutation } from '../../../../globalState/walletState/walletStateApis';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { setNotification } from '../../../../globalState/notification/notificationSlice';
import { useDispatch } from 'react-redux';
import { internalTransferSchema } from './internalTransferSchema';
import { useGetReferralInfoQuery } from '../../../../globalState/walletState/walletStateApis';

function InternalTransfer() {

    const dispatch = useDispatch()

    const defaultValues = {
        amount: "",
        referralCode: "",
        password: ""
    };

    const { register, handleSubmit, watch, setError, reset, formState: { errors } } = useForm({
        resolver: zodResolver(internalTransferSchema),
        defaultValues
    });

    const [internalTransfer, { isLoading }] = useInternalTransferMutation()

    const referal = watch("referralCode")

    const {
        data: referralData,
        isError,
        error,
        isFetching
    } = useGetReferralInfoQuery(
        { referralCode: referal },
        {
            skip: !referal,
            refetchOnMountOrArgChange: true,
            refetchOnReconnect: true,
        }
    );

    let referalName = null;

    if (!referal || referal.trim() === "") {
        referalName = null;
    } else if (isFetching) {
        referalName = <Typography>Loading...</Typography>;
    } else if (isError) {
        referalName = <Typography color='red'>{error?.data?.message}</Typography>;
    } else if (referralData?.data?.name) {
        referalName = <Typography>{referralData?.data?.name}</Typography>;
    }

    const onSubmit = async (data) => {

        try {
            const response = await internalTransfer(data).unwrap();

            if (response?.status) {
                reset(defaultValues);
                dispatch(setNotification({ open: true, message: response?.message, severity: "success" }));
            }
        } catch (error) {
            if (error?.data?.data) {
                Object.entries(error.data.data).forEach(([field, message]) => {
                    setError(field, { type: "server", message });
                });
            } else {
                dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to submit. Please try again later.", severity: "error" }));
            }
        }
    };

    return (
        <Stack mt={"100px"}>
            <Container>
                <Typography variant="h4" fontWeight="bold" mb={"2rem"}>Internal Transfer</Typography>
                <Card
                    sx={{
                        padding: { xs: "1rem", sm: "2rem" },
                        borderRadius: "2rem",
                        boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                    }}
                >
                    <Typography variant='h6' m={{ xs: "1rem", sm: "0" }}>Fill details</Typography>
                    <Divider sx={{ my: "1.2rem" }} />
                    <Stack
                        gap={"2rem"}
                        component={"form"}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Grid container size={12} spacing={2}>
                            <Grid item size={{ xs: 12, sm: 6 }}>
                                {/* <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}> */}
                                <InputLabel sx={{ mb: ".5rem" }}>Amount to Fund Transfer *</InputLabel>
                                {/* <InputLabel sx={{ mb: ".5rem" }}>Trade Balance : </InputLabel> */}
                                {/* </Stack> */}
                                <TextField
                                    {...register("amount", { require: true })}
                                    size='small' fullWidth placeholder="Amount transfer" variant="outlined" />
                                {errors.amount && <Typography color="error">{errors.amount.message}</Typography>}
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Referral Code *</InputLabel>
                                <TextField  {...register("referralCode", { require: true })} size='small' fullWidth placeholder="Referral code" variant="outlined" />
                                <InputLabel sx={{ mb: ".5rem" }}>{referalName}</InputLabel>
                                {errors.referralCode && <Typography color="error">{errors.referralCode.message}</Typography>}
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Transaction password *</InputLabel>
                                <TextField
                                    {...register("password", { require: true })}
                                    size='small' fullWidth placeholder="Transaction password" variant="outlined" />
                                {errors.password && <Typography color="error">{errors.password.message}</Typography>}
                            </Grid>
                        </Grid>
                        <Button
                            variant='contained'
                            size='small'
                            type='submit'
                            disabled={isLoading}
                            sx={{
                                textTransform: "capitalize",
                                width: "5rem",
                                boxShadow: "none",
                                bgcolor: "primary.main",
                                fontSize: "1rem",
                                color: "white",
                                "&:hover": {
                                    boxShadow: "none"
                                }
                            }}
                        >Submit</Button>
                    </Stack>
                </Card>
            </Container>
        </Stack>
    )
}

export default InternalTransfer;