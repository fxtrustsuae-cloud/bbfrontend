import { Card, CardContent, Typography, Button, Box, Chip, Stack, Divider, Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { setAccountOpeningType } from "../globalState/userPanelState/myAccountState/myAccountSlice";
// import { useGetUserDataQuery } from "../globalState/userState/userStateApis";
import { Tooltip } from "@mui/material";


function OpenAccountPlanCards({
  groupId,
  title = "",
  tag = "",
  description = "",
  features = "",
  isRecommended,
  width,
  height,
  icon = "",
  leverage = "",
  planType,
  loading,
  verificationRequired,
  verificationRequiredTooltip
}) {

  const { selectedTheme } = useSelector(state => state.themeMode);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { activeMT5AccountType } = useSelector(state => state.mt5)

  const handleSelectPlan = () => {
    // dispatch(setAccountOpeningType("Real"))
    // const formattedPlan = `${planType.toLowerCase()}_${title.toLowerCase().replace(/\s+/g, "_")}`;
    // navigate(`/client/newAccount/newAccountForm/${formattedPlan}`, { state: { id: groupId } });
    navigate("/client/newAccount/newAccountForm", { state: { id: groupId, features, title, leverage } })
  };

  return (
    <Card
      sx={{
        border: isRecommended ? theme => `2px solid ${theme.palette.primary.main}` : "1px solid #ddd",
        "&:hover": { bgcolor: selectedTheme !== "dark" && "#f6f6f6" },
        borderRadius: 3,
        textAlign: "center",
        minWidth: width,
        height: height
      }}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
        <Stack sx={{ gap: "1.2rem" }}>
          <Typography variant="h6" fontWeight="bold">{loading ? <Skeleton /> : title}</Typography>
          {
            loading ?
              <Skeleton />
              :
              <Chip
                label={tag}
                icon={icon && <icon.type sx={{ color: isRecommended ? "white !important" : "black !important", fontSize: "1.2rem !important" }} />}
                variant="outlined"
                sx={{
                  bgcolor: isRecommended ? "primary.main" : "#ebedee",
                  color: isRecommended ? "white" : "black",
                  border: "none",
                  display: "inline-flex",
                  alignSelf: "center"
                }}
              />
          }
          <Typography variant="body1" color="textSecondary">{loading ? <Skeleton height={"50px"} /> : description}</Typography>
        </Stack>
        <Stack gap={"1rem"}>
          {loading ?
            <Box>
              <Box>
                <Divider />
                <Stack sx={{ flexDirection: "row", justifyContent: "space-between", my: ".7rem" }}>
                  <Skeleton width={"100px"} />
                  <Skeleton width={"100px"} />
                </Stack>
                <Divider />
                <Stack sx={{ flexDirection: "row", justifyContent: "space-between", my: ".7rem" }}>
                  <Skeleton width={"100px"} />
                  <Skeleton width={"100px"} />
                </Stack>
                <Divider />
                <Stack sx={{ flexDirection: "row", justifyContent: "space-between", my: ".7rem" }}>
                  <Skeleton width={"100px"} />
                  <Skeleton width={"100px"} />
                </Stack>
              </Box>
            </Box>
            :
            <Box>
              {Object.entries(features).map(([key, value], i) => (
                <Box key={i}>
                  <Divider />
                  <Stack sx={{ flexDirection: "row", justifyContent: "space-between", my: ".7rem" }}>
                    <Typography color="textSecondary">{key}</Typography>
                    <Typography fontWeight={"bold"}>{value}</Typography>
                  </Stack>
                </Box>
              ))}
            </Box>
          }
          {
            loading
              ?
              <Skeleton height={"50px"} />
              :
              // <Tooltip title={verificationRequiredTooltip}>
                < Button
                  variant="contained"
                  sx={{ borderRadius: 2, color: "white" }}
                  fullWidth
                  disabled={!verificationRequired}
                  onClick={handleSelectPlan}
                >
                  {!verificationRequired ? verificationRequiredTooltip : "Select Plan"}
                </Button>
              // </Tooltip>
          }
        </Stack>
      </CardContent>
    </Card >
  );
}

export default OpenAccountPlanCards;