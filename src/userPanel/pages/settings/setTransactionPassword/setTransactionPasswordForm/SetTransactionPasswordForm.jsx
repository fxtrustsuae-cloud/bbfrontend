import { Button, Card, Container, Divider, Stack, Typography, TextField, InputLabel } from '@mui/material'
import Grid from "@mui/material/Grid2"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { setTransactionPasswordFormSchema } from './setTransactionPasswordFormSchema'
import { useSetTransactionPasswordMutation } from '../../../../../globalState/walletState/walletStateApis'
import { useDispatch } from 'react-redux'
import { setNotification } from '../../../../../globalState/notification/notificationSlice'


function SetTransactionPasswordForm() {

  const dispatch = useDispatch()

  const defaultValues = {
    password: "",
    cnfPassword: ""
  };

  const { register, handleSubmit, setError, reset, formState: { errors } } = useForm({
    resolver: zodResolver(setTransactionPasswordFormSchema),
    defaultValues
  });


  const [setTransactionPassword] = useSetTransactionPasswordMutation()


  const onSubmit = async (data) => {
    try {

      const response = await setTransactionPassword(data).unwrap()

      if (response?.status) {
        reset(defaultValues)
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
    <Stack>
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
            alignItems={"flex-start"}
            component={"form"}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid container size={12} spacing={3}>
              <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                <InputLabel sx={{ mb: ".5rem" }}>Password</InputLabel>
                <TextField
                  {...register("password", { required: true })}
                  size='small'
                  fullWidth
                  placeholder="********"
                  variant="outlined"
                />
                {errors.password && <Typography color="error">{errors.password.message}</Typography>}
              </Grid>
              <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                <InputLabel sx={{ mb: ".5rem" }}>Confirm Password</InputLabel>
                <TextField
                  {...register("cnfPassword", { required: true })}
                  size='small'
                  fullWidth
                  placeholder="Confirm Password"
                  variant="outlined"
                />
                {errors.cnfPassword && <Typography color="error">{errors.cnfPassword.message}</Typography>}
              </Grid>
              <Grid>
                <Typography color='#d32f2f'>Note: Password must be at least 8 characters and must contain at least one digit, one lowercase letter, one uppercase letter, and one special character*</Typography>
              </Grid>
            </Grid>
            <Button
              type='submit'
              size='small'
              variant='contained'
              sx={{
                textTransform: "capitalize",
                objectFit: "contain",
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

export default SetTransactionPasswordForm;