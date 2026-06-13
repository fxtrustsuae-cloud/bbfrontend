import { Button, Card, Divider, Stack, Typography, InputLabel, Container, TextField } from '@mui/material'
import Grid from "@mui/material/Grid2"
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEditDocumentMutation } from '../../../../globalState/admin/adminStateApis';
import { setNotification } from '../../../../globalState/notification/notificationSlice';
import { editDocumentSchema } from './editDocumentSchema';
import Selector from '../../../userPanelComponent/Selector';


const approveOrReject = [
    { name: "Approve", value: "1" },
    { name: "Reject", value: "0" }
]


function EditDocumentModalContent({ data, onClose }) {

    const documentId = data

    const dispatch = useDispatch();

    const defaultValues = {
        status: "",
        poi: "",
        poa: "",
        remark: ""
    };

    const { handleSubmit, reset, watch, setValue, register, formState: { errors } } = useForm({
        resolver: zodResolver(editDocumentSchema),
        defaultValues,
    });

    const [editDocument, { isLoading: editDocumentLoading }] = useEditDocumentMutation();

    const onSubmit = async (data) => {
        try {
            const response = await editDocument({ ...data, documentId }).unwrap();
            if (response?.status) {
                dispatch(setNotification({ open: true, message: response?.message, severity: "success" }));
                reset(defaultValues);
                onClose()
            }
        } catch (error) {
            if (!error?.data?.status) {
                dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to submit. Please try again later.", severity: "error" }));
            }
        }
    };

    return (
        <Stack>
            <Typography sx={{ fontSize: "2rem", fontWeight: "700", mb: "2rem" }}>Edit Documents</Typography>
            <Stack
                component={"form"}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Grid container size={12} spacing={2}>
                    <Grid size={{ xs: 12 }}>
                        <InputLabel sx={{ mb: ".5rem" }}>Proof of Identity (POI) *</InputLabel>
                        <Selector
                            value={watch("poi")}
                            items={approveOrReject}
                            onChange={(event) => setValue("poi", event.target.value, { shouldValidate: true })}
                            shouldBeFullWidth={true}
                            showDefaultOption={true}
                        />
                        {errors.poi && <Typography color="error" fontSize={"14px"}>{errors.poi.message}</Typography>}
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <InputLabel sx={{ mb: ".5rem" }}>Proof of Address (POA) *</InputLabel>
                        <Selector
                            value={watch("poa")}
                            items={approveOrReject}
                            onChange={(event) => setValue("poa", event.target.value, { shouldValidate: true })}
                            shouldBeFullWidth={true}
                            showDefaultOption={true}
                        />
                        {errors.poa && <Typography color="error" fontSize={"14px"}>{errors.poa.message}</Typography>}
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <InputLabel sx={{ mb: ".5rem" }}>Status *</InputLabel>
                        <Selector
                            value={watch("status")}
                            items={["APPROVED", "REJECTED"]}
                            onChange={(event) => setValue("status", event.target.value, { shouldValidate: true })}
                            shouldBeFullWidth={true}
                            showDefaultOption={true}
                        />
                        {errors.poa && <Typography color="error" fontSize={"14px"}>{errors.poa.message}</Typography>}
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <InputLabel sx={{ mb: ".5rem" }}>Remark *</InputLabel>
                        <TextField placeholder='Add remark' multiline fullWidth {...register("remark", { required: true })} />
                        {errors.remark && <Typography color="error" fontSize={"14px"}>{errors.remark.message}</Typography>}
                    </Grid>
                </Grid>
                <Button
                    variant='contained'
                    type='submit'
                    disabled={editDocumentLoading}
                    sx={{
                        textTransform: "capitalize",
                        boxShadow: "none",
                        color: "white",
                        mt: '1.5rem',
                        alignSelf: "self-start",
                        "&:hover": {
                            boxShadow: "none"
                        }
                    }}
                >Submit</Button>
            </Stack>
        </Stack >
    )
}

export default EditDocumentModalContent;