import { Container, Stack, Typography } from '@mui/material'
import TradingToCompoundingForm from './tradingToCompoundingForm/TradingToCompoundingForm';
import TradingToCompoundingPackageBalance from './tradingToCompoundingPackageBalance/TradingToCompoundingPackageBalance';


function TradingToCompounding() {
    return (
        <Stack mt={"100px"}>
            <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Trading to Compounding</Typography></Container>
            <TradingToCompoundingPackageBalance />
            <TradingToCompoundingForm />
        </Stack>
    )
}

export default TradingToCompounding;