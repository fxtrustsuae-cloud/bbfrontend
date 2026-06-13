import { Stack, Container, Typography } from '@mui/material';
import ClubIncomeTable from './clubIncomeTable/ClubIncomeTable';
import ClubIncomeTotal from './clubIncometotal/ClubIncomeTotal';

function ClubIncome() {
    return (
        <Stack  mt={"100px"}>
            <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Club Income</Typography></Container>
            <ClubIncomeTotal />
            <ClubIncomeTable />
        </Stack>
    )
}

export default ClubIncome;