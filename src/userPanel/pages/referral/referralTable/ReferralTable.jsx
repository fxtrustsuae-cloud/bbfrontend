// import {
//     Card,
//     Table,
//     Container,
//     TableBody,
//     TableContainer,
//     TableCell,
//     TableRow,
//     CircularProgress,
//     Typography
// } from '@mui/material';
// import { useGetReferralListQuery } from '../../../../globalState/settings/profileSettingApi';
// import ReferralTableHead from './referralTableHead/ReferralTableHead';
// import ReferralTableRow from './ReferralTableRow';


// function ReferralTable() {

//     const { data, isLoading } = useGetReferralListQuery();

//     const tableRowData = data?.data || [];
//     const hasData = Array.isArray(tableRowData) && tableRowData.length > 0;

//     return (
//         <Container sx={{ mt: '2.5rem' }}>
//             <Card
//                 sx={{
//                     boxShadow: '0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)',
//                     borderRadius: '1.2rem',
//                     padding: { xs: '1rem', md: '2rem' }
//                 }}
//             >
//                 <TableContainer sx={{ overflow: 'auto' }}>
//                     <Table sx={{ minWidth: 800 }}>
//                         <ReferralTableHead />
//                         <TableBody>
//                             {isLoading ? (
//                                 <TableRow>
//                                     <TableCell colSpan={12} align="center">
//                                         <CircularProgress />
//                                         <Typography mt={1}>Loading...</Typography>
//                                     </TableCell>
//                                 </TableRow>
//                             )
//                                 : hasData ? (
//                                     <ReferralTableRow data={tableRowData} />
//                                 ) : (
//                                     <TableRow>
//                                         <TableCell colSpan={12} align="center">
//                                             <Typography>No referral found</Typography>
//                                         </TableCell>
//                                     </TableRow>
//                                 )}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </Card>
//         </Container>
//     );
// }

// export default ReferralTable;