import { Stack, Container, Typography } from '@mui/material';
import AchievementIncomeTotal from './achievementIncomeTotal/AchievementIncomeTotal';
import AchievementIncomeTable from './achievementIncomeTable/AchievementIncomeTable';

function AchievementIncome() {
    return (
        <Stack  mt={"100px"}>
            <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Achievement Income</Typography></Container>
            <AchievementIncomeTotal />
            <AchievementIncomeTable />
        </Stack>
    )
}

export default AchievementIncome;