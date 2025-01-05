import { motion } from "motion/react";
import { useEffect, useState } from "react";

const CountColumn = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-02-06T00:00:00"); // 6 February 2025

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        // If the countdown is over
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="flex gap-2 w-full mt-10 mb-20"
    >
      <div className="w-full bg-foreground rounded-xl text-yellow-900 p-4">
        <h2>{timeLeft.days}</h2>
        <h2>Hari</h2>
      </div>
      <div className="w-full bg-foreground rounded-xl text-yellow-900 p-4">
        <h2>{timeLeft.hours}</h2>
        <h2>Jam</h2>
      </div>
      <div className="w-full bg-foreground rounded-xl text-yellow-900 p-4">
        <h2>{timeLeft.minutes}</h2>
        <h2>Menit</h2>
      </div>
      <div className="w-full bg-foreground rounded-xl text-yellow-900 p-4">
        <h2>{timeLeft.seconds}</h2>
        <h2>Detik</h2>
      </div>
    </motion.div>
  );
};

export default CountColumn;
