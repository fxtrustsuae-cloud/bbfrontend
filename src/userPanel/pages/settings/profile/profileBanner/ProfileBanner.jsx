import { Card, Container, Stack, Typography, Avatar, Skeleton } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetUserProfileQuery } from '../../../../../globalState/settings/profileSettingApi';

function ProfileBanner() {

    const { data, isLoading } = useGetUserProfileQuery()

    const userData = data?.data

    const profileBannerData = {
        avatar: "/avatar.png",
        name: userData?.name,
        email: userData?.email,
    };

    return (
        <Stack>
            <Container>
                <Card
                    sx={{
                        borderRadius: '1rem',
                        p: "1rem",
                        boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                    }}
                >
                    <Stack height={"250px"}>
                        <img
                            src='/profileBanner/profileBannerImg.jpg'
                            alt='Profile Banner'
                            height={"100%"}
                            width={"100%"}
                            style={{ borderRadius: "1rem" }}
                        />
                    </Stack>

                    <Stack sx={{ mx: { xs: "1rem", sm: "2rem" }, mt: "-3rem" }}>
                        {Object.entries(profileBannerData).map(([key, value]) => (
                            <Stack key={key} sx={{ flexDirection: "row", alignItems: "center", gap: ".5rem", wordBreak: "break-word" }}>
                                {key === "avatar" ? (
                                    <Avatar
                                        alt="User Avatar"
                                        src={value}
                                        sx={{
                                            width: 100,
                                            height: 100,
                                            bgcolor: "primary.main",
                                            mb: ".5rem",
                                        }}
                                    />
                                ) : (
                                    <>
                                        <Typography fontWeight={"bold"} textTransform="capitalize">
                                            {key}:
                                        </Typography>
                                        <Typography
                                            sx={{ flex: 1 }}
                                        >
                                            {isLoading ? <Skeleton width={200} height={30} /> : value || "N/A"}
                                        </Typography>
                                    </>
                                )}
                            </Stack>
                        ))}
                    </Stack>
                </Card>
            </Container>
        </Stack>
    );
}

export default ProfileBanner;