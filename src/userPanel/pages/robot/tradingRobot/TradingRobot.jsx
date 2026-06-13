import { Stack, Container, Typography } from '@mui/material';
import TradingRobotForm from './tradingRobotForm/TradingRobotForm';
import TradingRobotWallet from './tradingRobotWallet/TradingRobotWallet';
import TradingRobotSubscription from './tradingRobotSubscription/TradingRobotSubscription';
import TradingRobotTable from './tradingRobotTable/TradingRobotTable';

function TradingRobot() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Trading Robot</Typography></Container>
      <TradingRobotSubscription />
      <TradingRobotWallet />
      <TradingRobotForm />
      <TradingRobotTable />
    </Stack>
  )
}

export default TradingRobot;