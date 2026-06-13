import { Card, CardContent, Stack, Typography, Container } from '@mui/material';
import Grid from "@mui/material/Grid2"
import { transferToPackageWalletBalancedata } from "./transferToPackageWalletBalanceData"


function TransferToPackageWalletBalance() {
    return (
        <Stack mt={"2rem"}>
            <Container>
                <Grid container size={12} spacing={4}>
                    {
                        transferToPackageWalletBalancedata.map((data, i) => (
                            <Grid item size={{ xs: 12, md: 6 }}>
                                <Card
                                    sx={{
                                        boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                                        borderRadius: "2rem",
                                        padding: "1.2rem"
                                    }}
                                >
                                    <CardContent key={i} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Stack sx={{ flexDirection: "column", gap: ".5rem" }}>
                                            <Typography fontSize={"1.2rem"}>{data.walletHeading}</Typography>
                                            <Typography variant='h4' sx={{ fontWeight: "bold" }}>{data.walletBalance}</Typography>
                                        </Stack>
                                        <Typography><data.icon sx={{ fontSize: "5rem", color: "primary.main" }} /></Typography>
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

export default TransferToPackageWalletBalance;