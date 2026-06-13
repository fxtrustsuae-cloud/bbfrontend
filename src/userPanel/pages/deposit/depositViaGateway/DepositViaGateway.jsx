import { Stack, Container, Typography } from "@mui/material";
import DepositViaGatewayForm from "./depositViaGatewayForm/DepositViaGatewayForm.jsx";
import DepositViaGatewayNotice from "./depositViaGatewayNotice/DepositViaGatewayNotice.jsx";

function DepositViaGateway() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Deposit via Gateway</Typography></Container>
      <DepositViaGatewayNotice />
      <DepositViaGatewayForm />
    </Stack>
  )
}

export default DepositViaGateway;