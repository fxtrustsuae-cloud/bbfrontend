import { Button, Card, Container, Divider, Stack, Typography, Checkbox, TextField, InputLabel } from '@mui/material'
import Grid from "@mui/material/Grid2"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import dayjs from 'dayjs';
import Selector from "../../../../userPanelComponent/Selector"
import FileUploadTextArea from '../../../../userPanelComponent/FileUploadTextArea';


function DepositCryptoForm() {

  const [value, setValue] = useState(dayjs('2022-04-17'));

  return (
    <Stack mt={"2rem"}>
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
          <Stack gap={"2rem"}>
            <Grid container size={12} spacing={3}>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <InputLabel sx={{ mb: ".5rem" }}>Select Currency Type</InputLabel>
                <Selector items={["USDT-TRC20", "USDT-BEP20"]} shouldBeFullWidth={true} />
              </Grid>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <InputLabel sx={{ mb: ".5rem" }}>USDT to be Send</InputLabel>
                <TextField fullWidth placeholder="USDT to be Send" variant="outlined" />
              </Grid>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <InputLabel sx={{ mb: ".5rem" }}>Amount($)</InputLabel>
                <TextField fullWidth placeholder="Enter amount" variant="outlined" />
              </Grid>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <InputLabel sx={{ mb: ".5rem" }}>Transaction Hash</InputLabel>
                <TextField fullWidth placeholder="Enter Transaction Hash" variant="outlined" />
              </Grid>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <InputLabel sx={{ mb: ".5rem" }}>Payment Deposit Date</InputLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={{ width: "100%" }}
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <InputLabel sx={{ mb: ".5rem" }}>Browse Slip</InputLabel>
                <FileUploadTextArea />
                <Typography mt={".5rem"} color='red'>Payment Confirmation Notice:</Typography>
                <Typography color='red'>Screenshots from BscScan.com and TronScan.org will not be accepted as proof of payment. Kindly upload a screenshot directly from your wallet or exchange showing the transaction details.</Typography>
              </Grid>
              <Grid item sx={{ display: "flex", alignItems: "center" }} size={12}>
                <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, margin: "0" }} />
                <Typography>Check me out</Typography>
              </Grid>
            </Grid>
            <Button
              variant='contained'
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
    </Stack>
  )
}

export default DepositCryptoForm;