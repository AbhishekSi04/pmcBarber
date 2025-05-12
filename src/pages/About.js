import React, { useEffect, useState } from 'react'
import HighlightedText from '../components/core/HomePage/HighlightedText'
import Footer from '../components/common/Footer'
import BannerImage1 from "../assets/Images/about.webp"
import { getAllReviews } from '../services/operations/otherServices';


const About = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllReviews = async () => {
      setLoading(true);
      const response = await getAllReviews();
      if (response) {
        setReviews(response);
      }
      setLoading(false);
    }
    fetchAllReviews();
  }, [])


  return (
    <div className='text-white' >
      {/* Section 1 */}
      <div className='bg-richblack-700' >
        <div className='relative w-11/12 mx-auto max-w-maxContent flex flex-col justify-between py-10' >
          <h1 className='text-center font-semibold  mx-auto lg:w-[70%] text-4xl' >
          <br/>
            <HighlightedText text={'About PMC Barbershop'} />
          </h1>

          <p className='mx-auto lg:w-[70%] mt-3 text-center font-medium text-richblack-300' >
          Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment
          </p>


        </div>
      </div>

      {/* Section 2 */}
      <div className='bg-richblack-900 border-b border-richblack-700' >
        <div className='mt-[100px] w-11/12 mx-auto max-w-maxContent flex flex-col justify-between' >
        </div>
      </div>

      {/* Section 3 */}
      <div className='bg-richblack-900'>
        <div className='w-11/12 mx-auto max-w-maxContent flex flex-col justify-between mt-10' >

          <div className='flex flex-col lg:flex-row items-center justify-between gap-10' >
            <div className='flex flex-col gap-10 lg:w-[50%] my-10' >
              <h1 className='text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045]' >Our Founding Story</h1>
              <p className='font-medium text-richblack-300 lg:w-[95%]' >Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.</p>

              <p className='font-medium text-richblack-300 lg:w-[95%]' >
              We take pride in our attention to detail and personalized service, ensuring each client leaves looking and feeling their best. Our skilled barbers combine traditional techniques with modern trends to create custom styles that suit each individual's personality and lifestyle.</p>
            </div>

            <div >
              <img src={BannerImage1} alt="" height={500} width={500} className='shadow-[0_0_20px_0] shadow-[#FC6767]' />
            </div>
          </div>


        </div>
      </div>

      

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default About
