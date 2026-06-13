// import Accordion, { accordionClasses } from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails, {
//   accordionDetailsClasses,
// } from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Fade from '@mui/material/Fade';
// import { useState } from 'react';
// import { Container, Typography } from '@mui/material';
// import { BBMRoadmapHighlightData } from './BBMRoadmapHighlightData';

// function BBMRoadmapHighlight() {
//   const [expandedSet, setExpandedSet] = useState(new Set());

//   const handleToggle = (index) => (event, isExpanded) => {
//     setExpandedSet((prev) => {
//       const next = new Set(prev);
//       if (next.has(index)) {
//         next.delete(index);
//       } else {
//         next.add(index);
//       }
//       return next;
//     });
//   };

//   return (
//     <Container sx={{ my: "2rem" }}>
//       <Typography fontSize="2rem" fontWeight={700} py="3rem">
//         Key Features of BBM Coin
//       </Typography>
//       {BBMRoadmapHighlightData.map((item, i) => {
//         const panelId = `panel-${i}`;
//         const isExpanded = expandedSet.has(i);
//         return (
//           <Accordion
//             key={panelId}
//             expanded={isExpanded}
//             onChange={handleToggle(i)}
//             slots={{ transition: Fade }}
//             slotProps={{ transition: { timeout: 400 } }}
//             sx={{
//               boxShadow: "none",
//               ...(isExpanded
//                 ? {
//                     [`& .${accordionClasses.region}`]: {
//                       height: "auto",
//                     },
//                     [`& .${accordionDetailsClasses.root}`]: {
//                       display: "block",
//                     },
//                   }
//                 : {
//                     [`& .${accordionClasses.region}`]: {
//                       height: 0,
//                     },
//                     [`& .${accordionDetailsClasses.root}`]: {
//                       display: "none",
//                     },
//                   }),
//             }}
//           >
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls={`${panelId}-content`}
//               id={`${panelId}-header`}
//             >
//               <Typography component="span">{item.heading}</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography>{item.description}</Typography>
//             </AccordionDetails>
//           </Accordion>
//         );
//       })}
//     </Container>
//   );
// }

// export default BBMRoadmapHighlight;



















// RoadmapHighlights.jsx
// import React from "react";
// import { Box, Typography, Grid, Paper, useTheme } from "@mui/material";
// import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"; // placeholder central icon

// export const BBMRoadmapHighlightData = [
//   {
//     heading: "Q3 2025",
//     description:
//       "Smart contract audit, ICO / IEO launch, CoinMarketCap / Coingecko listings",
//   },
//   {
//     heading: "Q4 2025",
//     description:
//       "Listing on Tier 1 Exchanges, Launch of BBM Wallet App",
//   },
//   {
//     heading: "Q1 2026",
//     description:
//       "DeFi Integration, Bullion - Backed NFT Launch",
//   },
//   {
//     heading: "Q2 2026",
//     description:
//       "Cross - chain bridge & international partnerships",
//   },
// ];

// const CircleNumber = ({ number }) => {
//   return (
//     <Box
//       sx={{
//         width: 80,
//         height: 80,
//         borderRadius: "50%",
//         backgroundColor: "rgba(255,255,255,0.08)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         fontWeight: 700,
//         fontSize: 28,
//         color: "white",
//         position: "relative",
//         mb: 1,
//       }}
//     >
//       {number.toString().padStart(2, "0")}
//     </Box>
//   );
// };

// const RoadmapCard = ({ index, heading, description }) => {
//   return (
//     <Box
//       sx={{
//         position: "relative",
//         color: "white",
//         textAlign: "center",
//         maxWidth: 260,
//         mx: "auto",
//         mb: { xs: 4, md: 0 },
//       }}
//     >
//       <CircleNumber number={index + 1} />
//       <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
//         {heading}
//       </Typography>
//       <Typography variant="body2" sx={{ lineHeight: 1.4, fontSize: 14 }}>
//         {description}
//       </Typography>
//     </Box>
//   );
// };

// const RoadmapHighlights = ({ backgroundImage }) => {
//   const theme = useTheme();

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         minHeight: 600,
//         py: 8,
//         px: 2,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         background: backgroundImage
//           ? `url(${backgroundImage}) center/cover no-repeat`
//           : "linear-gradient(135deg, #0f1f4e 0%, #1f063d 80%)",
//         overflow: "hidden",
//         "&:before": {
//           content: '""',
//           position: "absolute",
//           inset: 0,
//           background:
//             "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 60%)",
//           pointerEvents: "none",
//         },
//       }}
//     >
//       <Typography
//         variant="h4"
//         sx={{
//           color: "white",
//           fontWeight: 700,
//           mb: 6,
//           textAlign: "center",
//           letterSpacing: 1,
//         }}
//       >
//         ROADMAP HIGHLIGHTS
//       </Typography>

