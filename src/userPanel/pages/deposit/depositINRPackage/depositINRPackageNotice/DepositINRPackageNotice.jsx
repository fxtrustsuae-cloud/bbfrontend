import { Card, Container, Stack, Typography } from '@mui/material'
import { depositINRPackageNoticeData } from './depositINRPackageNoticeData';


function DepositINRPackageNotice() {

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
                        backgroundImage: `url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvam9iNTQ2LWt1bC0wMi5qcGc.jpg")`,
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
                        <Typography lineHeight={0}><depositINRPackageNoticeData.icon sx={{ fontSize: "2.5rem", mb: "0" }} /></Typography>
                    </Card>
                    <Stack color={"white"}>
                        <Typography variant='h5' fontWeight={"bold"}>{depositINRPackageNoticeData.heading}</Typography>
                        <Typography>{depositINRPackageNoticeData.contant}</Typography>
                    </Stack>
                </Card>
            </Container>
        </Stack>
    )

}

export default DepositINRPackageNotice;