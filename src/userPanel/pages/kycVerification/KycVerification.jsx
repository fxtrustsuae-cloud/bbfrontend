import { Container, Stack } from "@mui/material";
import KycVerificationSidebar from "./KycVerificationSidebar";
import KycVerificationActiveForm from "./KycVerificationActiveForm";
import KycVerificationStepsList from "./KycVerificationStepsList";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setKycStep } from "../../../globalState/kycState/kycStateSlice";
import { useGetDocumentDataQuery } from "../../../globalState/settings/profileSettingApi";
import { useNavigate } from "react-router-dom";
import Loading from "../../userPanelComponent/Loading"
import { useGetUserProfileQuery } from "../../../globalState/settings/profileSettingApi";


function KycVerification() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const { token } = useSelector((state) => state.auth);
    const { kycStep } = useSelector(state => state.kyc)

    const { data, isLoading } = useGetUserProfileQuery(undefined, {
        skip: !token,
        refetchOnMountOrArgChange: true,
    })

    const { data: docData, isLoading: docLoading } = useGetDocumentDataQuery(undefined, {
        skip: !token,
        refetchOnMountOrArgChange: true,
    })

    const documentNotUploaded = !docData?.status || docData?.data?.status == "REJECTED"
    const isKycVerified = data?.data?.isKycVerified

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {

        if (isLoading || docLoading) return;

        if (data && !isKycVerified) {

            if (kycStep == "emailOtpVerification") return;

            if (!data?.data?.isEmailVerified) {
                dispatch(setKycStep("emailVerification"));
            }
            //  else if (!data?.data?.mobile) {
            //     dispatch(setKycStep("phoneVerification"));
            // }
            // else if (!user.isMobileVerified) {
            //     dispatch(setKycStep("phoneOtpVerification"));
            // }
            // else if (!data?.data?.name) {
            //     dispatch(setKycStep("personalInfoVerification"));
            // }
            else if (documentNotUploaded) {
                dispatch(setKycStep("documentsVerification"));
            } else {
                dispatch(setKycStep("documentSubmitted"));
            }
        } else {
            navigate("/")
        }
    }, [
        data,
        isLoading,
        docLoading,
        documentNotUploaded,
        isKycVerified
    ]);


    if (isLoading || docLoading) {
        return <Loading />
    }


    return (
        <Container>
            <Stack
                sx={{
                    flexDirection: matches ? "column" : "row",
                    justifyContent: "center",
                    gap: "1rem",
                    // mt: "50px",
                    m: "100px"
                }}
            >
                {
                    matches
                        ?
                        <KycVerificationStepsList />
                        :
                        <KycVerificationSidebar />
                }
                <KycVerificationActiveForm />
            </Stack>
        </Container>
    )
}

export default KycVerification;