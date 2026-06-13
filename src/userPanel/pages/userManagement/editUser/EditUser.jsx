import { Stack, Typography } from "@mui/material";
import { lazy, Suspense, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import Selector from "../../../userPanelComponent/Selector";
import Loading from "../../../userPanelComponent/Loading";

import { useGetUserByIdQuery } from "../../../../globalState/admin/adminStateApis";

const DocumentList = lazy(() => import("../documentList/DocumentList"));
const UserProfileUpdate = lazy(() => import("./userProfileUpdate/UserProfileUpdate"));
const LoginPasswordUpdate = lazy(() => import("./loginPasswordUpdate/LoginPasswordUpdate"));
const TransactionPasswordUpdate = lazy(() => import("./transactionPasswordUpdate/TransactionPasswordUpdate"));
const UserTransactionHistoryList = lazy(() => import("./userTransactionHistory/UserTransactionHistoryList"));
const AddFund = lazy(() => import("./addFund/AddFund"));
const ReferralTreeAndDataComponent = lazy(() => import("./referralTree/ReferralTreeAndDataComponent"));

const updateType = [
  "Profile update",
  "Login password",
  "Transaction password",
  "Document List",
  "Referral tree",
  "Transaction history",
  "Fund deposit",
];

const allComponents = {
  "Profile update": UserProfileUpdate,
  "Login password": LoginPasswordUpdate,
  "Transaction password": TransactionPasswordUpdate,
  "Document List": DocumentList,
  "Referral tree": ReferralTreeAndDataComponent,
  "Transaction history": UserTransactionHistoryList,
  "Fund deposit": AddFund,
};

const NotImplemented = () => (
  <Typography color="error">Not implemented yet.</Typography>
);

function EditUser() {
  const { id } = useParams();
  const { state } = useLocation();

  const selectedValueFromRoute = state?.selectedValue;

  const { data, isLoading } = useGetUserByIdQuery(
    { id },
    { skip: !id }
  );

  const selectedUserData = data?.data;

  const [selectedType, setSelectedType] = useState(updateType[0]);

  useEffect(() => {
    if (
      selectedValueFromRoute &&
      updateType.includes(selectedValueFromRoute)
    ) {
      setSelectedType(selectedValueFromRoute);
    }
  }, [selectedValueFromRoute]);

  const ActiveComponent = allComponents[selectedType] || NotImplemented;

  return (
    <Stack sx={{ mt: "100px" }}>
      <Typography variant="h5" fontWeight="bold" mb="2rem">
        Edit user
      </Typography>

      <Selector
        width={{ xs: "100%", sm: "350px" }}
        items={updateType}
        value={selectedType}
        shouldBeFullWidth
        showDefaultOption={false}
        onChange={(e) => setSelectedType(e.target.value)}
      />

      <Suspense fallback={<Loading mt="10rem" />}>
        <ActiveComponent
          key={`${id}-${selectedType}`}
          userData={selectedUserData}
          userDataLoading={isLoading}
        />
      </Suspense>
    </Stack>
  );
}

export default EditUser;