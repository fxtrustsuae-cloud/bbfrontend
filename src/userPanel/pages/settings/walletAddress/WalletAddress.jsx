import { Stack, Typography, Container } from "@mui/material";
import WalletAddressForm from "./walletAddressForm/WalletAddressForm";
import WalletAddressTable from "./walletAddressTable/WalletAddressTable";

function WalletAddress() {
    return (
        <Stack  mt={"100px"}>
            <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Wallet</Typography></Container>
            <WalletAddressForm />
            <WalletAddressTable />
        </Stack>
    )
}

export default WalletAddress;