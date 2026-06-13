// import {
//     Card,
//     Stack,
//     Table,
//     TableRow,
//     TableCell,
//     TableBody,
//     Container,
//     TableContainer,
//     Typography,
//     CircularProgress
// } from '@mui/material';
// import BankDetailsTableRow from "./bankDetailsTableRow/BankDetailsTableRow";
// import BankDetailsTableHead from "./bankDetailsTableHead/BankDetailsTableHead";
// import { useGetBankDetailsQuery } from '../../../../../globalState/settings/profileSettingApi';

// function BankDetailsTable() {

//     const { data, isLoading, isError, error } = useGetBankDetailsQuery();

//     const bankDetailsTableRowData = data?.data || [];

//     return (
//         <Stack mt={"2rem"}>
//             <Container>
//                 <Card
//                     sx={{
//                         boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
//                         borderRadius: "2rem",
//                         padding: { xs: "1rem", md: "2rem" }
//                     }}
//                 >
//                     <TableContainer>
//                         <Table sx={{ minWidth: 800 }}>
//                             <BankDetailsTableHead />
//                             <TableBody>
//                                 {isLoading ? (
//                                     <TableRow>
//                                         <TableCell colSpan={12} align="center">
//                                             <CircularProgress />
//                                             <Typography mt={1}>Loading...</Typography>
//                                         </TableCell>
//                                     </TableRow>
//                                 ) : isError ? (
//                                     <TableRow>
//                                         <TableCell colSpan={12} align="center">
//                                             <Typography color="error">
//                                                 Error: {error?.data?.message || "Failed to fetch data"}
//                                             </Typography>
//                                         </TableCell>
//                                     </TableRow>
//                                 ) : bankDetailsTableRowData ? (
//                                     <BankDetailsTableRow data={bankDetailsTableRowData} />
//                                 ) : (
//                                     <TableRow>
//                                         <TableCell colSpan={12} align="center">
//                                             <Typography>No bank details found</Typography>
//                                         </TableCell>
//                                     </TableRow>
//                                 )}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                 </Card>
//             </Container>
//         </Stack>
//     );
// }

// export default BankDetailsTable;