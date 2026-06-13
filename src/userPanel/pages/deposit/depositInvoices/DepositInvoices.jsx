import { Box, Button, Card, Container, Divider, Stack, Typography } from '@mui/material';
import { depositInvoicesData } from './depositInvoicesData';
import { useSelector } from 'react-redux';
import RefreshIcon from '@mui/icons-material/Refresh';


function DepositInvoices() {

  const { activeTheme } = useSelector((state) => state.themeMode);

  return (
    <Stack  mt={"120px"}>
      <Container>
        <Card
          sx={{
            boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "2rem",
            padding: { xs: "1rem", md: "2rem" },
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem"
          }}
        >
          <Typography fontSize={"1.2rem"} mx={{ xs: "1rem", md: "0" }}>Deposit Invoices</Typography>
          <Divider sx={{ my: ".3rem" }} />
          {depositInvoicesData.map((data, i) => (
            <>
              <Stack
                key={i}
                sx={{
                  px: { xs: "0", md: "1rem" },
                  borderRadius: "1rem",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  gap: { xs: "2rem", lg: "2rem" },
                  alignItems: "center",
                  flexWrap: "wrap"
                }}
              >
                {Object.entries(data).map(([keys, values], subIndex) => (
                  <Box key={subIndex} sx={{ wordBreak: "break-all" }}>
                    {keys === "QR" ? (
                      <Card sx={{ width: "5rem", bgcolor: activeTheme === "dark" ? "#ebe8e8" : "", display: "flex", alignItems: "center", boxShadow: "none" }}>
                        <img src={values} alt='error' width={"100%"} />
                      </Card>
                    )
                      :
                      (
                        <Stack>
                          {
                            keys !== "refresh" ?
                              <Typography fontSize={"1rem"}>{values}</Typography>
                              :
                              <Button
                                variant='contained'
                                sx={{
                                  boxShadow: "none",
                                  textTransform: 'capitalize',
                                  color: '#f72b50',
                                  bgcolor: "#fee6ea",
                                  borderRadius: '5rem',
                                  py: '.7rem',
                                  "&:hover": {
                                    boxShadow: "none"
                                  }
                                }}
                              ><RefreshIcon /></Button>
                          }
                          <Typography fontWeight="bold" color='#969ba0' fontSize={".9rem"}>
                            {keys !== "refresh" && keys}
                          </Typography>
                        </Stack>
                      )
                    }
                  </Box>
                ))}
              </Stack>
              <Divider />
            </>
          ))}
        </Card>
      </Container>
    </Stack>
  )
}

export default DepositInvoices;