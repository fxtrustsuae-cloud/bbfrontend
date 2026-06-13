import { Box, Button, Card, Stack, Typography } from '@mui/material';
import { aboutUserData } from './aboutUserData';
import { Divider } from '@mui/material';
import { useSelector } from 'react-redux';

function AboutUser() {

    const { activeTheme } = useSelector((state) => state.themeMode);

    return (
        <Stack>
            <Card
                sx={{
                    p: { xs: "1rem", sm: "2rem" },
                    borderRadius: "2rem",
                    bgcolor: activeTheme === "dark" ? "" : "#ebe8e8"
                }}
            >
                <Typography fontSize={"20px"} fontWeight={"500"} mb={"2rem"} color='primary.main'>About Me</Typography>
                {
                    Object.entries(aboutUserData).map(([keys, values]) => (
                        <Stack gap={"1rem"} key={keys}>
                            <Box
                                size={6}
                                display={"flex"}
                                justifyContent={"space-between"}
                                flexDirection={{ xs: "column", sm: "row" }}
                            >
                                <Typography fontWeight={"bold"}>{keys}:</Typography>
                                <Typography color="textSecondary">{values}</Typography>
                            </Box>
                            <Divider sx={{ mb: "1rem" }} />
                        </Stack>
                    ))
                }
                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        py: ".7rem",
                        boxShadow: "none",
                        textTransform: "capitalize",
                        fontSize: "1rem",
                        borderRadius: "1rem",
                        bgcolor: "primary.main",
                        color: "white",
                        "&:hover": {
                            boxShadow: "none",
                        }
                    }}
                >Click to View Monthly Closing Report</Button>
            </Card>
        </Stack>
    )
}

export default AboutUser;