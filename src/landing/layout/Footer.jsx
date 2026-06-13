import { Box, Typography, TextField, Button, IconButton, Container, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { footerData } from "./footerData"
import { inputStyles } from "../authPages/authPagesInputStyle";


function Footer({ aboutRef, servicesRef, contactRef }) {

  const handleScrollToSection = (ref) => {
    if (ref && ref.current) {
      const yOffset = -80;
      const y = ref.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };


  return (
    <Stack
      // sx={{
      // backgroundColor: "#f5f5f5", 
      // py: "2rem"
      // }}
      component="section"
      sx={{
        position: "relative",
        py: "2rem",
        color: "white",
        overflow: "hidden",
        background: "linear-gradient(135deg, #000000 0%, #1f063d 85%)",
        "&:before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 30% 40%, rgba(241,184,17,0.08), transparent 60%), radial-gradient(circle at 80% 20%, rgba(241,184,17,0.04), transparent 70%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container>
        <Stack sx={{ gap: { xs: "3rem", sm: "5rem" } }}>
          <Stack sx={{ flexDirection: { xs: "column", sm: "row" }, gap: "2rem" }}>
            {footerData[0].Contact.map((item, index) => (
              <Box key={index} display="flex" justifyContent={{ sm: "center" }} mb={1}>
                <IconButton sx={{ color: "#f1b811" }}><item.icon /></IconButton>
                <Box ml={"1rem"}>
                  <Typography variant="body1">{item.contactInfo}</Typography>
                  <Typography variant="body2" color="#c0c0c0">
                    {item.type}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
          <Grid container spacing={{ xs: 5, sm: 10 }}>
            <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
              <Typography variant="h6" gutterBottom>
                About
              </Typography>
              <Typography variant="body2" color="#c0c0c0" fontSize={"1rem"} lineHeight={"2rem"}>
                {footerData[1].About}
              </Typography>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
              <Typography variant="h6" color="#c0c0c0" gutterBottom>
                Services
              </Typography>
              {footerData[2].Services.map((service, index) => (
                <Typography key={index} variant="body2" color="#c0c0c0" fontSize={"1rem"} lineHeight={"2rem"}>
                  {service}
                </Typography>
              ))}
            </Grid>
            <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
              <Typography variant="h6" gutterBottom>
                Community
              </Typography>
              {footerData[3].Community.map((community, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  color="#c0c0c0"
                  fontSize={"1rem"}
                  lineHeight={"2rem"}
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleScrollToSection(community.ref === 'aboutRef' ? aboutRef : community.ref === 'servicesRef' ? servicesRef : contactRef)}
                >
                  {community.name}
                </Typography>
              ))}
            </Grid>
            <Grid item size={{ xs: 10, sm: 6, md: 3 }}>
              <Typography variant="h6" gutterBottom color="white">
                Subscribe To Newsletter
              </Typography>
              <Typography variant="body2" color="#c0c0c0" mb={2} fontSize={"1rem"} lineHeight={"2rem"}>
                {footerData[4]["Subscribe To Newsletter"]}
              </Typography>
              <Box display="flex">
                <TextField
                  size="small"
                  placeholder="Email"
                  sx={{ ...inputStyles, mr: 1, flex: 1 }}
                />
                <Button variant="contained" sx={{ bgcolor: "#f1b811", boxShadow: "none", "&:hover": { boxShadow: "none" } }}>
                  SEND
                </Button>
              </Box>
              <Box mt={2} display="flex" gap={1}>
                {footerData[4].socialMediaIcons.map((icon, index) => (
                  <IconButton key={index} sx={{ color: "#f1b811" }}>
                    <icon />
                  </IconButton>
                ))}
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center">
            <Typography variant="body2" color="#c0c0c0">
              {footerData[5].reservedRight}
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Footer;