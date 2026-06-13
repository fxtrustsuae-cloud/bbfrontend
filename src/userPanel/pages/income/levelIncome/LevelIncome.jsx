import { Stack, Container, Typography } from '@mui/material';
import LevelIncomeTable from './levelIncomeTable/LevelIncomeTable';

function LevelIncome() {
    return (
        <Stack  mt={"100px"}>
            <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Level Income</Typography></Container>
            <LevelIncomeTable />
        </Stack>
    )
}

export default LevelIncome;