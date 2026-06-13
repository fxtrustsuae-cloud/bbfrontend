import { Box, Button, Container, Skeleton, Stack, Typography, useMediaQuery } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Grid from "@mui/material/Grid2"
import { useGetDocumentDataQuery } from '../../globalState/settings/profileSettingApi';
import StepCircle from './StepCircle';

function CompleteProfile({ userData, userDataLoading }) {

    const { token } = useSelector(state => state.auth)

    const userName = userData?.data?.name

    const { data, isLoading } = useGetDocumentDataQuery(undefined, {
        skip: !token,
        refetchOnMountOrArgChange: true,
    })

    const documentUploaded = data?.data?.status


    const matches = useMediaQuery((theme) => theme.breakpoints.up('md'));

    return (
        <Stack sx={{ bgcolor: "#caebe7", mb: "2rem", py: "15px", mt: "65px" }}>
            <Container>
                <Grid container size={12} spacing={2}>
                    <Grid
                        sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                        size={{ xs: 12, md: 8 }}
                    >
                        <StepCircle IconComponent={AccountCircleOutlinedIcon} />
                        <Typography color='black'>{userDataLoading ? <Skeleton /> : userName || ""} Please confirm your identity</Typography>
                    </Grid>
                    <Grid
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: { xs: "center", md: "flex-end" },
                            gap: "1rem"
                        }}
                        size={{ xs: 12, md: 4 }}
                    >
                        {/* <Button
                            fullWidth={!matches}
                            variant='contained'
                            sx={{
                                textTransform: "none",
                                boxShadow: "none",
                                bgcolor: "#f3efe5",
                                color: "black",
                                "&:hover": {
                                    boxShadow: "none"
                                }
                            }}
                        >Learn more</Button> */}
                        <Button
                            fullWidth={!matches}
                            component={Link}
                            to={"/dashboard/kyc"}
                            variant='contained'
                            sx={{
                                textTransform: "none",
                                boxShadow: "none",
                                color: "white",
                                "&:hover": {
                                    boxShadow: "none"
                                }
                            }}
                        >
                            {isLoading ? <Skeleton /> : documentUploaded === "PENDING" ? "Pending" : "Complete profile"}
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Stack>
    )
}

export default CompleteProfile;