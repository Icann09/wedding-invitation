"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const photos = [
  { src: "/photo1.jpeg", alt: "Couple photo 1" },
  { src: "/photo3.jpeg", alt: "Couple photo 3" },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-2xl mx-auto text-center py-16 px-4 flex items-center flex-col">
      <h2 className="text-3xl md:text-5xl font-bold text-pink-600 mb-6 font-meowScript">Our Memories</h2>
      <p className="text-gray-600 mb-8">A glimpse of US 💕</p>

      <div className="relative w-[300px] h-[500px] overflow-hidden rounded-lg shadow-lg">
        {photos.map((photo, idx) => (
          <Image
            key={idx}
            src={photo.src}
            alt={photo.alt}
            fill
            className={`object-cover object-center transition-opacity duration-1000 ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
