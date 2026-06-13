// import { TableRow, TableCell } from '@mui/material';

// function ReferralTableRow({data, page, rowsPerPage}) {

//   return (
//     <>
//       {
//         Array.isArray(data) && data.map((item, i) => (
//           <TableRow key={i}>
//             <TableCell sx={{ whiteSpace: 'nowrap' }}>{page * rowsPerPage + (i + 1)}</TableCell>
//             <TableCell sx={{ whiteSpace: 'nowrap' }}>{item.userId}</TableCell>
//             <TableCell sx={{ whiteSpace: 'nowrap' }}>{item.fromUserName}</TableCell>
//             <TableCell sx={{ whiteSpace: 'nowrap' }}>{item.transactionType}</TableCell>
//             <TableCell sx={{ whiteSpace: 'nowrap' }}>{item.amount}</TableCell>
//             <TableCell sx={{ whiteSpace: 'nowrap' }}>{item.createdAt}</TableCell>
//           </TableRow>
//         ))
//       }
//     </>
//   );

// }
// export default ReferralTableRow;