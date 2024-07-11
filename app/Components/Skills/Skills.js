"use client";
import React from 'react'

function Skills() {
  return (
    <section id="pre-services" className="text-center mb-16 bg-white pt-20 pb-20 w-full ">
    <h2 className=" font-bold text-center mb-8  text-3xl sm:text-4xl md:text-2xl">My Skills</h2>
    <p className=" mt-4 mx-auto max-w-4xl text-3xl sm:text-2xl md:text-2xl">
    Discover how innovative approaches and personalized solutions can transform your vision into a reality, 
    positioning you as a leader in your industry. Explore the potential for growth and success with me.
    </p>
    <div className="services flex justify-evenly mt-10  md:flex-nowrap flex-wrap md:flex-row flex-col text-3xl sm:text-xl gap-12">
        <div className="service flex flex-col items-center text-center ">
            <img src="https://i.ibb.co/mFJh9V9/Screenshot-2024-06-25-010806.png" className="sm:w-24 sm:h-24 w-48 h-48 rounded-full object-cover shadow-lg" />
            <h4 className=" mt-4 font-semibold text-center ">Consulting</h4>
            {/* <button className="bg-pink-500 text-white px-4 mt-2 rounded hover:bg-pink-700">Learn More</button> */}
        </div>
        <div className="service flex flex-col items-center text-center ">
            <img
                src="https://i.pinimg.com/564x/4b/90/ae/4b90ae61f7f5ac88dc1ef24e20ffca74.jpg"
                alt="Content Creation"
                className="sm:w-24 sm:h-24 w-44 h-44 rounded-full object-cover shadow-lg"
            />
            <h4 className=" mt-4 font-semibold text-center">Content Creation</h4>
            {/* <button className="bg-pink-500 text-white  px-4 mt-2 rounded hover:bg-pink-700">Let's Do It</button> */}
        </div>
        <div className="service flex flex-col items-center text-center ">
            <img
                src="https://i.pinimg.com/564x/99/8e/77/998e77e378dddad503d39d878bda759e.jpg"
                alt="Copywriting"
                className="sm:w-24 sm:h-24 w-44 h-44 rounded-full object-cover shadow-lg"
            />
            <h4 className=" mt-4 font-semibold text-center">Copywriting</h4>
            {/* <button className="bg-pink-500 text-white  px-4 mt-2 rounded hover:bg-pink-700">I'm In</button> */}
        </div>
    </div>



</section>
  )
}

export default Skills