import { Button, Card, Container, Divider, Stack, Typography, TextField, InputLabel } from '@mui/material'
import Grid from "@mui/material/Grid2"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { setNotification } from '../../../globalState/notification/notificationSlice';
import { useDispatch } from 'react-redux';
import * as z from 'zod';
import { useStackingMutation } from '../../../globalState/walletState/walletStateApis';
import { useGetUserProfileQuery } from "../../../globalState/settings/profileSettingApi"

const walletDepositeSchema = z.object({
    amount: z.string().min(1, "Please type your deposit amount")
})

function Trade() {

    const { data, refetch } = useGetUserProfileQuery()

    const userData = data?.data

    const dispatch = useDispatch()

    const defaultValues = {
        amount: ""
    };


    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(walletDepositeSchema),
        defaultValues
    });

    const [stacking, { isLoading }] = useStackingMutation()

    const onSubmit = async (data) => {

        try {
            const response = await stacking(data).unwrap();

            if (response?.status) {
                reset(defaultValues);
                refetch()
                dispatch(setNotification({ open: true, message: response?.message, severity: "success" }));
            }
        } catch (error) {
            if (error?.data) {
                dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to submit. Please try again later.", severity: "error" }));
            }
        }
    };

    return (
        <Container sx={{ mt: "100px" }}>
            <Typography variant="h4" fontWeight="bold" mb={"2rem"}>Trade</Typography>
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
                            <Stack
                                sx={{
                                    flexDirection: "row",
                                    justifyContent: "space-between"
                                }}
                            >
                                <InputLabel sx={{ mb: ".5rem" }}>Amount to trade</InputLabel>
                                <InputLabel sx={{ mb: ".5rem" }}>Trade balance : {userData?.TRADEBalance || 0}</InputLabel>
                            </Stack>
                            <TextField
                                {...register("amount", { require: true })}
                                size='small' fullWidth placeholder="Amount to trade in" variant="outlined" />
                            {errors.amount && <Typography color="error">{errors.amount.message}</Typography>}
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
    )
}

export default Trade;