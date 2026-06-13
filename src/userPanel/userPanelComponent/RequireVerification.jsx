import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import { useGetUserProfileQuery } from "../../globalState/settings/profileSettingApi";

const RequireVerification = ({ children, isKycRequired, isBankVerificationRequired, isHalfKycRequired }) => {
    const { token } = useSelector((state) => state.auth);
    const { data, isLoading } = useGetUserProfileQuery(undefined, { skip: !token });

    if (isLoading) return <Loading />;

    const user = data?.data;
    // const isAddressAdded = user?.address


    // const isEmailVerified = user?.isEmailVerified
    // const isMobileVerified = user?.isMobileVerified
    // const isNameRegistered = user?.name

    // const levelOneVerification = !!(isEmailVerified && isNameRegistered)


    // const isNameRegistered = user?.name
    const isKycVerified = user?.isKycVerified;
    // const isBankVerified = user?.isBankVerified;

    // if (isHalfKycRequired && !levelOneVerification) {
    //     return <Navigate to="/client/kyc" replace />
    // }

    if (isKycRequired && !isKycVerified) {
        return <Navigate to="/dashboard/kyc" replace />;
    }

    // if (isBankVerificationRequired && !isBankVerified) {
    //     return <Navigate to="/client/compliance/bank/add" replace />;
    // }

    return children;
};

export default RequireVerification;