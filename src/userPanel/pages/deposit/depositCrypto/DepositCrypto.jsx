import { Stack, Container, Typography } from "@mui/material";
import DepositCryptoForm from "./depositCryptoForm/DepositCryptoForm.jsx"
import DepositCryptoNotice from "./depositCryptoNotice/DepositCryptoNotice.jsx";
import DepositCryptoQRs from "./depositCryptoQRs/DepositCryptoQRs.jsx"
import DepositAmountForm from "./depositAmountForm/DepositAmountForm.jsx";
import { useSelector } from "react-redux";
import TRCDepositForm from "./TRCDeposit/TRCDepositForm.jsx"
import TRCDepositQR from "./TRCDeposit/TRCDepositQR.jsx";
import Loading from "../../../userPanelComponent/Loading.jsx";

function DepositCrypto() {

  const { depositQRData } = useSelector(state => state.payment)

  return (
    <Stack>
      <Typography variant="h4" fontWeight="bold" mb={"2rem"}>Deposit Balance</Typography>
      {/* <DepositCryptoNotice /> */}
      {/* <DepositAmountForm /> */}
      <TRCDepositForm />
      {depositQRData && <TRCDepositQR />}
      {/* {depositQRData && <DepositCryptoQRs />} */}
      {/* <DepositCryptoForm /> */}
    </Stack>
  )
}

export default DepositCrypto;