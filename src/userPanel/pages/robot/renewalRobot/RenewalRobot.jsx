import { Stack, Container, Typography } from '@mui/material';
import RenewalRobotWallet from './renewalRobotWallet/RenewalRobotWallet';
import RenewalRobotSubscription from './renewalRobotSubscription/RenewalRobotSubscription';
import RenewalRobotTable from './renewalRobotTable/RenewalRobotTable';
import RenewalRobotForm from './renewalRobotForm/RenewalRobotForm';

function RenewalRobot() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Renewal Trading Robot</Typography></Container>
      <RenewalRobotSubscription />
      <RenewalRobotWallet />
      <RenewalRobotForm />
      <RenewalRobotTable />
    </Stack>
  )
}

export default RenewalRobot;