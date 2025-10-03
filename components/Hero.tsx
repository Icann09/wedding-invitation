"use client";

import { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaEnvelopeOpen, FaPause, FaPlay } from "react-icons/fa";

type HeroProps = {
  guest?: string | null; // optional guest
  onOpen: () => void;
  isOpen: boolean; // 👈 track whether invitation is open
};

export default function Hero({ guest, onOpen, isOpen }: HeroProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto play music when invitation is opened
  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [isOpen]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative flex flex-col w-[500px] min-h-screen pt-10 pb-16 items-center justify-between text-center bg-[url('/hero.png')] bg-cover bg-center text-white text-shadow-black">
      <div>
        <h1 className="font-dmSerif text-pink-600">The Wedding Of </h1>
        <h2 className="text-5xl md:text-6xl font-bold my-4 font-meowScript text-pink-600">
          Ekha & Ulis
        </h2>
      </div>

      <div className="mb-10 flex flex-col items-center">

        <p className="text-sm">Kepada Yth.</p>
        <p className="font-meowScript font-bold text-2xl text-pink-500">
          {guest ? `${guest} & Partner` : "Tamu Undangan"}
        </p>

        {/* Invitation button */}
        <button
          onClick={onOpen}
          className="mt-4 font-semibold flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg hover:bg-white/30 transition"
        >
          {isOpen ? (
            <>
              <FaEnvelopeOpen className="text-pink-500" /> Undangan Terbuka
            </>
          ) : (
            <>
              <FaEnvelope className="text-pink-500" /> Buka Undangan
            </>
          )}
        </button>

        {/* Music controls only visible when open */}
        {isOpen && (
          <button
            onClick={toggleMusic}
            className="fixed w-12 h-12 right-12 bottom-5 mt-3 flex items-center justify-center gap-2 px-3 py-1 bg-black/30 rounded-full hover:bg-white/30 transition"
          >
            {isPlaying ? (
              <>
                <FaPause className="text-pink-500" /> 
              </>
            ) : (
              <>
                <FaPlay className="text-pink-500" /> 
              </>
            )}
          </button>
        )}

        <p className="text-[9px] mt-2">
          Mohon maaf apabila ada kesalahan penulisan nama/gelar
        </p>
      </div>

      {/* Hidden audio element */}
      <audio ref={audioRef} loop src="/music.mp3" />
    </section>
  );
}
