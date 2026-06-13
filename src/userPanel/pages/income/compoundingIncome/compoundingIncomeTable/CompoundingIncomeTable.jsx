import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePaginationComponent from '../../../../userPanelComponent/TablePaginationComponent';
import CompoundingIncomeTableToolbar from "./compoundingIncomeTableToolbar/CompoundingIncomeTableToolbar"
import CompoundingIncomeTableRow from "./compoundingIncomeTableRow/CompoundingIncomeTableRow"
import CompoundingIncomeTableHead from "./compoundingIncomeTableHead/CompoundingIncomeTableHead"


function CompoundingIncomeTable() {

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
                    <CompoundingIncomeTableToolbar />
                    <TableContainer sx={{ overflow: 'auto' }}>
                        <Table sx={{ minWidth: 800 }}>
                            <CompoundingIncomeTableHead />
                            <TableBody>
                                <CompoundingIncomeTableRow />
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePaginationComponent />
                </Card>
            </Container>
        </Stack>
    );
}

export default CompoundingIncomeTable;