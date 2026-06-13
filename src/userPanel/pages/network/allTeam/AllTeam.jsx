import { Stack, Container, Typography } from '@mui/material';
import AllTeamTable from './allTeamTable/AllTeamTable';

function AllTeam() {
    return (
        <Stack  mt={"100px"}>
            <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>All Team</Typography></Container>
            <AllTeamTable />
        </Stack>
    )
}

export default AllTeam;