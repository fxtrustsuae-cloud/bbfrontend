import { Button, Card, Checkbox, Stack, Typography, Divider, Container, useMediaQuery, TextField, InputLabel, OutlinedInput, InputAdornment } from '@mui/material'
import Grid from "@mui/material/Grid2"
import Selector from "../../../../../../userPanelComponent/Selector"

function TradingToCompoundingForm() {

    const matches = useMediaQuery('(max-width:800px)');

    return (
        <Stack mt={"2rem"}>
            <Container>
                <Card
                    sx={{
                        boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                        borderRadius: "2rem",
                        padding: { xs: "1rem", md: "2rem" }
                    }}
                >
                    <Typography mx={{ xs: "1rem", md: "0" }}>Fill Details</Typography>
                    <Divider sx={{ my: "1.2rem" }} />
                    <Grid container size={12} spacing={3}>
                        <Grid item size={{ xs: 12, sm: 6 }}>
                            <InputLabel sx={{ mb: ".5rem" }}>Select Trading Package($)</InputLabel>
                            <Selector items={["183", "100", "217"]} shouldBeFullWidth={true} />
                        </Grid>
                        <Grid item size={{ xs: 12, sm: 6 }}>
                            <InputLabel sx={{ mb: ".5rem" }}>Compounding Period</InputLabel>
                            <Selector items={["1 Year", "2 Year", "3 Year", "5 Year"]} shouldBeFullWidth={true} />
                        </Grid>
                        <Grid item size={{ xs: 12, sm: 6 }}>
                            <InputLabel sx={{ mb: ".5rem" }}>Compounding MT5 Ac No.</InputLabel>
                            <TextField fullWidth placeholder="Enter Compounding MT5 Ac No." variant="outlined" />
                        </Grid>
                        <Grid item size={{ xs: 12, sm: 6 }}>
                            <InputLabel sx={{ mb: ".5rem" }}>One Time Password</InputLabel>
                            <OutlinedInput
                                placeholder={matches ? "Enter OTP" : 'Enter One Time Password'}
                                fullWidth
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Button
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
                                            {matches ? "OTP" : "Send OTP"}
                                        </Button>
                                    </InputAdornment>
                                }
                            />
                        </Grid>
                        <Grid sx={{ display: "flex", alignItems: "center" }}>
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
                            color: "white",
                            mt: '1.5rem',
                            "&:hover": {
                                boxShadow: "none"
                            }
                        }}
                    >Submit</Button>
                </Card>
            </Container>
        </Stack>
    )
}

export default TradingToCompoundingForm;