// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import { rows } from './tokenAllocationTableData';
// import { Container, TableContainer, Typography } from '@mui/material';

// function TokenAllocationTable() {
//     return (
//         <Container>
//             <TableContainer>
//                 <Typography fontSize={"2rem"} fontWeight={"700"} mb={"3rem"}>Token Allocation – Built for Long-Term Value</Typography>
//                 <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell align="center" sx={{ height: "4rem", color: "white" }}>Category</TableCell>
//                             <TableCell align="center" sx={{ height: "4rem", color: "white" }}>Allocation</TableCell>
//                             <TableCell align="center" sx={{ height: "4rem", color: "white" }}>Description</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {rows.map((row) => (
//                             <TableRow
//                                 key={row.name}
//                                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                             >
//                                 <TableCell component="th" scope="row" sx={{ height: "4rem", color: "#707070" }}>
//                                     {row.name}
//                                 </TableCell>
//                                 <TableCell align="center" sx={{ height: "4rem", color: "#707070" }}>{row.Allocation}</TableCell>
//                                 <TableCell align="center" sx={{ height: "4rem", color: "#707070" }}>{row.Description}</TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </Container>
//     );
// }

// export default TokenAllocationTable;







// TokenAllocationTable.jsx
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { rows } from "./tokenAllocationTableData";
import {
  Container,
  TableContainer,
  Typography,
  Box,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { motion } from "framer-motion";

const rowContainer = {
  hidden: { opacity: 0, y: 12 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      ease: "easeOut",
      duration: 0.5,
    },
  }),
};

const headerUnderline = {
  hidden: { width: 0 },
  visible: {
    width: "60px",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function parsePercent(allocation) {
  if (typeof allocation === "string") {
    const num = parseFloat(allocation.replace("%", "").trim());
    if (!isNaN(num)) return Math.min(Math.max(num, 0), 100);
  }
  if (typeof allocation === "number") return Math.min(Math.max(allocation, 0), 100);
  return 0;
}

function TokenAllocationTable() {

  const matches = useMediaQuery('(min-width:700px)');

  return (
    <Container sx={{ py: { xs: 6, md: 10 } }}>
      <Box sx={{ textAlign: "center", mb: "3rem", position: "relative" }}>
        <Typography
          fontSize={"2rem"}
          fontWeight={"700"}
          component={motion.div}
          initial="hidden"
          animate="visible"
          sx={{ display: "inline-block" }}
        >
          Token Allocation – Built for Long-Term Value
        </Typography>
        <Box
          component={motion.div}
          variants={headerUnderline}
          initial="hidden"
          animate="visible"
          sx={{
            height: 4,
            bgcolor: "#f1b811",
            borderRadius: 2,
            mt: 1,
            mx: "auto",
            width: "60px",
          }}
        />
      </Box>

      <TableContainer
        component={motion.div}
        initial="hidden"
        animate="visible"
        sx={{ overflow: matches ? "hidden" : "auto" }}
      >
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{
                  height: "4rem",
                  color: "white",
                  fontWeight: 600,
                  borderBottom: "2px solid rgba(255,255,255,0.1)",
                  fontSize: 15
                }}
              >
                Category
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  height: "4rem",
                  color: "white",
                  fontWeight: 600,
                  borderBottom: "2px solid rgba(255,255,255,0.1)",
                  fontSize: 15
                }}
              >
                Allocation
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  height: "4rem",
                  color: "white",
                  fontWeight: 600,
                  borderBottom: "2px solid rgba(255,255,255,0.1)",
                  fontSize: 15
                }}
              >
                Description
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => {
              const pct = parsePercent(row.Allocation);
              return (
                <motion.tr
                  key={row.name + idx}
                  custom={idx}
                  variants={rowContainer}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.01 }}
                  style={{ cursor: "default" }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      height: "4rem",
                      color: "#c0c0c0",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                      fontWeight: 500,
                      fontSize: 15
                    }}
                  >
                    {row.name}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      height: "4rem",
                      color: "#c0c0c0",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        maxWidth: 200,
                        mx: "auto",
                        py: 0.5,
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          bgcolor: "rgba(255,255,255,0.05)",
                          borderRadius: 1,
                        }}
                      />
                      <Box
                        component={motion.div}
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        sx={{
                          height: 12,
                          borderRadius: 1,
                          background: "linear-gradient(135deg, #f1b811 0%, #d4a50f 80%)",
                          position: "relative",
                        }}
                      />
                      <Typography
                        variant="caption"
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          fontSize: 11,
                          fontWeight: 600,
                          color: "black",
                          backgroundColor: "rgba(255,255,255,0.8)",
                          px: 0.5,
                          borderRadius: 0.5,
                        }}
                      >
                        {row.Allocation}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      height: "4rem",
                      color: "#c0c0c0",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                      fontSize: 15,
                    }}
                  >
                    {row.Description}
                  </TableCell>
                </motion.tr>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default TokenAllocationTable;