import { Stack, Container, Typography } from "@mui/material";
import DepositCryptoForm from "./depositCryptoForm/DepositCryptoForm.jsx"
import DepositCryptoNotice from "./depositCryptoNotice/DepositCryptoNotice.jsx";
import DepositCryptoQRs from "./depositCryptoQRs/DepositCryptoQRs.jsx"
import DepositAmountForm from "./depositAmountForm/DepositAmountForm.jsx";
import { useSelector } from "react-redux";

function DepositCrypto() {

  const { depositQRData } = useSelector(state => state.wallet)

  return (
    <Stack mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Deposit Balance</Typography></Container>
      {/* <DepositCryptoNotice /> */}
      <DepositAmountForm />
      {depositQRData && <DepositCryptoQRs />}
      {/* <DepositCryptoForm /> */}
    </Stack>
  )
}

export default DepositCrypto;