import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from './../components/NewsLetterBox';


const about = () => {
  return (

    
    <div>
      <div className="text-2xl text-center pt-8 border-t ">
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>

      <div className="my-10  flex flex-col md:flex-row gap-16">
              <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem adipisci inventore error! Ipsum, amet magni veniam ea vero corrupti. Voluptas deleniti sequi repellendus optio facere praesentium aspernatur eaque natus possimus! Enim inventore harum excepturi cum natus accusantium libero labore alias?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam temporibus odio libero quasi minus tenetur sit at commodi laboriosam doloremque laborum enim, ab, voluptatibus quaerat!</p>
                <b className='text-gray-800'>Our Misssion</b>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsum eaque ipsa cumque in deleniti. Id sed delectus tenetur facilis!</p>
          </div>

      </div>
          <div className="text-2xl py-4 ">

                  <Title text1={'WHY'} text2={'CHOOSE US'}/>
          </div>

        <div className="flex flex-col md:flex-row text-sm mb-20">
            <div className='px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                  <b>Quality Assurance:</b>
                  <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque repellat libero esse eos quod fugit.</p>
            </div>
            <div className='px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                  <b>Convenience:</b>
                  <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque eos quod fugit.</p>
            </div>
            <div className='px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                  <b>Exceptional Customer Service:</b>
                  <p className='text-gray-600'>Lorem amet consectetur adipisicing elit. Itaque repellat libero esse eos quod fugit.</p>
            </div>
        </div>
        <NewsLetterBox/>
        
    </div>
  )
}

export default about

//  ES7+ React/Redux/React-Native snippets (dsznajder)
// ✅ Prettier - Code formatter
// ✅ ESLint
// ✅ Path Intellisense