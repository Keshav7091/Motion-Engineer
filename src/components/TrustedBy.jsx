import React from 'react'
import AnimatedCounter from '../components/AnimatedCounter';


const TrustedBy = () => {

  const clientLogos = [
  {
    id: 1,
    name: "Client 1",
    image: "src/assets/Adidas.jpg",
  },
  {
    id: 2,
    name: "Client 2",
    image: "src/assets/casio.webp",
  },
  {
    id: 3,
    name: "Client 3",
    image: "src/assets/adidas.webp",
  },
  {
    id: 4,
    name: "Client 4",
    image: "src/assets/casio.webp",
  },
  {
    id: 5,
    name: "Client 5",
    image: "src/assets/adidas.webp",
  },
  {
    id: 6,
    name: "Client 6",
    image: "src/assets/casio.webp",
  },
  {
    id: 7,
    name: "Client 7",
    image: "src/assets/adidas.webp",
  },
  {
    id: 8,
    name: "Client 8",
    image: "src/assets/casio.webp",
  },
  
];

const review = [
  {
    id: 1,
    name: "Brand",
    count: 250,
    icon: "+",
  },
  {
    id: 2,
    name: "Years Experience",
    count: 10,
  },
  {
    id: 3,
    name: "Projects Completed",
    count: 1000,
    icon: "+",
  },
]

  return (
    <section className="py-24 bg-black-theme-rich">
      <div className='container mx-auto px-4 md:px-6'>
        <div className='text-center max-w-3xl mx-auto mb-16 opacity-100 transform-none'>
          <h2 className='text-sm uppercase tracking-widest text-[#dfff59] mb-4 font-montserrat'>Our Clients</h2>
          <h3 className='text-3xl md:text-4xl font-bold font-montserrat mb-6 tracking-tight text-white-theme-pure'>Trusted by Industry Leaders</h3>
          <p className='text-gray-light font-roboto'>We're proud to collaborate with innovative brands across industries to deliver exceptional creative solutions.</p>
        </div>

        <div className='py-12'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='bg-white rounded-xl p-8 md:p-10 shadow-md opacity-100'>
              <div className='text-center mb-12'>
                <h2 className='text-2xl md:text-3xl font-bold text-black font-montserrat mb-2'>Our Trusted Partners</h2>
                <p className='text-gray-600 font-roboto'>We're proud to collaborate with these amazing brands</p>
                <div className='w-24 h-1 bg-[#dfff59] mx-auto mt-4'></div>
              </div>

              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-10 items-center justify-items-center'>
                  {clientLogos.map((client) => (
                    <div key={client.id} className="h-20 sm:h-24 md:h-28 w-full flex items-center justify-center p-3 sm:p-4 bg-white rounded-lg border border-gray-300 hover:border-[#dfff59] transition-all duration-300 shadow-[0_3px_10px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)]"
 style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 6px", opacity: 1,transform: "none",}}>
                      <div className='w-full h-full flex items-center justify-center overflow-hidden' style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }}>
                        <img
                          src={client.image}
                          alt={client.name}
                          className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className='mt-12 text-center p-8 rounded-xl'>
              <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16'>
                {review.map((item) => (
                  <AnimatedCounter
                    key={item.id}
                    end={item.count}
                    icon={item.icon}
                    name={item.name}
                  />
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
