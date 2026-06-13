import { Container, Stack, Typography } from '@mui/material';
import TicketsTable from './ticketsTable/TicketsTable';


function MyTickets() {

  return (
    <Stack sx={{ mt: "100px" }}>
      <Typography variant='h5' fontWeight={"700"} fontSize={"1.8rem"}>All Tickets</Typography>
      <TicketsTable />
    </Stack>
  )
}

export default MyTickets;