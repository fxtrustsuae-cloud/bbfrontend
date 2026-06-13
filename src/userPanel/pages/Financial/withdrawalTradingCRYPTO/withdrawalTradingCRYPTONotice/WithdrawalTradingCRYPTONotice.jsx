import { Card, CardContent, Container, Stack, Typography } from '@mui/material'
import { withdrawalTradingCRYPTONoticeData } from "./withdrawalTradingCRYPTONoticeData"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useState } from 'react'

function WithdrawalTradingCRYPTONotice() {

  const [remove, setRemove] = useState()

  return (
    <Stack>
      {
        !remove
        &&
        <Container>
          <Card
            sx={{
              borderRadius: "1.2rem",
              padding: ".2rem",
              boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem"
              }}
            >
              <Stack>
                <Typography lineHeight={0} color='#af70e1'><withdrawalTradingCRYPTONoticeData.icon sx={{ fontSize: "2rem" }} /></Typography>
              </Stack>
              <Stack>
                <Typography>{withdrawalTradingCRYPTONoticeData.heading}</Typography>
                <Typography color='#af70e1'>{withdrawalTradingCRYPTONoticeData.content}</Typography>
              </Stack>
            </CardContent>
            <CardContent>
              <Typography
                sx={{
                  cursor: "pointer",
                  lineHeight: 0
                }}
                onClick={() => setRemove(true)}><CloseOutlinedIcon /></Typography>
            </CardContent>
          </Card>
        </Container>
      }
    </Stack>
  )
}

export default WithdrawalTradingCRYPTONotice;