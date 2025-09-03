import React from 'react';
import allogo from '../images/alnasar-removebg-preview.png';
import alcr from '../images/Cristiano_Ronaldo-removebg-preview.png';
import portlog from '../images/portugallogo-removebg-preview.png';
import portcr from '../images/portugal-removebg-preview.png';
import alv from "../videos/alv.mp4";
import alp from "../videos/alp.mp4";

const Carrier = () => {
  return (
    <div className="bg-black text-white no-scrollbar overflow-y-scroll snap-y snap-mandatory">
      
      {/* -------- Al Nassr -------- */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 snap-start px-4 min-h-screen py-12 md:py-0">
        <img src={allogo} alt="Al-Nassr Logo" 
             className="w-36 md:w-1/2 mx-auto mt-6 md:mt-44" />

        <div className="relative overflow-hidden h-80 md:h-auto">
          <video
            src={alv}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full absolute inset-0 object-cover grayscale transition-transform duration-700 ease-in-out hover:scale-125"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 font-bold text-yellow-300">
            <h2 className="mb-6 text-3xl md:text-4xl tracking-widest">AL-NASSR</h2>
            <h2>Goals: <span>74</span></h2>
            <h2>Assists: <span>16</span></h2>
            <h2>Hat-tricks: <span>6</span></h2>
            <h2>Matches: <span>77</span></h2>
          </div>
        </div>

        <img src={alcr} alt="Cristiano Ronaldo Al-Nassr"
             className="mx-auto h-72 md:h-4/5 mt-4 md:mt-16" />
      </section>

      {/* -------- Portugal -------- */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 snap-start px-4 min-h-screen py-12 md:py-0">
        <img src={portcr} alt="Cristiano Ronaldo Portugal"
             className="mx-auto h-72 md:h-auto mt-6 md:mt-12" />

        <div className="relative overflow-hidden h-80 md:h-auto">
          <video
            src={alp}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full absolute inset-0 object-cover grayscale transition-transform duration-700 ease-in-out hover:scale-125"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 font-bold text-red-600">
            <h2 className="mb-6 text-3xl md:text-4xl tracking-widest">PORTUGAL</h2>
            <h2>Goals: <span>130</span></h2>
            <h2>Assists: <span>45</span></h2>
            <h2>Hat-tricks: <span>10</span></h2>
            <h2>Matches: <span>212</span></h2>
          </div>
        </div>

        <img src={portlog} alt="Portugal Logo"
             className="w-36 md:w-3/4 mx-auto mt-6 md:mt-20" />
      </section>
    </div>
  );
};

export default Carrier;
