import { Card, CardContent, Stack, Typography, Container } from '@mui/material';
import Grid from "@mui/material/Grid2"
import { transferToTLCPackageWalletBalancedata } from "./transferToTLCPackageWalletBalanceData"


function TransferToTLCPackageWalletBalance() {
    return (
        <Stack mt={"2rem"}>
            <Container>
                <Grid container size={12} spacing={4}>
                    {
                        transferToTLCPackageWalletBalancedata.map((data, i) => (
                            <Grid item size={{ xs: 12, md: 4 }}>
                                <Card
                                    sx={{
                                        boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                                        borderRadius: "2rem",
                                        padding: "1.2rem",
                                        height: "100%"
                                    }}
                                >
                                    <CardContent key={i}>
                                        <Typography fontSize={"1.2rem"}>{data.walletHeading}</Typography>
                                        <Typography variant='h4' sx={{ fontWeight: "bold" }}>{data.walletBalance}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Stack>
    )
}

export default TransferToTLCPackageWalletBalance;