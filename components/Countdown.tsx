"use client";

import { useEffect, useState } from "react";

// Declare once outside component so it’s stable
const weddingDate = new Date("2025-10-12T00:00:00"); 

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    function calculateTimeLeft() {
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();

      if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    }

    // First update after mount
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []); // ✅ no dependencies → runs once on mount

  if (!timeLeft) {
    return null; // prevents hydration mismatch
  }

  return (
    <div className="text-xl md:text-3xl font-bold w-48 md:w-64 mb-4 flex gap-4 justify-center text-center text-white bg-pink-400 rounded-sm p-2">
      <div>
        <p>{timeLeft.days}</p>
        <p className="text-[9px] md:text-xs uppercase">Days</p>
      </div>
      <div>
        <p>{timeLeft.hours}</p>
        <p className="text-[9px] md:text-xs uppercase">Hours</p>
      </div>
      <div>
        <p>{timeLeft.minutes}</p>
        <p className="text-[9px] md:text-xs uppercase">Minutes</p>
      </div>
      <div>
        <p>{timeLeft.seconds}</p>
        <p className="text-[9px] md:text-xs uppercase">Seconds</p>
      </div>
    </div>
  );
}
