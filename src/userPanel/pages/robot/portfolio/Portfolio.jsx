import { Container, Stack, Typography } from '@mui/material'
import TradingPortfolio from './tradingPortfolio/TradingPortfolio.jsx';
import CompoundingPortfolio from './compoundingPortfolio/CompoundingPortfolio.jsx';

function Portfolio() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Portfolio</Typography></Container>
      <TradingPortfolio />
      <CompoundingPortfolio />
    </Stack>
  )
}

export default Portfolio;