//       <Box
//         sx={{
//           position: "relative",
//           width: "100%",
//           maxWidth: 1200,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           flexWrap: "wrap",
//           gap: 4,
//         }}
//       >
//         {/* Left and Right items positioned around center */}
//         <Grid
//           container
//           spacing={2}
//           sx={{
//             position: "relative",
//             zIndex: 1,
//             width: "100%",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           {/* Top-left (Q3 2025) */}
//           <Grid
//             item
//             xs={12}
//             md={3}
//             sx={{
//               display: "flex",
//               justifyContent: "flex-end",
//               pr: { md: 4 },
//             }}
//           >
//             <RoadmapCard
//               index={0}
//               heading={BBMRoadmapHighlightData[0].heading}
//               description={BBMRoadmapHighlightData[0].description}
//             />
//           </Grid>
//           {/* Top-right (Q4 2025) */}
//           <Grid
//             item
//             xs={12}
//             md={3}
//             sx={{
//               display: "flex",
//               justifyContent: "flex-start",
//               pl: { md: 4 },
//             }}
//           >
//             <RoadmapCard
//               index={1}
//               heading={BBMRoadmapHighlightData[1].heading}
//               description={BBMRoadmapHighlightData[1].description}
//             />
//           </Grid>

//           {/* Center icon */}
//           <Grid
//             item
//             xs={12}
//             md={6}
//             sx={{
//               position: "relative",
//               display: "flex",
//               justifyContent: "center",
//               mt: { xs: 4, md: 0 },
//               mb: { xs: 4, md: 0 },
//             }}
//           >
//             <Box
//               sx={{
//                 width: 220,
//                 height: 220,
//                 borderRadius: "50%",
//                 background:
//                   "rgba(255,255,255,0.04)",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 position: "relative",
//                 "&:before": {
//                   content: '""',
//                   position: "absolute",
//                   width: 300,
//                   height: 300,
//                   borderRadius: "50%",
//                   background:
//                     "rgba(0, 180, 255, 0.06)",
//                   top: "50%",
//                   left: "50%",
//                   transform: "translate(-50%, -50%)",
//                   filter: "blur(30px)",
//                   zIndex: -2,
//                 },
//                 "&:after": {
//                   content: '""',
//                   position: "absolute",
//                   width: 360,
//                   height: 360,
//                   borderRadius: "50%",
//                   background:
//                     "rgba(0, 120, 255, 0.03)",
//                   top: "50%",
//                   left: "50%",
//                   transform: "translate(-50%, -50%)",
//                   filter: "blur(60px)",
//                   zIndex: -3,
//                 },
//               }}
//             >
//               <Box
//                 sx={{
//                   width: 100,
//                   height: 100,
//                   borderRadius: "16px",
//                   background:
//                     "linear-gradient(135deg, #00c6ff 0%, #0061ff 100%)",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   boxShadow: "0 20px 60px -10px rgba(0,198,255,0.5)",
//                   position: "relative",
//                 }}
//               >
//                 <AutoAwesomeIcon
//                   sx={{ fontSize: 50, color: "white" }}
//                 />
//               </Box>
//             </Box>
//           </Grid>

//           {/* Bottom-left (Q1 2026) */}
//           <Grid
//             item
//             xs={12}
//             md={3}
//             sx={{
//               display: "flex",
//               justifyContent: "flex-end",
//               pr: { md: 4 },
//               mt: { md: 4 },
//             }}
//           >
//             <RoadmapCard
//               index={2}
//               heading={BBMRoadmapHighlightData[2].heading}
//               description={BBMRoadmapHighlightData[2].description}
//             />
//           </Grid>
//           {/* Bottom-right (Q2 2026) */}
//           <Grid
//             item
//             xs={12}
//             md={3}
//             sx={{
//               display: "flex",
//               justifyContent: "flex-start",
//               pl: { md: 4 },
//               mt: { md: 4 },
//             }}
//           >
//             <RoadmapCard
//               index={3}
//               heading={BBMRoadmapHighlightData[3].heading}
//               description={BBMRoadmapHighlightData[3].description}
//             />
//           </Grid>
//         </Grid>
//       </Box>

//       <Typography
//         variant="subtitle1"
//         sx={{
//           mt: 6,
//           color: "rgba(255,255,255,0.7)",
//           textAlign: "center",
//           maxWidth: 800,
//         }}
//       >
//         Strategic milestones laid out across quarters, from audit and token
//         launch to multi-chain expansion and DeFi/NFT integration. The central
//         hub represents the core BBM ecosystem. 
//       </Typography>
//     </Box>
//   );
// };

// export default RoadmapHighlights;












































