import React from 'react'
import { assets } from '../assets/frontend_assets/assets';
const Hero = () => {
  return (


      
    // <div className='hero-section'>
    //      <hr />
    //   <div className="hero-details">
            
    //         <div className='hero-text'>
    //           {/* <hr /> */}

    //               <p>_________ Our Best Seller _______</p>
    //               <h1>Latest Arrivals</h1>
    //               <p>___________ Shop Now __________</p>
    //           {/* <hr /> */}
    //         </div>

    //         <img src={assets.hero_img} width="55%"/>

    //   </div>
    // </div>





    
    <div className='flex flex-col sm:flex-row border-gray-400'>
       {/* Hero Left side */}
         <hr />
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
            
            <div className="text-[#414141]">
              
                <div className="flex items-center gap-2">
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>Our Best Seller</p>
                </div>
                <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                <div className="flex items-center gap-2 ">
                  <p className='font-semibold text-sm md:text-base'>Shop Now</p>
                   <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>

                </div>
            </div>

          {/* Hero right side */}
      </div>
          <img className="w-full sm:w-1/2 " src={assets.hero_img} alt="" />

    </div>
  )
}

export default Hero
