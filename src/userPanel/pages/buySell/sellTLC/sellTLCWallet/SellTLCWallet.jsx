import { Card, CardContent, Stack, Typography, Container } from '@mui/material';
import Grid from "@mui/material/Grid2"
import { sellTLCWalletData } from './sellTLCWalletData';


function SellTLCWallet() {
  return (
    <Stack mt={"2rem"}>
      <Container>
        <Grid container size={12} spacing={4}>
          {
            sellTLCWalletData.map((data, i) => (
              <Grid item size={{ xs: 12, md: 6 }}>
                <Card
                  sx={{
                    boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                    borderRadius: "2rem",
                    padding: "1.2rem"
                  }}
                >
                  <CardContent key={i} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Stack sx={{ flexDirection: "column", gap: ".5rem" }}>
                      <Typography fontSize={"1.2rem"}>{data.walletHeading}</Typography>
                      <Typography variant='h4' sx={{ fontWeight: "bold" }}>{data.walletBalance}</Typography>
                    </Stack>
                    {data.icon && <Typography><data.icon sx={{ fontSize: "5rem", color: "primary.main" }} /></Typography>}
                    {data.text && <Typography textAlign={"center"} width={"80px"} color="primary.main" variant='h3' fontSize={"4.5rem"} fontWeight={"bold"}>{data.text}</Typography>}
                  </CardContent>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </Stack>
  )
}

export default SellTLCWallet;










// import { Card, CardContent, Stack, Typography, Container } from '@mui/material';
// import Grid from "@mui/material/Grid";
// import { sellTLCWalletData } from './sellTLCWalletData';

// function SellTLCWallet() {
//   return (
//     <Stack mt={"2rem"}>
//       <Container>
//         <Grid container spacing={4}>
//           {sellTLCWalletData.map((data, i) => (
//             <Grid item xs={12} md={6} key={i}> {/* ✅ Correct Grid usage with key */}
//               <Card
//                 sx={{
//                   boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
//                   borderRadius: "2rem",
//                   padding: "1.2rem"
//                 }}
//               >
//                 <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                   <Stack sx={{ flexDirection: "column", gap: ".5rem" }}>
//                     <Typography fontSize={"1.2rem"}>{data.walletHeading}</Typography>
//                     <Typography variant='h4' sx={{ fontWeight: "bold" }}>{data.walletBalance}</Typography>
//                   </Stack>
//                   {data.icon && <data.icon sx={{ fontSize: "5rem", color: "primary.main" }} />} {/* ✅ Proper icon rendering */}
//                   <Typography>{data.text}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Stack>
//   );
// }

// export default SellTLCWallet;