// RoadmapHighlights.jsx
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export const BBMRoadmapHighlightData = [
  {
    heading: "Q3 2025",
    description:
      "Smart contract audit, ICO / IEO launch, CoinMarketCap / Coingecko listings",
  },
  {
    heading: "Q4 2025",
    description:
      "Listing on Tier 1 Exchanges, Launch of BBM Wallet App",
  },
  {
    heading: "Q1 2026",
    description:
      "DeFi Integration, Bullion - Backed NFT Launch",
  },
  {
    heading: "Q2 2026",
    description:
      "Cross - chain bridge & international partnerships",
  },
];

const CircleNumber = ({ number }) => {
  return (
    <Box
      sx={{
        width: 80,
        height: 80,
        borderRadius: "50%",
        backgroundColor: "rgba(241,184,17,0.08)", // light accent halo
        border: "2px solid #f1b811",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: 28,
        color: "#f1b811",
        position: "relative",
        mb: 1,
        backfaceVisibility: "hidden",
      }}
    >
      {number.toString().padStart(2, "0")}
    </Box>
  );
};

const RoadmapCard = ({ index, heading, description }) => {
  return (
    <Box
      sx={{
        position: "relative",
        color: "white",
        textAlign: "center",
        maxWidth: 260,
        mx: "auto",
        mb: { xs: 4, md: 0 },
      }}
    >
      <CircleNumber number={index + 1} />
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          mb: 1,
          position: "relative",
          "&:after": {
            content: '""',
            width: 60,
            height: 4,
            backgroundColor: "#f1b811",
            borderRadius: 2,
            display: "block",
            mt: 0.5,
            mx: "auto",
          },
        }}
      >
        {heading}
      </Typography>
      <Typography variant="body2" sx={{ lineHeight: 1.4, fontSize: 14 }}>
        {description}
      </Typography>
    </Box>
  );
};

const RoadmapHighlights = ({ backgroundImage }) => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: 600,
        py: 8,
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // background: backgroundImage
        //   ? `url(${backgroundImage}) center/cover no-repeat`
        //   : "linear-gradient(135deg, #000000 0%, #1f063d 80%)",
        overflow: "hidden",
        color: "white",
        "&:before": {
          content: '""',
          position: "absolute",
          inset: 0,
          // background:
          //   "radial-gradient(circle at 50% 50%, rgba(241,184,17,0.04) 0%, transparent 60%)",
          pointerEvents: "none",
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: 700,
          mb: 6,
          textAlign: "center",
          letterSpacing: 1,
        }}
      >
        ROADMAP HIGHLIGHTS
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 1200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              pr: { md: 4 },
            }}
          >
            <RoadmapCard
              index={0}
              heading={BBMRoadmapHighlightData[0].heading}
              description={BBMRoadmapHighlightData[0].description}
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              pl: { md: 4 },
            }}
          >
            <RoadmapCard
              index={1}
              heading={BBMRoadmapHighlightData[1].heading}
              description={BBMRoadmapHighlightData[1].description}
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              mt: { xs: 4, md: 0 },
              mb: { xs: 4, md: 0 },
            }}
          >
            <Box
              sx={{
                width: 220,
                height: 220,
                borderRadius: "50%",
                background: "rgba(241,184,17,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  width: 300,
                  height: 300,
                  borderRadius: "50%",
                  background: "rgba(241,184,17,0.18)",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  filter: "blur(35px)",
                  zIndex: -2,
                },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  width: 360,
                  height: 360,
                  borderRadius: "50%",
                  background: "rgba(241,184,17,0.08)",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  filter: "blur(60px)",
                  zIndex: -3,
                },
              }}
            >
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg, #f1b811 0%, #000000 80%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 20px 60px -10px rgba(241,184,17,0.6)",
                  position: "relative",
                }}
              >
                <AutoAwesomeIcon sx={{ fontSize: 50, color: "white" }} />
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              pr: { md: 4 },
              mt: { md: 4 },
            }}
          >
            <RoadmapCard
              index={2}
              heading={BBMRoadmapHighlightData[2].heading}
              description={BBMRoadmapHighlightData[2].description}
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              pl: { md: 4 },
              mt: { md: 4 },
            }}
          >
            <RoadmapCard
              index={3}
              heading={BBMRoadmapHighlightData[3].heading}
              description={BBMRoadmapHighlightData[3].description}
            />
          </Grid>
        </Grid>
      </Box>

      <Typography
        variant="subtitle1"
        sx={{
          mt: 6,
          color: "rgba(255,255,255,0.7)",
          textAlign: "center",
          maxWidth: 800,
        }}
      >
        Strategic milestones laid out across quarters, from audit and token
        launch to multi-chain expansion and DeFi/NFT integration. The central
        hub represents the core BBM ecosystem.
      </Typography>
    </Box>
  );
};

export default RoadmapHighlights;