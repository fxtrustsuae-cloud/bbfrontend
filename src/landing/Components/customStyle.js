import { keyframes } from "@mui/material";

export const verticalMove = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-40px);
  }
`


export const testimonials = keyframes`
  0% {
    transform: translate(-50%, -50%) translateY(0);
  }
  50% {
    transform: translate(-50%, -50%) translateY(-10px);
  }
  100% {
    transform: translate(-50%, -50%) translateY(0);
  }
`;