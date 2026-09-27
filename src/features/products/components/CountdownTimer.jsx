import { useEffect, useState } from "react";
import styles from "./CountdownTimer.module.css";

const calculateTimeLeft = (targetDate) => {
  const difference = new Date(targetDate).getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const pad = (num) => String(num).padStart(2, "0");

const TimeUnit = ({ value, label }) => {
  return (
    <div className={styles.unit}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{pad(value)}</span>
    </div>
  );
};

const CountdownTimer = ({ targetDate, onEnd }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      const next = calculateTimeLeft(targetDate);
      setTimeLeft(next);

      if (
        next.days === 0 &&
        next.hours === 0 &&
        next.minutes === 0 &&
        next.seconds === 0
      ) {
        clearInterval(interval);
        if (onEnd) onEnd();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, onEnd]);

  return (
    <div className={styles.timer}>
      <TimeUnit value={timeLeft.days} label="Days" />
      <span className={styles.colon}>:</span>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <span className={styles.colon}>:</span>
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <span className={styles.colon}>:</span>
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;