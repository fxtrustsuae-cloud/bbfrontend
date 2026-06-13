import { Card, Container, Typography, Button, Skeleton } from "@mui/material"
import { useGetUserProfileQuery } from '../../../../globalState/settings/profileSettingApi';
import { useConvertRewardToWalletMutation } from "../../../../globalState/walletState/walletStateApis";
import { setNotification } from "../../../../globalState/notification/notificationSlice";
import { useDispatch } from "react-redux";

function ConvertWallet() {

    const dispatch = useDispatch()

    const { data, isLoading: userDataLoading } = useGetUserProfileQuery()

    const totalRewardBalance = data?.data?.totalRewardBalance
    const totalUnlockRewardBalnce = data?.data?.totalUnlockRewardBalnce
    const totalAvailableBalance = Number(totalRewardBalance) - Number(totalUnlockRewardBalnce)

    const [convertRewardToWallet, { isLoading }] = useConvertRewardToWalletMutation()

    const onSubmit = async () => {

        try {
            const response = await convertRewardToWallet(data).unwrap();

            if (response?.status) {
                reset(defaultValues);
                dispatch(setNotification({ open: true, message: response?.message, severity: "success" }));
            }
        } catch (error) {
            if (error?.data) {
                dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to submit. Please try again later.", severity: "error" }));
            }
        }
    };


    return (
        <Container>
            <Typography variant="h4" fontWeight="bold" mb={"2rem"}>Convert wallet</Typography>
            <Card
                sx={{
                    padding: { xs: "1rem", sm: "2rem" },
                    borderRadius: "2rem",
                    boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                }}
            >
                <Typography>Avaliable Rewards: {userDataLoading ? <Skeleton /> : totalAvailableBalance}</Typography>
                <Button
                    variant='contained'
                    size='small'
                    type='submit'
                    disabled={isLoading}
                    onClick={onSubmit}
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