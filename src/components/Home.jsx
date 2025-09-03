import React, { useState, useEffect } from 'react';
import heroimg from "../images/hero-bg.jpg";
import cr7Video from "../videos/herovideo.mp4";
import ballondor from "../images/ballondor.jpg";
import champions from "../images/championsleague.jpg";
import boot from "../images/goldenboot.jpg";
import supercup from "../images/uefasupercup.jpg";
import topscorrer from "../images/topgoalscorrer.jpg";
import nations from "../images/nationleague.jpg";

const titles = [
  "FOOTBALLER",
  "INFLUENCER",
  "ENTREPRENEUR",
  "RECORD-BREAKER",
  "ICON"
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-black text-white no-scrollbar">

      {/* 🔝 Hero Section */}
      <section className="snap-start flex flex-col items-center justify-center py-6 px-4 h-screen">
        <img
          src={heroimg}
          alt="Cristiano Ronaldo"
          className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-4xl rounded-lg shadow-lg object-cover"
        />
        <h1 className="font-bold text-center tracking-wider mt-1 text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
          CRISTIANO  RONALDO
        </h1>
        <h1 className="text-yellow-400 font-bold transition duration-75 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          {titles[index]}
        </h1>
      </section>

      {/* 🎥 Video Section */}
      <section className="snap-start relative w-full h-screen overflow-hidden flex items-center justify-center">
        <video
          src={cr7Video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-70"
        />
      </section>

      {/* 🏆 Trophy Section 1 */}
      <section className="snap-start bg-gradient-to-r from-black via-gray-900 to-black text-white h-screen flex flex-col md:flex-row items-center justify-center px-4 gap-10">
        <div className="w-full sm:w-2/3 md:w-1/3 lg:w-1/4 relative overflow-hidden rounded-xl">
          <img src={ballondor} alt="" className="w-full h-auto object-contain md:object-cover opacity-50 transition-transform duration-1000 hover:scale-125" />
          <div className="absolute bottom-0 left-0 w-full p-4">
            <h3 className="text-2xl sm:text-3xl font-bold">5x Ballondor</h3>
          </div>
        </div>

        <div className="w-full sm:w-2/3 md:w-1/3 lg:w-1/4 relative overflow-hidden rounded-xl">
          <img src={champions} alt="" className="w-full h-auto object-contain md:object-cover opacity-50 transition-transform duration-1000 hover:scale-125" />
          <div className="absolute bottom-0 left-0 w-full p-4">
            <h3 className="text-2xl sm:text-3xl font-bold">5× UEFA Champions League</h3>
          </div>
        </div>

        <div className="w-full sm:w-2/3 md:w-1/3 lg:w-1/4 relative overflow-hidden rounded-xl">
          <img src={boot} alt="" className="w-full h-auto object-contain md:object-cover opacity-50 transition-transform duration-1000 hover:scale-125" />
          <div className="absolute bottom-0 left-0 w-full p-4">
            <h3 className="text-2xl sm:text-3xl font-bold">4× European Golden Shoe</h3>
          </div>
        </div>
      </section>

      {/* 🏆 Trophy Section 2 */}
      <section className="snap-start bg-gradient-to-r from-black via-gray-900 to-black text-white h-screen flex flex-col md:flex-row items-center justify-center px-4 gap-10">
        <div className="w-full sm:w-2/3 md:w-1/3 lg:w-1/4 relative overflow-hidden rounded-xl">
          <img src={supercup} alt="" className="w-full h-auto object-contain md:object-cover opacity-50 transition-transform duration-1000 hover:scale-125" />
          <div className="absolute bottom-0 left-0 w-full p-4">
            <h3 className="text-2xl sm:text-3xl font-bold">3× UEFA Super Cup</h3>
          </div>
        </div>

        <div className="w-full sm:w-2/3 md:w-1/3 lg:w-1/4 relative overflow-hidden rounded-xl">
          <img src={topscorrer} alt="" className="w-full h-auto object-contain md:object-cover opacity-50 transition-transform duration-1000 hover:scale-125" />
          <div className="absolute bottom-0 left-0 w-full p-4">
            <h3 className="text-2xl sm:text-3xl font-bold">All-Time Top Goalscorer 900+ career goals</h3>
          </div>
        </div>

        <div className="w-full sm:w-2/3 md:w-1/3 lg:w-1/4 relative overflow-hidden rounded-xl">
          <img src={nations} alt="" className="w-full h-auto object-contain md:object-cover opacity-50 transition-transform duration-1000 hover:scale-125" />
          <div className="absolute bottom-0 left-0 w-full p-4">
            <h3 className="text-2xl sm:text-3xl font-bold">1× UEFA Nations League</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
