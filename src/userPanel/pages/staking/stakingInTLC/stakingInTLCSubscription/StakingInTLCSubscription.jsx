import { Card, Container, Stack, Typography } from '@mui/material'
import { stakingInTLCSubscriptionData } from './stakingInTLCSubscriptionData';


function StakingInTLCSubscription() {

    const noticeBanner = "/noticeBanner.jpg"

    return (
        <Stack>
            <Container>
                <Card
                    sx={{
                        p: "2rem",
                        borderRadius: "2rem",
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: { xs: "start", sm: "center" },
                        gap: "2rem",
                        backgroundImage: `url(${noticeBanner})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "100%",
                        height: "auto",
                    }}
                >
                    <Card
                        sx={{
                            width: "7rem",
                            height: "5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "1rem",
                            bgcolor: "rgba(255, 255, 255, 0.1)",
                            boxShadow: "0",
                            color: "white"
                        }}
                    >
                        <Typography lineHeight={0}><stakingInTLCSubscriptionData.icon sx={{ fontSize: "2.5rem", mb: "0" }} /></Typography>
                    </Card>
                    <Stack color={"white"}>
                        <Typography variant='h5' fontWeight={"bold"}>{stakingInTLCSubscriptionData.heading}</Typography>
                        <Typography>{stakingInTLCSubscriptionData.contant}</Typography>
                    </Stack>
                </Card>
            </Container>
        </Stack>
    )
}

export default StakingInTLCSubscription;