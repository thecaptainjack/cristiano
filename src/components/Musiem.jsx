import React from 'react'
import heroimg from "../images/Screenshot 2025-08-10 150319.png"
import m2 from "../images/m2.jpg"
import m3 from "../images/m3.jpg"
import tropies from '../images/mtropies.jpg'
import mbg from "../images/mbg2.jpg"
import mblogo from '../images/mbgcover.png'

const Musiem = () => {
    return (
        <div className="bg-black text-white">

            {/* HERO */}
            <section className="relative">
                <img src={heroimg} className="w-full min-h-[70vh] md:h-screen object-cover opacity-50" data-aos="fade-down" />
                <div className="absolute bottom-10 left-4 md:bottom-20 md:left-10 max-w-[90%]">
                    <h1 className="text-2xl md:text-5xl font-bold tracking-wider" data-aos="fade-right">CR7 LIFE MUSEUM</h1>
                    <h1 className="text-xl md:text-5xl font-bold tracking-wider" data-aos="fade-right">HONG KONG</h1>
                    <p className="mt-2 md:w-1/2 text-sm" data-aos="fade-right">
                        This is my journey, my career, my life. An exclusive view, stories never told before. A unique experience.
                    </p>
                    <div className="flex flex-col sm:flex-row mt-4 md:mt-8 text-lg font-bold" data-aos="fade-up" data-aos-duration="1000">
                        <button className="bg-lime-400 text-black m-2 px-4 py-2 rounded-3xl hover:scale-110 transition-transform">GET TICKET WITH KLOOK</button>
                        <button className="bg-lime-400 text-black m-2 px-4 py-2 rounded-3xl hover:scale-110 transition-transform">GET TICKET WITH EXPRESS 11</button>
                        <button className="bg-lime-400 text-black m-2 px-4 py-2 rounded-3xl hover:scale-110 transition-transform">GET TICKET WITH TRIPSET</button>
                    </div>
                </div>
            </section>

            {/* WHAT'S INSIDE */}
            <section className="px-4 md:px-32 mt-10">
                <div className="text-center" data-aos="fade-down">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-widest">WHAT'S INSIDE?</h3>
                    <p className="text-xs md:text-sm">
                        Capture my passion for football, experience the journey through my career: the places, the people,
                        the trophies, the memories. This is my life, inside and outside the field, and can only be seen at the
                        Life Museum in Hong Kong.
                    </p>
                </div>

                {/* CARDS */}
                <div className="flex flex-col md:flex-row justify-around mt-8 gap-6">
                    <div className="card w-full md:w-1/4 relative overflow-hidden rounded-xl" data-aos="fade-left">
                        <img src={m2} alt="" className="w-full h-64 object-cover transition-transform hover:scale-125 duration-1000" />
                        <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                            <h3 className="text-lg font-bold">Life & Career Timeline</h3>
                            <p className="text-xs mt-2">Walk through my journey and discover more about my story and career.</p>
                        </div>
                    </div>
                    <div className="card w-full md:w-1/4 relative overflow-hidden rounded-xl" data-aos="fade-up">
                        <img src={tropies} alt="" className="w-full h-64 object-cover opacity-50 transition-transform hover:scale-125 duration-1000" />
                        <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                            <h3 className="text-lg font-bold">Trophies</h3>
                            <p className="text-xs mt-2">See the highlighted trophies that I won by club and individually.</p>
                        </div>
                    </div>
                    <div className="card w-full md:w-1/4 relative overflow-hidden rounded-xl" data-aos="fade-right">
                        <img src={m3} alt="" className="w-full h-64 object-cover transition-transform hover:scale-125 duration-1000" />
                        <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                            <h3 className="text-lg font-bold">UR7 YouTube Studio</h3>
                            <p className="text-xs mt-2">Take a photo at my UR7 YouTube studio.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER CTA */}
            <section className="mt-20 px-4 text-center">
                <img src={mbg} className="w-60 sm:w-96 mx-auto object-contain" alt="" />
                <img src={mblogo} className="w-52 sm:w-80 mx-auto object-contain mt-4" alt="" />
                <h1 className="mt-8 tracking-wider text-2xl md:text-3xl" data-aos="zoom-in" data-aos-duration="4000">Book Your Tickets Now !!!</h1>
                <div className="flex flex-col sm:flex-row justify-center mt-6 mb-10 text-lg font-bold">
                    <button className="bg-lime-400 text-black m-2 px-4 py-2 rounded-3xl hover:scale-110 transition-transform">GET TICKET WITH KLOOK</button>
                    <button className="bg-lime-400 text-black m-2 px-4 py-2 rounded-3xl hover:scale-110 transition-transform">GET TICKET WITH EXPRESS 11</button>
                    <button className="bg-lime-400 text-black m-2 px-4 py-2 rounded-3xl hover:scale-110 transition-transform">GET TICKET WITH TRIPSET</button>
                </div>
            </section>
        </div>
    )
}

export default Musiem
