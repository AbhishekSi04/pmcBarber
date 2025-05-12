import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import HighlightedText from '../components/core/HomePage/HighlightedText'
import CTAButton from '../components/core/HomePage/CTAButton';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import hero from '../assets/Logo/hero.webp'
import Footer from '../components/common/Footer'
import { getAllReviews } from '../services/operations/otherServices';
import reviews_content from '../data/reviews_content';
import PricingSection from '../components/core/HomePage/PricingSection';


const Home = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllReviews = async () => {
      setLoading(true);
      const response = await getAllReviews();
      console.log("reviews_content",reviews_content);
      if (response) {
        setReviews(response);
      }
      setLoading(false);
    }
    fetchAllReviews();
  }, [])


  return (
    <div className=' bg-richblack-900 flex flex-col font-inter min-h-screen w-screen'>

      {/* Section 1 - Black color section */}
      <div className='bg-richblack-900' >
        <div className=' relative mx-auto flex flex-col items-center justify-between  w-11/12 max-w-maxContent text-white gap-8' >


          <div className='rounded-full bg-richblack-800 text-richblack-200 mt-16 p-1 mx-auto w-fit drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] group transition-all duration-200 hover:scale-95 hover:drop-shadow-none '>
            <Link to={'/signup'}>
              <div className=' flex flex-row items-center gap-2 font-bold rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900 '>
              Premium Barber Services in Denton
                <FaArrowRight />
              </div>
            </Link>
          </div>

          <div className='text-4xl text-center font-semibold' >
          Classic Cuts, Modern Style
          <br/>
            <HighlightedText text={'Premium Barber Shop'} />
          </div>

          <div className='-mt-3 w-11/12 text-center text-lg text-richblack-300 font-bold'>
            <p className='' >At PMC Barbershop, we combine traditional barbering techniques with modern styling to give you the perfect look. Our experienced barbers deliver precision cuts, beard grooming, and relaxing hot towel shaves in a classic barbershop atmosphere.</p>
          </div>

          <div className='mt-8 flex flex-row gap-7' >
            <CTAButton active={true} linkto={'/signup'} >
              Learn More
            </CTAButton>

            <CTAButton active={false} linkto={'/login'} >
              Book a Demo
            </CTAButton>
          </div>

          <div className='mx-3 my-7 transition-all duration-200 shadow-[10px_-5px_50px_-5px] shadow-blue-200' >
            <img className='drop-shadow-[20px_20px_rgba(255,255,255)] rounded-md' src={hero} />
          </div>



          {/* Unlock the power of code */}
          <ExploreMore />
        </div>
      </div>

      {/* Section 2 - White color section */}
      {/* <div className='bg-pure-greys-5 text-richblue-700' >
        <div className='homepage_bg h-[150px] md:h-[320px]'>
          <div className='w-11/12 pt-[50px] md:pt-[200px] max-w-maxContent mx-auto flex justify-center' >
            <div className='flex flex-row gap-7' >
              <CTAButton active={true} linkto={'/signup'} >
                <div className='flex flex-row items-center gap-2' >
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>

              <CTAButton active={false} linkto={'/login'} >
                <div className='text-white' >Learn More</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className='flex flex-col max-w-maxContent w-11/12 mt-5 md:mt-10 lg:mt-16 mx-auto gap-8 items-center justify-between' >
          <div className='flex flex-row mb-10 justify-between gap-10' >
            <div className='text-4xl font-semibold w-[45%]' >
              Get the skills you need for a
              <HighlightedText text="job that is in demand." />
            </div>

            <div className='flex flex-col gap-10 w-[40%] items-start'>
              <p>The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>
              <CTAButton active={true} linkto={'/signup'} >
                Learn More
              </CTAButton>
            </div>
          </div>

          <TimelineSection />
          <LearningLanguageSection />
        </div>
      </div> */}


      {/* Section 3 - Black color section */}
      <div className='bg-richblack-900' >
        <div className='w-11/12 mt-60 flex flex-col mx-auto max-w-maxContent items-center justify-between gap-8 text-white' >


          {/* Review section */}
          <div>
            <h2 className='text-center text-3xl md:text-4xl font-semibold mt-8' >
            What Our Clients Say
            </h2>


            {reviews_content.map((section, idx) => (
  <div key={idx}>
    {section.courses.map((course, index) => (
      <div
        key={index}
        className='flex flex-col gap-3 h-[80%] p-6 border-b-2 border-dashed border-richblack-400'
      >
        <h2 className='font-semibold text-xl text-richblack-800'>
          {/* No heading in your data, so we can skip this or show tag */}
          
        </h2>
        <h2 className='text-richblack-400'>{course.description}</h2>

        <div
          className={`flex flex-row justify-between px-6 py-3 font-medium ${
            course.description ? 'text-blue-300' : 'text-richblack-300'
          }`}
        >
          <div className='flex flex-row items-center gap-2 text-base'>
            {course.level}
          </div>

          <div className='text-yellow-400'>
            {"★".repeat(course.Stars)}{"☆".repeat(5 - course.Stars)}
          </div>
        </div>
      </div>
    ))}
  </div>
            ))}


            


          </div>

          <PricingSection />

        </div>



      </div>

      {/* Section 4 - Footer section */}
      <div >
        <Footer />
      </div>


    </div>
  )
}

export default Home
