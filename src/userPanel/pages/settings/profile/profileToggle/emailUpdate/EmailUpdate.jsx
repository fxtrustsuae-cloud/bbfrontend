import { Button, Stack } from '@mui/material'
import { TextField, InputLabel, OutlinedInput, IconButton, InputAdornment } from '@mui/material'
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from "@mui/material/Grid2"

function EmailUpdate() {

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);


  return (
    <Stack mt={"2rem"} gap={"2rem"}>
      <Grid container size={12} spacing={3}>
        <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
          <InputLabel sx={{ mb: ".5rem" }}>Email</InputLabel>
          <TextField size='small' fullWidth placeholder="hello@example.com" variant="outlined" />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
          <InputLabel sx={{ mb: ".5rem" }}>Transaction Password</InputLabel>
          <OutlinedInput
            size='small'
            placeholder='********'
            fullWidth
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
          <InputLabel sx={{ mb: ".5rem" }}>One Time Password</InputLabel>
          <OutlinedInput
            size='small'
            placeholder='Enter OTP'
            fullWidth
            endAdornment={
              <InputAdornment position="end">
                <Button
                  size='small'
                  variant='contained'
                  edge="end"
                  sx={{
                    height: "100%",
                    boxShadow: "none",
                    bgcolor: "primary.main",
                    color: "white",
                    textTransform: "capitalize",
                    "&:hover": { boxShadow: "none" }
                  }}
                >
                  OTP
                </Button>
              </InputAdornment>
            }
          />
        </Grid>
      </Grid>
      <Button
        size='small'
        variant='contained'
        sx={{
          textTransform: "capitalize",
          boxShadow: "none",
          bgcolor: "primary.main",
          color: "white",
          alignSelf: "flex-start",
          "&:hover": {
            boxShadow: "none"
          }
        }}
      >Update</Button>
    </Stack>
  )
}

export default EmailUpdate;