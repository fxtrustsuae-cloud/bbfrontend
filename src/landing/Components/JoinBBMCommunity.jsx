// import { Box, Typography, Button, Stack, Container } from "@mui/material"

// function JoinBBMCommunity() {
//     return (
//         <Container>
//             <Box textAlign="center" sx={{ mb: "1rem" }}>
//                 <Typography variant="h4" gutterBottom>
//                     Join the BBM Community
//                 </Typography>
//                 <Typography variant="body1" sx={{ mb: 1 }}>
//                     Whether you're a crypto enthusiast, a bullion investor, or someone looking for a reliable digital asset—BBM Coin is your entry point into a new financial era.
//                 </Typography>
//                 <Typography>Join our community, follow our progress, and help us shape the future of blockchain-powered markets.</Typography>
//                 <Stack
//                     sx={{
//                         flexDirection: "row",
//                         justifyContent: "center",
//                         gap: "1.2rem",
//                         mt: "1rem"
//                     }}
//                 >
//                     <Button
//                         variant="contained"
//                         size="large"
//                         sx={{
//                             textTransform: "capitalize",
//                             boxShadow: "none",
//                             bgcolor: "#f1b811",
//                             fontSize: "1.1rem",
//                             color: "white",
//                             "&:hover": {
//                                 boxShadow: "none"
//                             }
//                         }}
//                     >
//                         Join ICO/IEO Now
//                     </Button>
//                     <Button
//                         size="large"
//                         sx={{
//                             textTransform: "capitalize",
//                             boxShadow: "none",
//                             bgcolor: "#f1b811",
//                             fontSize: "1.1rem",
//                             color: "white",
//                             "&:hover": {
//                                 boxShadow: "none"
//                             }
//                         }}
//                     >
//                         Follow on Telegram | Twitter | Discord
//                     </Button>
//                 </Stack>
//             </Box>
//         </Container>
//     )
// }

// export default JoinBBMCommunity










import { Box, Typography, Button, Stack, Container } from "@mui/material";
import { motion } from "framer-motion";
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import { Icon } from "@iconify/react";

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.6, delay },
  }),
};

function JoinBBMCommunity() {
  return (
    <Box
      component="section"
      sx={{
        // background: "linear-gradient(135deg,#000000 0%,#1f063d 85%)",
        py: { xs: 8, md: 12 },
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeInUp}
        >
          <Box textAlign="center" sx={{ mb: { xs: 2, md: 4 } }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 700, letterSpacing: 1 }}
            >
              Join the BBM Community
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 1, maxWidth: 800, mx: "auto", fontSize: 16 }}
            >
              Whether you're a crypto enthusiast, a bullion investor, or someone
              looking for a reliable digital asset—BBM Coin is your entry point
              into a new financial era.
            </Typography>
            <Typography
              variant="body2"
              sx={{ maxWidth: 800, mx: "auto", opacity: 0.9 }}
            >
              Join our community, follow our progress, and help us shape the
              future of blockchain-powered markets.
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          variants={fadeInUp}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            sx={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "1.2rem",
              mt: 3,
              flexWrap: "wrap",
              px: { xs: 1, md: 0 },
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                textTransform: "capitalize",
                boxShadow: "none",
                bgcolor: "#f1b811",
                fontSize: "1.1rem",
                color: "black",
                px: 3,
                py: 1.5,
                borderRadius: 2,
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  bgcolor: "#e5a90f",
                  boxShadow: "0 16px 40px -5px rgba(241,184,17,0.6)",
                  transform: "scale(1.02)",
                },
                "&:active": { transform: "scale(0.98)" },
                transition: "all 0.25s ease",
              }}
            >
              Join ICO/IEO Now
            </Button>

            {/* <Button
              size="large"
              sx={{
                textTransform: "capitalize",
                boxShadow: "none",
                bgcolor: "transparent",
                border: "2px solid #f1b811",
                fontSize: "1.1rem",
                color: "#f1b811",
                px: 3,
                py: 1.5,
                borderRadius: 2,
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  bgcolor: "rgba(241,184,17,0.08)",
                  borderColor: "#f1b811",
                  transform: "scale(1.02)",
                },
                "&:active": { transform: "scale(0.98)" },
                transition: "all 0.25s ease",
              }}
            >
              Follow on Telegram | Twitter | Discord
            </Button> */}
            <TelegramIcon sx={{ width: 40, height: 40, cursor: "pointer" }} />
            <XIcon sx={{ width: 38, height: 38, cursor: "pointer" }} />
            <Icon icon={"ic:baseline-discord"} width={48} height={48} style={{ cursor: "pointer" }} />
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}

export default JoinBBMCommunity;