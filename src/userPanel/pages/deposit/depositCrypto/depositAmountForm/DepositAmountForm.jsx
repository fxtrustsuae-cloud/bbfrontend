import { Button, Card, Container, Divider, Stack, Typography, TextField, InputLabel } from '@mui/material'
import Grid from "@mui/material/Grid2"
import { useWalletDepositMutation } from '../../../../../globalState/walletState/walletStateApis';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { setNotification } from '../../../../../globalState/notification/notificationSlice';
import { useDispatch, useSelector } from 'react-redux';

import * as z from 'zod';

const walletDepositeSchema = z.object({
    amount: z.string().min(1, "Please type your deposit amount")
})

function DepositAmountForm() {

    const { countdownEndTime } = useSelector(state => state.wallet);

    const dispatch = useDispatch()

    const defaultValues = {
        amount: ""
    };

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(walletDepositeSchema),
        defaultValues
    });

    const [walletDeposit, { isLoading }] = useWalletDepositMutation()

    const onSubmit = async (data) => {

        try {
            const response = await walletDeposit(data).unwrap();

            if (response?.status) {
                reset(defaultValues);
                dispatch(setNotification({ open: true, message: response?.message, severity: "success" }));
            }
        } catch (error) {
            if (error?.data) {
                dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to submit. Please try again later.", severity: "error" }));
            }
        }
    };

    return (
        <Stack mt={"1.2rem"}>
            <Container>
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
                        <Grid container size={12} spacing={3}>
                            <Grid item size={{ xs: 12, sm: 6 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Amount to be deposit</InputLabel>
                                <TextField {...register("amount", { require: true })} size='small' fullWidth placeholder="Amount to be deposit" variant="outlined" />
                                {errors.amount && <Typography color="error">{errors.amount.message}</Typography>}
                            </Grid>
                        </Grid>
                        <Button
                            variant='contained'
                            size='small'
                            type='submit'
                            disabled={isLoading || countdownEndTime}
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

export default DepositAmountForm;