// import { Stack, Typography } from "@mui/material";
// import { useEffect, useState } from "react";

// const FortyDaysTimer = ({ isKycVerified }) => {

//   const startDate = new Date("2025-11-01T00:00:00").getTime();
//   const endDate = new Date(startDate + 90 * 24 * 90 * 90 * 1000).getTime();

//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {

//     let storedEnd = sessionStorage.getItem("fortyDaysTarget");

//     if (!storedEnd) {
//       sessionStorage.setItem("fortyDaysTarget", endDate);
//       storedEnd = endDate;
//     } else {
//       storedEnd = parseInt(storedEnd, 10);
//     }

//     const updateTimer = () => {
//       const now = new Date().getTime();
//       const distance = storedEnd - now;

//       if (distance <= 0) {
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//         sessionStorage.removeItem("fortyDaysTarget");
//         return;
//       }

//       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//       const hours = Math.floor(
//         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//       );
//       const minutes = Math.floor(
//         (distance % (1000 * 60 * 60)) / (1000 * 60)
//       );
//       const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//       setTimeLeft({ days, hours, minutes, seconds });
//     };

//     updateTimer();
//     const timer = setInterval(updateTimer, 1000);

//     return () => clearInterval(timer);
//   }, [endDate]);

//   return (
//     <Stack
//       sx={{
//         textAlign: "center",
//         fontSize: "24px",
//         fontWeight: "bold",
//         mt: isKycVerified ? "100px" : "25px",
//         gap: "15px",
//       }}
//     >
//       <Typography sx={{ fontSize: "1.1rem", fontWeight: "700" }}>
//         ⏳ Bumper offer
//       </Typography>

//       {timeLeft.days === 0 &&
//         timeLeft.hours === 0 &&
//         timeLeft.minutes === 0 &&
//         timeLeft.seconds === 0 ? (
//         <Typography
//           sx={{ fontSize: "1.5rem", fontWeight: "700", color: "red" }}
//         >
//           Offer expired!
//         </Typography>
//       ) : (
//         <Typography sx={{ fontSize: "1.5rem", fontWeight: "700" }}>
//           {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
//           {timeLeft.seconds}s
//         </Typography>
//       )}
//     </Stack>
//   );
// };

// export default FortyDaysTimer;











import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const FortyDaysTimer = ({ isKycVerified }) => {
  // ✅ Start date: 31 Dec 2025 (00:00:00)
  const startDate = new Date("2025-12-31T00:00:00").getTime();

  // ✅ 30 days duration
  const DURATION_DAYS = 30;
  const endDate = startDate + DURATION_DAYS * 24 * 60 * 60 * 1000;

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let storedEnd = sessionStorage.getItem("fortyDaysTarget");

    if (!storedEnd) {
      sessionStorage.setItem("fortyDaysTarget", endDate);
      storedEnd = endDate;
    } else {
      storedEnd = Number(storedEnd);
    }

    const updateTimer = () => {
      const now = Date.now();
      const distance = storedEnd - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        sessionStorage.removeItem("fortyDaysTarget");
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        ),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const isExpired =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <Stack
      sx={{
        textAlign: "center",
        mt: isKycVerified ? "100px" : "25px",
        gap: "15px",
      }}
    >
      <Typography sx={{ fontSize: "1.1rem", fontWeight: 700 }}>
        ⏳ Bumper offer
      </Typography>

      {isExpired ? (
        <Typography sx={{ fontSize: "1.5rem", fontWeight: 700, color: "red" }}>
          Offer expired!
        </Typography>
      ) : (
        <Typography sx={{ fontSize: "1.5rem", fontWeight: 700 }}>
          {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
          {timeLeft.seconds}s
        </Typography>
      )}
    </Stack>
  );
};

export default FortyDaysTimer;