import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setHasTimedOut,
  removeDepositQRData,
  setCountdownEndTime
} from '../../globalState/walletState/walletStateSlice';

const COUNTDOWN_DURATION = 1 * 60 * 1000;

function CountdownTimer() {
  const dispatch = useDispatch();
  const hasTimedOut = useSelector(state => state.wallet.hasTimedOut);
  const countdownEndTime = useSelector(state => state.wallet.countdownEndTime);

  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (hasTimedOut) {
      setTimeLeft(0);
      return;
    }

    let endTime = countdownEndTime;

    if (!endTime) {
      endTime = Date.now() + COUNTDOWN_DURATION;
      dispatch(setCountdownEndTime(endTime));
    }

    const updateTimer = () => {
      const now = Date.now();
      const difference = Math.max(0, Math.floor((endTime - now) / 1000));
      setTimeLeft(difference);

      if (difference <= 0) {
        clearInterval(timer);
        dispatch(setHasTimedOut(true));
        dispatch(removeDepositQRData());
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [dispatch, hasTimedOut, countdownEndTime]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <Box sx={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
      <Typography>Time Left:</Typography>
      <Typography fontSize={"1.2rem"} fontWeight={600} color={hasTimedOut ? 'error' : 'text.primary'}>
        {hasTimedOut ? 'Time Out' : formatTime(timeLeft)}
      </Typography>
    </Box>
  );
}

export default CountdownTimer;