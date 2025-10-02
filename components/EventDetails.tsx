"use client";

export default function EventDetails() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center px-3 py-10 mt-4 md:mt-8 text-black">
      {/* Header */}
      <div id="info" className="max-w-3xl text-center">
        <h3 className="text-3xl md:text-5xl font-bold mb-2">
          بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
        </h3>
        <blockquote className="italic text-lg text-gray-700 border-l-4 border-pink-400 pl-4 my-6">
      &quot;Love is not about how many days, months, or years you have been together. 
      Love is about how much you love each other every single day.&quot;
    </blockquote>
        {/* Nama Mempelai */}
        <div className="py-14 flex flex-col gap-5 md:gap-7">
          <div>
            <div className="text-3xl md:text-6xl  text-pink-600 font-meowScript font-bold mb-1">
              <h1>Riska Handayani, S.Ak</h1>
              <h1 className="text-2xl md:text-4xl">(Ekha)</h1>
            </div>
            <p>(Anak Pertama dari Bapak. (Alm) Raninu dan Ibu. Kudusiah, S.Pd)</p>
          </div>
          <h1 className="text-6xl flex justify-center items-center">🩷</h1>
          <div>
            <div className="text-3xl md:text-6xl  text-pink-600 font-meowScript font-bold mb-1">
              <h1>Muhlis</h1>
              <h1 className="text-2xl md:text-4xl">(Ulis)</h1>
            </div>
              <p>(Anak Pertama dari Bapak. la Saleko dan Ibu. Wa Sumina)</p>
            </div>
        </div>
        {/* Tanggal dan tempat */}
        <h2 className="text-2xl md:text-5xl font-bold font-meowScript mb-5">Minggu, 12 Oktober 2025</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
            <div className="p-4 border rounded-lg shadow-sm">
              <h3 className="font-semibold">Akad Nikah</h3>
              <div className="mt-2 text-gray-600">
                <p>Kediaman Mempelai Wanita</p>
                <p>Jl. Ir. Soekarno, Desa Ghonsume</p>
                <p>(Belakang Kantor Lurah Wapunto)</p> 
              </div>       
              <p className="mt-2 text-pink-600 font-semibold">Pukul 09:30 WITA s/d selesai</p>
              <a
                href="#"
                className="mt-4 inline-block bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
              >
                Klik untuk membuka peta
              </a>
            </div>
            <div className="p-4 border rounded-lg shadow-sm">
              <h3 className="font-semibold">Penjamuan</h3>
              <div className="mt-2 text-gray-600">
                <p>Kediaman Mempelai Pria</p>
                <p>Jl. Sutan Syahrir Kel. Wapunto</p>
                <p>(Samping Lorong SMPN 1 Duruka) </p> 
              </div>       
              <p className="mt-2 text-pink-600 font-semibold">Pukul 13:00 WITA s/d selesai</p>
              <a
                href="#"
                className="mt-4 inline-block bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
              >
                Klik untuk membuka peta
              </a>
            </div>
          </div>
        <p className="text-gray-700 mt-1">
          Dengan segala hormat kami bermaksud untuk mengundang
          Bapak/Ibu, Saudara/i untuk hadir pada acara pernikahan kami.
        </p>
      </div>
    </section>
  );
}
