import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import NewsLetterBox from './../components/NewsLetterBox';

const contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'Contact'} text2={'Us'}/>
      </div>
      
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
        <div className="flex flex-col justify-center items-start gap-6 ">
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-600'>54709 Williams Station <br/>Suite 340, Washington, USA</p>
          <p className='text-gray-600'>Tel : +1 223948 39482 <br/>Email : contact@forever.com </p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-600'>Learn more about teams and job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default contact
