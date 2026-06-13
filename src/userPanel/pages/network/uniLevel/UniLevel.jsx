import { Stack, Container, Typography } from '@mui/material';
import UniLevelTable from './uniLevelTable/UniLevelTable';

function UniLevel() {
    return (
        <Stack  mt={"100px"}>
            <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Unilevel</Typography></Container>
            <UniLevelTable/>
        </Stack>
    )
}

export default UniLevel;