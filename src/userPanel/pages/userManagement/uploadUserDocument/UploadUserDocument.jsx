import { Button, Card, Divider, Stack, Typography, InputLabel, Container } from '@mui/material';
import Grid from "@mui/material/Grid2";
// import SearchableSelector from '../../../components/SearchableSelector';
import SearchableSelector from "../../../userPanelComponent/SearchableSelector";
import FileUploadTextArea from '../../../userPanelComponent/FileUploadTextArea';
import { uploadUserDocumentSchema } from './uploadUserDocumentSchema';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// import { useUploadDocumentMutation } from '../../../globalState/userManagementState/userManagementStateApis';
// import { setNotification } from '../../../globalState/notification/notificationSlice';
import { setNotification } from '../../../../globalState/notification/notificationSlice';
import { useState } from 'react';
import { useUserListQuery } from '../../../../globalState/admin/adminStateApis';


function UploadUserDocument() {

    const dispatch = useDispatch();
    const [searchClient, setSearchClient] = useState("");

    const { data: clientList, isLoading: userListLoading } = useUserListQuery({
        page: 1,
        sizePerPage: 5,
        search: searchClient,
    }, { skip: searchClient.length < 3 });

    const clientListData = searchClient.length >= 3 ? (clientList?.data?.usersList || []) : [];

    const defaultValues = {
        userId: null,
        poi: [],
        poa: [],
        extraDocs: []
    };

    const { handleSubmit, reset, watch, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(uploadUserDocumentSchema),
        defaultValues,
    });

    const [uploadDocument, { isLoading: uploadDocumentLoading }] = useUploadDocumentMutation();

    const onSubmit = async (data) => {

        try {
            const response = await uploadDocument(data).unwrap();
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
            <Typography sx={{ fontSize: "2rem", fontWeight: "700", mb: "2rem" }}>Upload User Documents</Typography>
            <Card
                sx={{
                    boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                    borderRadius: "1.2rem",
                    padding: { xs: "1rem", md: "2rem" }
                }}
                component={"form"}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Typography mx={{ xs: "1rem", md: "0" }}>Fill Details</Typography>
                <Divider sx={{ my: "1.2rem" }} />
                <Grid container size={12} spacing={2}>
                    <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                        <InputLabel sx={{ mb: ".5rem" }}>Select Client *</InputLabel>
                        <SearchableSelector
                            width="100%"
                            items={clientListData.map((item) => ({
                                value: item.id,
                                name: `${item.name} (${item.email})`
                            }))}
                            value={watch("userId")}
                            onChange={(val) => setValue("userId", val, { shouldValidate: true })}
                            onSearchChange={(val) => setSearchClient(val)}
                            isLoading={userListLoading}
                            shouldBeFullwidth={true}
                        />
                        <InputLabel sx={{ fontSize: "12px" }}>Please enter 3 or more characters</InputLabel>
                        {errors.userId && <Typography color="error" fontSize={"14px"}>{errors.userId.message}</Typography>}
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                        <InputLabel sx={{ mb: ".5rem" }}>Proof of Identity (POI) *</InputLabel>
                        <FileUploadTextArea
                            onChange={(fileData) => setValue("poi", fileData, { shouldValidate: true })}
                            extentionType={["image/jpeg", "image/png", "image/jpg", "application/pdf"]}
                            acceptType={"image/jpeg,image/png,application/pdf"}
                            multiple={false}
                        />
                        {errors.poi && <Typography color="error" fontSize={"14px"}>{errors.poi.message}</Typography>}
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                        <InputLabel sx={{ mb: ".5rem" }}>Proof of Address (POA) *</InputLabel>
                        <FileUploadTextArea
                            onChange={(fileData) => setValue("poa", fileData, { shouldValidate: true })}
                            extentionType={["image/jpeg", "image/png", "image/jpg", "application/pdf"]}
                            acceptType={"image/jpeg,image/png,application/pdf"}
                            multiple={false}
                        />
                        {errors.poa && <Typography color="error" fontSize={"14px"}>{errors.poa.message}</Typography>}
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                        <InputLabel sx={{ mb: ".5rem" }}>Extra fiels</InputLabel>
                        <FileUploadTextArea
                            onChange={(files) => setValue("extraDocs", files, { shouldValidate: true })}
                            extentionType={["image/jpeg", "image/png", "image/jpg", "application/pdf"]}
                            acceptType={"image/jpeg,image/png,application/pdf"}
                            multiple={true}
                        />
                        {errors.extraDocs && <Typography color="error">{errors.extraDocs.message}</Typography>}
                    </Grid>
                </Grid>
                <Button
                    variant='contained'
                    type='submit'
                    disabled={uploadDocumentLoading}
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
            </Card>
        </Stack >
    )
}

export default UploadUserDocument;