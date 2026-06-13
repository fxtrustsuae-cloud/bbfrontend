import { Stack, Container, Typography } from '@mui/material';
import AccountStatementTable from "./accountStatementTable/AccountStatementTable"

function AccountStatement() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Account Statement</Typography></Container>
      <AccountStatementTable />
    </Stack>
  )
}

export default AccountStatement;