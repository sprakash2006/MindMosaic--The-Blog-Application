import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const Features = [
    {"id":1,
      "title":"Expert Research, Simplified",
      "feature": "We explain new-age tech without drowning you in jargon."
    },
    {"id":2,
      "title":"Future-Focused Content",
      "feature": "Every article explores what’s next and why it matters."
    },
    {"id":3,
      "title":"comprehensive approach",
      "feature": "We cover innovations from Silicon Valley to Tokyo’s robotics labs."
    },
    {"id":4,
      "title":"Useful Tangible Takeaways",
      "feature": "Understand trends you can apply in business, study, or career growth."
    }
  ];

  return (
    <>
      <div className='flex flex-col justify-center items-center pt-[14vw] pb-54'>
        <div className='flex flex-col justify-center items-center'>
          <p className='font-bold text-gray-900 text-6xl'>Explore Tomorrow, Today!</p>
          <p className='px-75 pt-10 font-medium text-center'>The future isn’t coming — it’s already here. At MindMosaic, we bring you powerful stories, in-depth analysis, and easy-to-understand insights into the world’s most groundbreaking technologies. From AI that thinks like a human to quantum computers that break traditional limits, our mission is simple: decode the future and put it in your hands.</p>
          <Link to='/Explore' className='px-8 py-2 rounded-[25px] border-blue-800 font-mono font-extrabold mt-15 text-2xl border-3 hover:bg-blue-800 hover:text-white duration-[1s] '>Explore Future Tech</Link>
        </div>
        <div className='flex flex-col justify-center items-center pt-[15vw]'>
          <p className='font-bold text-gray-900 text-5xl'>Why Read Us ?</p>
          <div className='px-[10vw] flex gap-4 pt-[6vw]'>
            {Features.map((Feature,index) => {
              return(
                <div key={index} className=' flex flex-col flex-wrap justify-between border-1 border-dashed hover:border-dotted rounded-3xl px-6 py-4 hover:scale-102 cursor-pointer duration-[1s] bg-amber-50 '>
                  <h1 className=' text-center font-semibold text-[1.5rem]'>{Feature.title}</h1>
                  <p className='pt-2'>{Feature.feature}</p>
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Home
