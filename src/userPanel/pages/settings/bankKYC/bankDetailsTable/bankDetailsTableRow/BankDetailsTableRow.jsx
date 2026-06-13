// import { TableRow, TableCell, Stack, Typography } from '@mui/material';
// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// function BankDetailsTableRow({ data }) {

//   return (
//     <TableRow>
//       <TableCell align="left" sx={{ whiteSpace: "nowrap" }}>1</TableCell>
//       <TableCell align="left" sx={{ whiteSpace: "nowrap" }}>
//         {data.id}
//       </TableCell>
//       <TableCell align="left" sx={{ whiteSpace: "nowrap" }}>{data.userId}</TableCell>
//       <TableCell align="left" sx={{ whiteSpace: "nowrap" }}>{data.holderName}</TableCell>
//       <TableCell align="left" sx={{ whiteSpace: "nowrap" }}>{data.bankName}</TableCell>
//       <TableCell align="left" sx={{ whiteSpace: "nowrap" }}>{data.accountNo}</TableCell>
//       <TableCell align="left" sx={{ whiteSpace: "nowrap" }}>{data.ifscCode}</TableCell>
//       <TableCell align="left" sx={{ whiteSpace: "nowrap" }}>{data.accountType}</TableCell>
//       <TableCell align="left" sx={{ whiteSpace: "nowrap" }}>{data.branchName}</TableCell>
//       <TableCell align="left" sx={{ whiteSpace: "nowrap" }}>{data.panNumber}</TableCell>
//       <TableCell align="left" sx={{ whiteSpace: "nowrap" }}>{new Date(data.createdAt).toLocaleString()}</TableCell>
//       <TableCell align="left" sx={{ whiteSpace: "nowrap" }}>
//         <Stack
//           sx={{
//             flexDirection: "row",
//             alignItems: 'center',
//             gap: '3px'
//           }}
//         >
//           <FiberManualRecordIcon sx={{ fontSize: '1.2rem', color: data.isDeleted === false ? 'green' : 'red' }} />
//           <Typography>{data.isDeleted === false ? "Available" : "Deleted"}</Typography>
//         </Stack>
//       </TableCell>
//     </TableRow>
//   );

// }
// export default BankDetailsTableRow;