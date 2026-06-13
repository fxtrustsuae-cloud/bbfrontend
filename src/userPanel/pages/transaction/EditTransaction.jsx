import { Button, Stack, Typography, InputLabel } from '@mui/material'
import Grid from "@mui/material/Grid2"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { setNotification } from '../../../globalState/notification/notificationSlice';
import { useDispatch } from 'react-redux';
import * as z from 'zod';
import Selector from "../../userPanelComponent/Selector"
import { useParams } from 'react-router-dom';
import { useEditTransactionMutation } from '../../../globalState/admin/adminStateApis';

export const editTransactionSchema = z.object({
    status: z.string().trim().min(1, "Please type transaction status"),
})

const STATUS_OPTIONS = ["COMPLETED", "REJECTED"]


function EditTransaction({ data: transactionId }) {

    const dispatch = useDispatch()

    const defaultValues = {
        status: "",
    };

    const { register, setValue, handleSubmit, watch, reset, formState: { errors } } = useForm({
        resolver: zodResolver(editTransactionSchema),
        defaultValues
    });

    const [editTransaction, { isLoading }] = useEditTransactionMutation()

    const onSubmit = async (data) => {

        try {
            const response = await editTransaction({ trxId: transactionId, status: data.status }).unwrap();

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
        <Stack>
            <Typography variant="h6" fontWeight="bold" mb={"1.2rem"}>Edit transaction</Typography>
            <Stack
                gap={"2rem"}
                component={"form"}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Grid container size={12} spacing={2}>
                    <Grid item size={{ xs: 12, sm: 6 }}>
                        <InputLabel sx={{ mb: ".5rem" }}>Status *</InputLabel>
                        <Selector
                            items={STATUS_OPTIONS}
                            value={watch("status")}
                            shouldBeFullWidth={true}
                            onChange={(e) => setValue("status", e.target.value, { shouldValidate: true })}
                        />
                        {errors.status && <Typography color="error" fontSize={"13px"}>{errors.status.message}</Typography>}
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
        </Stack>
    )
}

export default EditTransaction;