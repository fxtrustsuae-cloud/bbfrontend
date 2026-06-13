import { Stack, Container, Typography } from '@mui/material';
import BusinessHistoryTable from './businessHistoryTable/BusinessHistoryTable';

function BusinessHistory() {
    return (
        <Stack  mt={"100px"}>
            <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Business History</Typography></Container>
            <BusinessHistoryTable />
        </Stack>
    )
}

export default BusinessHistory;