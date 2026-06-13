import { Button, Card, Divider, Stack, Typography, TextField, InputLabel, Container } from '@mui/material'
import Grid from "@mui/material/Grid2"
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useCreateSupportTicketMutation } from '../../../../globalState/supportState/supportStateApis';
import { newTicketSchema } from './newTicketSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Selector from '../../../userPanelComponent/Selector';
import { setNotification } from '../../../../globalState/notification/notificationSlice';


function NewTicket() {

    const dispatch = useDispatch();

    const defaultValues = {
        subject: "",
        priority: "",
        message: ""
    };

    const { register, handleSubmit, reset, watch, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(newTicketSchema),
        defaultValues,
    });

    const [createSupportTicket, { isLoading }] = useCreateSupportTicketMutation();

    const onSubmit = async (data) => {
        try {
            const response = await createSupportTicket(data).unwrap();
            if (response?.status) {
                dispatch(setNotification({ open: true, message: response?.message, severity: "success" }));
                reset(defaultValues);
            }
        } catch (error) {
            if (!error?.data?.status) {
                dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to submit. Please try again later.", severity: "error" }));
            }
        }
    };

    return (
        <Stack>
            {/* <Container> */}
                <Typography variant='h5' fontWeight={"700"} fontSize={"1.8rem"} mb={"2rem"}>Create New Ticket</Typography>
                <Card
                    sx={{
                        boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                        borderRadius: "1.2rem",
                        padding: { xs: "1rem", md: "2rem" }
                    }}
                    component={"form"}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Typography mx={{ xs: "1rem", md: "0" }} variant='body2'>Fill Details</Typography>
                    <Divider sx={{ my: "1.2rem" }} />
                    <Grid container size={12} spacing={2}>
                        <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                            <InputLabel sx={{ mb: ".5rem" }}>Title *</InputLabel>
                            <TextField {...register("subject", { required: true })} size='small' fullWidth placeholder="Enter Title" variant="outlined" />
                            {errors.subject && <Typography color="error" fontSize={"14px"}>{errors.subject.message}</Typography>}
                        </Grid>
                        <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                            <InputLabel sx={{ mb: ".5rem" }}>Priority *</InputLabel>
                            <Selector
                                items={["LOW", "MEDIUM", "HIGH"]}
                                value={watch("priority")}
                                onChange={(e) => setValue("priority", e.target.value, { shouldValidate: true })}
                                shouldBeFullWidth={true}
                            />
                            {errors.priority && <Typography color="error" fontSize={"14px"}>{errors.priority.message}</Typography>}
                        </Grid>
                        <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                            <InputLabel sx={{ mb: ".5rem" }}>Describe your problem *</InputLabel>
                            <TextField {...register("message", { required: true })} size='small' multiline fullWidth placeholder="Describe your problem" variant="outlined" />
                            {errors.message && <Typography color="error" fontSize={"14px"}>{errors.message.message}</Typography>}
                        </Grid>
                    </Grid>
                    <Button
                        variant='contained'
                        type='submit'
                        disabled={isLoading}
                        sx={{
                            textTransform: "capitalize",
                            width: "5rem",
                            boxShadow: "none",
                            bgcolor: "primary.main",
                            color: "white",
                            mt: '1.5rem',
                            "&:hover": {
                                boxShadow: "none"
                            }
                        }}
                    >Submit</Button>
                </Card>
            {/* </Container> */}
        </Stack >
    )
}

export default NewTicket;