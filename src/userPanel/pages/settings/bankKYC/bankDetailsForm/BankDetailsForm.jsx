// import { Button, Card, Container, Divider, Stack, Typography, Checkbox, TextField, InputLabel, OutlinedInput, IconButton, InputAdornment } from '@mui/material'
// import { useState } from 'react';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import Grid from "@mui/material/Grid2"
// import { allIndianBanks } from './bankDetailsData';
// import SearchableDropdown from '../../../../userPanelComponent/SearchableDropdown';
// import { bankDetailsFormSchema } from './bankDetailsFormSchema';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import Selector from "../../../../userPanelComponent/Selector"
// import { useBankKYCMutation } from '../../../../../globalState/settings/profileSettingApi';
// import { useDispatch } from 'react-redux';
// import { setNotification } from '../../../../../globalState/notification/notificationSlice';


// function BankDetailsForm() {

//     const dispatch = useDispatch()

//     const [showPassword, setShowPassword] = useState(false);

//     const handleClickShowPassword = () => setShowPassword((show) => !show);

//     const defaultValues = {
//         holderName: "",
//         bankName: "",
//         accountNo: "",
//         ifscCode: "",
//         branchName: "",
//         accountType: "",
//         panNumber: ""
//     };


//     const { register, handleSubmit, watch, setError, reset, setValue, formState: { errors } } = useForm({
//         resolver: zodResolver(bankDetailsFormSchema),
//         defaultValues
//     });

//     const [bankKYC, { isLoading }] = useBankKYCMutation()

//     const onSubmit = async (data) => {

//         try {
//             const response = await bankKYC(data).unwrap();

//             if (response?.status) {
//                 reset(defaultValues);
//                 dispatch(setNotification({ open: true, message: response?.message, severity: "success" }));
//             }
//         } catch (error) {
//             if (error?.data?.data) {
//                 Object.entries(error.data.data).forEach(([field, message]) => {
//                     setError(field, { type: "server", message });
//                 });
//             } else {
//                 dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to submit. Please try again later.", severity: "error" }));
//             }
//         }
//     };


