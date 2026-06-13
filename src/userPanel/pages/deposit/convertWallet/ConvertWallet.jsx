import { Card, Container, Typography, Button } from "@mui/material"

function ConvertWallet() {
    return (
        <Container sx={{ mt: "100px" }}>
            <Typography variant="h4" fontWeight="bold" mb={"2rem"}>Convert wallet</Typography>
            <Card
                sx={{
                    padding: { xs: "1rem", sm: "2rem" },
                    borderRadius: "2rem",
                    boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                }}
            >
                <Typography>Avaliable Rewards: </Typography>
                <Button
                    variant='contained'
                    size='small'
                    type='submit'
                    // disabled={isLoading}
                    sx={{
                        textTransform: "capitalize",
                        width: "5rem",
                        boxShadow: "none",
                        bgcolor: "primary.main",
                        fontSize: "1rem",
                        color: "white",
                        mt: "1.5rem",
                        "&:hover": {
                            boxShadow: "none"
                        }
                    }}
                >Convert</Button>
            </Card>
        </Container>
    )
}

export default ConvertWallet;