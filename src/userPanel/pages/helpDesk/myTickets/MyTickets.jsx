import { Stack, Typography } from '@mui/material';
import TicketsTable from './ticketsTable/TicketsTable';


function MyTickets() {

  return (
    <Stack>
      <Typography variant='h5' fontWeight={"700"} fontSize={"1.8rem"}>My Tickets</Typography>
      <TicketsTable />
    </Stack>
  )
}

export default MyTickets;