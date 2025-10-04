"use client";

import React from "react";

const stories = [
"Awalnya kita hanyalah dua orang yang sekadar tahu, tanpa benar-benar saling mengenali. Lalu waktu membawa kita untuk saling mendekat, mengenal lebih dalam, dan menemukan arti dari kebersamaan.",
"Takdir kemudian menguji kita dengan jarak. Hari-hari penuh rindu, percakapan singkat yang terasa begitu berharga, serta doa-doa yang menjadi penguat di setiap malam. LDR membuat kita belajar arti sabar, percaya, dan setia.",
"Dan kini, semua penantian itu terbayar. Tidak ada lagi jarak, tidak ada lagi sekadar tahu. Karena hari ini aku benar-benar mengenalmu, memilikimu. Bersamamu, aku temukan rumah yang selama ini kucari."
];

export default function LoveStory() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-12 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-pink-600 mb-6 font-meowScript">
        Love Story
      </h2>

      <div className="relative border-l-2 border-gray-300">
        {stories.map((storie, idx) => (
          <div key={idx} className="mb-10 ml-6">
            {/* Heart icon */}
            <div className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-white border-2 border-pink-500 rounded-full">
              <span className="text-pink-500 text-xs">❤</span>
            </div>

            {/* Content */}
            <div className="bg-white shadow-md rounded-2xl p-5">
              <p className="text-gray-600 mt-2 leading-relaxed">{storie}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
