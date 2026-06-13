import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePaginationComponent from '../../../../userPanelComponent/TablePaginationComponent';
import WithdrawalTradingCRYPTOTableHead from "./withdrawalTradingCRYPTOTableHead/WithdrawalTradingCRYPTOTableHead"
import WithdrawalTradingCRYPTOTableRow from "./withdrawalTradingCRYPTOTableRow/WithdrawalTradingCRYPTOTableRow"
import WithdrawalTradingCRYPTOTableToolbar from "./withdrawalTradingCRYPTOTableToolbar/WithdrawalTradingCRYPTOTableToolbar"


function WithdrawalTradingCRYPTOTable() {

  return (
    <Stack mt={"2rem"}>
      <Container>
        <Card
          sx={{
            boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "2rem",
            padding: { xs: "1rem", md: "2rem" }
          }}
        >
          <WithdrawalTradingCRYPTOTableToolbar />
          <TableContainer>
            <Table sx={{ minWidth: 800 }}>
              <WithdrawalTradingCRYPTOTableHead />
              <TableBody>
                <WithdrawalTradingCRYPTOTableRow />
              </TableBody>
            </Table>
          </TableContainer>
          <TablePaginationComponent />
        </Card>
      </Container>
    </Stack>
  );

}

export default WithdrawalTradingCRYPTOTable;