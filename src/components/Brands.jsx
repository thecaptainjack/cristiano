import React from 'react'
import urusu from "../images/brurusu.jpg"
import footwear from "../images/brfootwear.jpg"
import perfume from "../images/brperfume.jpg"
import avacr from "../images/bravan.jpg"
import era from "../images/brerakulls.jpg"


const Brands = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-black text-white no-scrollbar">
      <section className='relative snap-start flex flex-col  justify-center py-0 px-4 h-screen'>
        <img src={urusu} className='w-full h-screen object-cover opacity-70' alt="" />
        <div className='absolute bottom-24 pl-10 'data-aos="fade-down">
          <h1 className='f'>URUSU</h1>
          <p>urusu is much more than water..Its inspiration to drink health  and a lifestyle</p>
          <div ></div>
        </div>
      </section>

      <section className='relative snap-start flex flex-col  justify-center py-0 px-4 h-screen'>
        <img src={footwear} className='w-full h-screen object-cover opacity-70' alt="" />
        <div className='absolute bottom-24 pl-10 ' >
          <h1 className='f'>CR7 Footwear</h1>
          <p>A new footwear line that further enriches the whole collection</p>
          <div ></div>
        </div>
      </section>
    
      

  <section className='relative snap-start flex flex-col  justify-center py-0 px-4 h-screen'>
        <img src={avacr} className='w-full h-screen object-cover opacity-70' alt="" />
        <div className='absolute bottom-24 pl-10 '>
          <h1 className='f'>AVACR7</h1>
          <p>Developed for CR7 and for athletes like you.</p>
          <div ></div>
        </div>
      </section>

       <section className='relative snap-start flex flex-col  justify-center py-0 px-4 h-screen'>
        <img src={era} className='w-full h-screen object-cover opacity-70' alt="" />
        <div className='absolute bottom-24 pl-10 '>
          <h1 className='f'>ERAKULIS</h1>
          <p>It is all in one wealness experience for fitness<br></br>and nutrirtian ,mental health</p>
          <div ></div>
        </div>
      </section>
      
      <section className='relative snap-start flex flex-col  justify-center py-0 px-4 h-screen'>
        <img src={perfume} className='w-full h-screen object-cover opacity-70' alt="" />
        <div className='absolute bottom-24 pl-10 '>
          <h1 className='f'>CR7 Fragrances</h1>
          <p>Define your own legacy with the NEW fragrance, Cristiano Ronaldo Legacy. A long-lasting woody aromatic amber scent,<br></br> inspired by Ronaldo's relentless drive and modern masculinity, this fragrance is a testament to greatness.</p>
          <div ></div>
        </div>
      </section>



    </div>
  )
}

export default Brands
