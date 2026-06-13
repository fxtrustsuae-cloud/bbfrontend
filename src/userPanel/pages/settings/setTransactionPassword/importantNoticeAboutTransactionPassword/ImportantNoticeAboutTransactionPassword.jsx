import { Card, Container, Stack, Typography } from '@mui/material'
import { importantNoticeAboutTransactionPasswordData } from './importantNoticeAboutTransactionPasswordData';


function ImportantNoticeAboutTransactionPassword() {

    const noticeBanner = "/noticeBanner.jpg"

    return (
        <Stack>
            <Container>
                <Card
                    sx={{
                        p: "2rem",
                        borderRadius: "2rem",
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: { xs: "flex-start", md: "center" },
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
                        <Typography lineHeight={0}><importantNoticeAboutTransactionPasswordData.icon sx={{ fontSize: "2.5rem", mb: "0" }} /></Typography>
                    </Card>
                    <Stack color={"white"}>
                        <Typography variant='h5' fontWeight={"bold"}>{importantNoticeAboutTransactionPasswordData.heading}</Typography>
                        <Typography>{importantNoticeAboutTransactionPasswordData.contant}</Typography>
                    </Stack>
                </Card>
            </Container>
        </Stack>
    )
}

export default ImportantNoticeAboutTransactionPassword;