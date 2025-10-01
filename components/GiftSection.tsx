"use client";

import { useState } from "react";
import Image from "next/image";

export default function GiftSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };
  return (
    <section className="w-full max-w-xl mx-auto text-center py-16 px-4 text-black">
      <h2 className="text-4xl font-bold text-pink-600 mb-6 font-meowScript">Wedding Gifts</h2>
      <p className="text-gray-600 mb-6">
        Your presence is the most precious gift to us 💖.  
        If you wish to give a gift, here are some options:
      </p>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-2xl font-meowScript mb-4">Bank Transfer</h2>
        {/* BRI */}
        <div className="flex items-center justify-between border p-4 rounded mb-4">
          <div className="flex items-center gap-2">
            <Image src="/bri.png" alt="BRI" width={80} height={40} />
          </div>
          <button
            onClick={() => copyToClipboard("305501054297538")}
            className="bg-pink-600 text-white px-3 py-1 rounded flex items-center gap-1"
          >
            📋 Salin
          </button>
        </div>
        <p className="text-sm mb-6">305501054297538 A/n RISKA HANDAYANI</p>

        {/* Mandiri */}
        <div className="flex items-center justify-between border p-4 rounded mb-4">
          <div className="flex items-center gap-2">
            <Image src="/mandiri.png" alt="Western Union" width={80} height={40} />
          </div>
          <button
            onClick={() => copyToClipboard("1620007027927")}
            className="bg-pink-600 text-white px-3 py-1 rounded flex items-center gap-1"
          >
            📋 Salin
          </button>
        </div>
        <p className="text-sm mb-6">1620007027927 A/n MUHLIS</p>

        {/* Address */}
        <h2 className="text-2xl font-meowScript mb-4">Kirim Hadiah</h2>
        <p className="font-semibold">Alamat:</p>
        <p className="mb-4">
          Jl. Ir. Soekarno, Desa Ghonsume (Belakang Kantor Lurah Wapunto)
        </p>
        <p className="font-semibold">Nama Penerima:</p>
        <p className="mb-6">Riska Handayani</p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/6285342974984?text=Halo%20saya%20sudah%20transfer%20kado%20untuk%20pernikahan"
          target="_blank"
          className="bg-pink-600 text-white px-4 py-2 rounded flex items-center justify-center gap-2"
        >
          💬 Konfirmasi Whatsapp
        </a>

        {/* Copy alert */}
        {copied && (
          <p className="mt-4 text-pink-600 text-sm">
            {copied} berhasil disalin ✅
          </p>
        )}
      </div>
    </section>
  );
}
