import Countdown from "./Countdown";
import { FaEnvelope, FaEnvelopeOpen } from "react-icons/fa";

type HeroProps = {
  guest?: string | null; // optional guest
  onOpen: () => void;
  isOpen: boolean; // 👈 track whether invitation is open
};

export default function Hero({ guest, onOpen, isOpen }: HeroProps) {
  return (
    <section
      className="flex flex-col w-[500px] min-h-screen pt-10 pb-16 items-center justify-between text-center bg-[url('/hero.png')] bg-cover bg-center text-white text-shadow-black"
    >
      <div>
        <h1 className="font-dmSerif text-pink-600">The Wedding Of </h1>
        <h2 className="text-5xl md:text-6xl font-bold my-4 font-meowScript text-pink-600">Ekha & Ulis</h2>
      </div>

      <div className="mb-10 flex flex-col items-center">
        <Countdown />
        <p className="text-sm">Kepada Yth.</p>
        <p className="font-meowScript font-bold text-2xl text-pink-500">
          {guest ? `${guest} & Partner` : "Tamu Undangan"}
        </p>

        {/* Invitation button with icon */}
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

        <p className="text-[9px] mt-2">
          Mohon maaf apabila ada kesalahan penulisan nama/gelar
        </p>
      </div>
    </section>
  );
}
