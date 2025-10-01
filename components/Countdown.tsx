"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2025-10-12T00:00:00");

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = weddingDate.getTime() - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    // Run first update after mount
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // While waiting for client mount, render nothing (avoids hydration mismatch)
  if (!timeLeft) {
    return null;
  }

  return (
    <div className="mb-4 flex gap-4 justify-center text-center text-white font-mono bg-black/30 rounded-sm ">
      <div>
        <p className="text-3xl font-bold">{timeLeft.days}</p>
        <p className="text-xs uppercase">Days</p>
      </div>
      <div>
        <p className="text-3xl font-bold">{timeLeft.hours}</p>
        <p className="text-xs uppercase">Hours</p>
      </div>
      <div>
        <p className="text-3xl font-bold">{timeLeft.minutes}</p>
        <p className="text-xs uppercase">Minutes</p>
      </div>
      <div>
        <p className="text-3xl font-bold">{timeLeft.seconds}</p>
        <p className="text-xs uppercase">Seconds</p>
      </div>
    </div>
  );
}
