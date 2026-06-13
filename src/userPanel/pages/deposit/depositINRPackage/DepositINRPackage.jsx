import { Stack, Container, Typography } from "@mui/material";
import DepositINRPackageNotice from "./depositINRPackageNotice/DepositINRPackageNotice.jsx";
import DepositINRPackageForm from "./depositINRPackageForm/DepositINRPackageForm.jsx";

function DepositINRPackage() {
  return (
    <Stack mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Deposit INR (Package)</Typography></Container>
      <DepositINRPackageNotice />
      <DepositINRPackageForm />
    </Stack>
  )
}

export default DepositINRPackage;