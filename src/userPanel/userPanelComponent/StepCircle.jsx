import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import { useGetUserProfileQuery } from "../../globalState/settings/profileSettingApi";

function StepCircle({ IconComponent }) {

    const theme = useTheme()

    const { token } = useSelector((state) => state.auth);
    const { data, isLoading } = useGetUserProfileQuery(undefined, {
        skip: !token,
        refetchOnMountOrArgChange: true,
    })

    const isKycVerified = !isLoading && data?.data?.isKycVerified

    const isEmailVerified = !isLoading && data?.data?.isEmailVerified
    const userName = !isLoading && data?.data?.name

    const stepsCompleted = [isEmailVerified, isKycVerified].filter(Boolean)

    const totalSteps = 2;
    const size = 60;
    const strokeWidth = 5;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const arcLength = circumference / totalSteps;
    const gap = 4;

    return (
        <Box sx={{ position: 'relative', width: size, height: size }}>
            <svg width={size} height={size}>
                {[...Array(totalSteps)].map((_, index) => {
                    const isCompleted = Array.isArray(stepsCompleted) && index < stepsCompleted.length;
                    return (
                        <circle
                            key={index}
                            cx={size / 2}
                            cy={size / 2}
                            r={radius}
                            fill="none"
                            stroke={isCompleted ? `${theme.palette.primary.main}` : "#e2e4e4"}
                            strokeWidth={strokeWidth}
                            strokeDasharray={`${arcLength - gap} ${circumference}`}
                            strokeDashoffset={-index * arcLength}
                        />
                    )
                })}
            </svg>
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <IconComponent sx={{ color: "primary.main" }} />
            </Box>
        </Box>
    )
}

export default StepCircle;