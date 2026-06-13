import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePaginationComponent from '../../../../userPanelComponent/TablePaginationComponent';
import WalletHistoryTableHead from "./walletHistoryTableHead/WalletHistoryTableHead"
import WalletHistoryTableRow from "./walletHistoryTableRow/WalletHistoryTableRow"
import WalletHistoryTableToolbar from "./walletHistoryTableToolbar/WalletHistoryTableToolbar"


function WalletHistoryTable() {

  return (
    <Stack>
      <Container>
        <Card
          sx={{
            boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "2rem",
            padding: { xs: "1rem", md: "2rem" }
          }}
        >
          <WalletHistoryTableToolbar />
          <TableContainer>
            <Table sx={{ minWidth: 800 }}>
              <WalletHistoryTableHead />
              <TableBody>
                <WalletHistoryTableRow />
              </TableBody>
            </Table>
          </TableContainer>
          <TablePaginationComponent />
        </Card>
      </Container>
    </Stack>
  );

}

export default WalletHistoryTable;