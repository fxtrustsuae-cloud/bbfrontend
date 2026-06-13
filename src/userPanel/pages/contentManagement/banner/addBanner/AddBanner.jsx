import { Button, Card, Container, Divider, Stack, Typography, TextField, InputLabel } from '@mui/material'
import Grid from "@mui/material/Grid2"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { setNotification } from '../../../../../globalState/notification/notificationSlice';
import { useDispatch } from 'react-redux';
import { addBannerSchema } from './addBannerSchema';
import FileUploadTextArea from '../../../../userPanelComponent/FileUploadTextArea';
import { useAddBannerMutation } from '../../../../../globalState/admin/adminStateApis';

function AddBanner() {

    const dispatch = useDispatch()

    const defaultValues = {
        title: "",
        image: null,
    };

    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(addBannerSchema),
        defaultValues
    });

    const [addFund, { isLoading }] = useAddBannerMutation()

    const onSubmit = async (data) => {

        try {
            const response = await addFund(data).unwrap();

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
        <Stack mt={"100px"}>
            <Typography variant="h5" fontWeight="bold" mb={"2rem"}>Add Banner</Typography>
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
                            <InputLabel sx={{ mb: ".5rem" }}>Title *</InputLabel>
                            <TextField {...register("title", { require: true })} size='small' fullWidth placeholder="Type banner title" variant="outlined" />
                            {errors.title && <Typography color="error">{errors.title.message}</Typography>}
                        </Grid>
                        <Grid item size={{ xs: 12, sm: 6 }}>
                            <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Image *</InputLabel>
                            </Stack>
                            <FileUploadTextArea
                                onChange={(fileData) => setValue("image", fileData, { shouldValidate: true })}
                                extentionType={['image/jpeg', 'image/jpg', 'image/png']}
                                acceptType={"image/jpeg,image/png,image/jpg"}
                            />
                            {errors.image && <Typography color="error" fontSize={"13px"}>{errors.image.message}</Typography>}
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
        </Stack>
    )
}

export default AddBanner;