//     return (
//         <Stack mt={"2rem"}>
//             <Container>
//                 <Card
//                     sx={{
//                         padding: { xs: "1rem", sm: "2rem" },
//                         borderRadius: "2rem",
//                         boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
//                     }}
//                 >
//                     <Typography variant='h6' m={{ xs: "1rem", sm: "0" }}>Add New Bank Details to Receive Profits</Typography>
//                     <Divider sx={{ my: "1.2rem" }} />
//                     <Stack
//                         gap={"2rem"}
//                         component={"form"}
//                         onSubmit={handleSubmit(onSubmit)}
//                     >
//                         <Grid container size={12} spacing={3}>
//                             <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
//                                 <InputLabel sx={{ mb: ".5rem" }}>A/c holder Name</InputLabel>
//                                 <TextField
//                                     {...register("holderName", { required: true })}
//                                     size='small'
//                                     fullWidth
//                                     placeholder="A/c holder Name"
//                                     variant="outlined"
//                                 />
//                                 {errors.holderName && <Typography color="error">{errors.holderName.message}</Typography>}
//                             </Grid>
//                             <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
//                                 <InputLabel sx={{ mb: ".5rem" }}>Bank Name</InputLabel>
//                                 <SearchableDropdown
//                                     options={allIndianBanks}
//                                     value={watch("bankName")}
//                                     onChange={(selectedBank) => setValue("bankName", selectedBank, { shouldValidate: true })}
//                                     placeholder="Select Bank"
//                                 />
//                                 {errors.bankName && <Typography color="error">{errors.bankName.message}</Typography>}
//                             </Grid>
//                             <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
//                                 <InputLabel sx={{ mb: ".5rem" }}>A/c Number</InputLabel>
//                                 <TextField
//                                     {...register("accountNo", { required: true })}
//                                     size='small'
//                                     fullWidth
//                                     placeholder="A/c Number"
//                                     variant="outlined"
//                                 />
//                                 {errors.accountNo && <Typography color="error">{errors.accountNo.message}</Typography>}
//                             </Grid>
//                             <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
//                                 <InputLabel sx={{ mb: ".5rem" }}>IFSC</InputLabel>
//                                 <TextField
//                                     {...register("ifscCode", { required: true })}
//                                     size='small'
//                                     fullWidth
//                                     placeholder="IFSC"
//                                     variant="outlined"
//                                 />
//                                 {errors.ifscCode && <Typography color="error">{errors.ifscCode.message}</Typography>}
//                             </Grid>
//                             <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
//                                 <InputLabel sx={{ mb: ".5rem" }}>Account Type</InputLabel>
//                                 <Selector
//                                     items={["SAVING", "CURRENT"]}
//                                     value={watch("accountType")}
//                                     shouldBeFullWidth={true}
//                                     onChange={(selected) => setValue("accountType", selected.target.value, { shouldValidate: true })}
//                                 />
//                                 {errors.accountType && <Typography color="error">{errors.accountType.message}</Typography>}
//                             </Grid>
//                             <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
//                                 <InputLabel sx={{ mb: ".5rem" }}>Branch Name</InputLabel>
//                                 <TextField
//                                     {...register("branchName", { required: true })}
//                                     size='small'
//                                     fullWidth
//                                     placeholder="Branch Name"
//                                     variant="outlined"
//                                 />
//                                 {errors.branchName && <Typography color="error">{errors.branchName.message}</Typography>}
//                             </Grid>
//                             <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
//                                 <InputLabel sx={{ mb: ".5rem" }}>Pan No.</InputLabel>
//                                 <TextField
//                                     {...register("panNumber", { required: true })}
//                                     size='small'
//                                     fullWidth
//                                     placeholder="Pan No."
//                                     variant="outlined"
//                                 />
//                                 {errors.panNumber && <Typography color="error">{errors.panNumber.message}</Typography>}
//                             </Grid>
//                             {/* <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
//                                 <InputLabel sx={{ mb: ".5rem" }}>Transaction Password</InputLabel>
//                                 <OutlinedInput
//                                     // {...register("", { required: true })}
//                                     size='small'
//                                     placeholder='********'
//                                     fullWidth
//                                     type={showPassword ? 'text' : 'password'}
//                                     endAdornment={
//                                         <InputAdornment position="end">
//                                             <IconButton
//                                                 aria-label={
//                                                     showPassword ? 'hide the password' : 'display the password'
//                                                 }
//                                                 onClick={handleClickShowPassword}
//                                                 edge="end"
//                                             >
//                                                 {showPassword ? <VisibilityOff /> : <Visibility />}
//                                             </IconButton>
//                                         </InputAdornment>
//                                     }
//                                 />
//                             </Grid> */}
//                             {/* <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
//                                 <InputLabel sx={{ mb: ".5rem" }}>One Time Password</InputLabel>
//                                 <OutlinedInput
//                                     {...register("", { required: true })}
//                                     size='small'
//                                     placeholder="Enter OTP"
//                                     fullWidth
//                                     endAdornment={
//                                         <InputAdornment position="end">
//                                             <Button
//                                                 size='small'
//                                                 variant='contained'
//                                                 edge="end"
//                                                 sx={{
//                                                     height: "100%",
//                                                     boxShadow: "none",
//                                                     bgcolor: "primary.main",
//                                                     color: "white",
//                                                     textTransform: "capitalize",
//                                                     "&:hover": { boxShadow: "none" }
//                                                 }}
//                                             >
//                                                 OTP
//                                             </Button>
//                                         </InputAdornment>
//                                     }
//                                 />
//                             </Grid> */}
//                             {/* <Grid size={{ xs: 12 }} sx={{ display: "flex", alignItems: "center" }}>
//                                 <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, margin: "0" }} />
//                                 <Typography>Check me out</Typography>
//                             </Grid> */}
//                         </Grid>
//                         <Button
//                             type='submit'
//                             size='small'
//                             variant='contained'
//                             disabled={isLoading}
//                             sx={{
//                                 textTransform: "capitalize",
//                                 boxShadow: "none",
//                                 bgcolor: "primary.main",
//                                 fontSize: "1rem",
//                                 color: "white",
//                                 alignSelf: 'flex-start',
//                                 "&:hover": {
//                                     boxShadow: "none"
//                                 }
//                             }}
//                         >Add</Button>
//                     </Stack>
//                 </Card>
//             </Container>
//         </Stack>
//     )
// }

// export default BankDetailsForm;