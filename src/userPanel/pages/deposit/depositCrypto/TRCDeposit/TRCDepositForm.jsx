import {
    Button, Card, Divider, Stack,
    Typography, TextField, InputLabel, Container
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useDispatch, useSelector } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { initiateSocketConnection } from './TRCDepositENV';
import TRCDepositQR from './TRCDepositQR';
import { useState } from 'react';
import Loading from "../../../../userPanelComponent/Loading"
import { setPaymentLoading } from '../../../../../globalState/paymentState/paymentStateSlice';
import Selector from '../../../../userPanelComponent/Selector';


const formSchema = z.object({
    network: z.string().trim().min(1, 'Please type network type'),
    amount: z.coerce.number().positive('Amount must be greater than 0'),
    walletType: z.string().trim().min(1, 'Please select wallet type')
});


const networkType = [
    { label: "BINANCE BEP20", value: "BINANCE" }
];


const walletType = [
    { label: "Trade wallet", value: "TRADE" },
    { label: "Coin wallet", value: "COIN" }
];


function TRCDepositForm() {

    const dispatch = useDispatch()

    const { paymentLoading } = useSelector(state => state.payment)

    const { token } = useSelector(state => state.auth);

    const defaultValues = {
        network: 'BINANCE',
        amount: '',
        walletType: "TRADE"
    }

    const {
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues
    });

    const onSubmit = async (data) => {

        dispatch(setPaymentLoading(true))

        try {

            await initiateSocketConnection({
                token,
                network: data.network.toUpperCase(),
                amount: parseFloat(data.amount),
                walletType: data.walletType,
                dispatch
            });

            // if (paymentLoading) {
            //     reset(defaultValues)
            // }
            reset();

        } catch (err) {
            setError(err.message || 'An error occurred during payment processing');
        }
    };

    return (
        <Stack>
            {/* <Container> */}
            <Card
                sx={{
                    boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                    borderRadius: "1.2rem",
                    padding: { xs: "1rem", md: "2rem" },
                }}
                component={"form"}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Typography mx={{ xs: "1rem", md: "0" }}>Fill Details</Typography>
                <Divider sx={{ my: "1.2rem" }} />
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                        <InputLabel sx={{ mb: ".5rem" }}>Deposit wallet *</InputLabel>
                        <Selector
                            shouldBeDisabled={paymentLoading}
                            items={walletType}
                            shouldBeFullWidth={true}
                            showDefaultOption={false}
                            value={watch("walletType")}
                            onChange={(e) => setValue("walletType", e.target.value, { shouldValidate: true })}
                        />
                        {errors.wallet && <Typography color="error" fontSize={"13px"}>{errors.wallet.message}</Typography>}
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                        <InputLabel sx={{ mb: ".5rem" }}>Select Network *</InputLabel>
                        <Selector
                            items={networkType}
                            // value={watch("network")}
                            value={"BINANCE"}
                            shouldBeDisabled={true}
                            shouldBeFullWidth={true}
                            onChange={(e) => setValue("network", e.target.value, { shouldValidate: true })}
                        />
                        {errors.network && <Typography color="error" fontSize={"14px"}>{errors.network.message}</Typography>}
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                        <InputLabel sx={{ mb: ".5rem" }}>Amount in USD *</InputLabel>
                        <TextField
                            size='small'
                            disabled={paymentLoading}
                            fullWidth
                            placeholder="Enter Amount"
                            variant="outlined"
                            type="number"
                            {...register("amount")}
                        />
                        {errors.amount && <Typography color="error" fontSize={"14px"}>{errors.amount.message}</Typography>}
                    </Grid>
                </Grid>
                <Button
                    type='submit'
                    variant='contained'
                    disabled={paymentLoading}
                    sx={{
                        textTransform: "capitalize",
                        boxShadow: "none",
                        bgcolor: "primary.main",
                        color: "white",
                        mt: '1.5rem',
                        "&:hover": {
                            boxShadow: "none",
                        },
                    }}
                >
                    Submit
                </Button>
            </Card>
            {/* {
                    !depositQRData
                        ?
                        paymentLoading &&
                        <Loading />
                        :
                        <TRCDepositQR />
                } */}
            {/* </Container> */}
        </Stack>
    );
}

export default TRCDepositForm;