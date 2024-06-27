"use client";
import React from 'react'

function Services() {
  return (
    <section id="pre-services" className="text-center mb-16 bg-white pt-20 pb-20 w-full">
    <h2 className="text-2xl font-bold">Marketing Services</h2>
    <p className="text-lg mt-4 mx-auto max-w-4xl">
        Cozy up with another cup of coffee and learn more about how you,
        your team, or organization can go from being the industry influencer
        with real strategies and customized content with me.
    </p>
    <div className="services flex justify-around mt-10">
        <div className="service flex flex-col items-center text-center">
            <img src="https://i.ibb.co/mFJh9V9/Screenshot-2024-06-25-010806.png" className="w-24 h-24 rounded-full object-cover" />
            <h4 className="text-xl mt-4">Consulting</h4>
            <button className="bg-pink-500 text-white px-4 mt-2 rounded hover:bg-pink-700">Learn More</button>
        </div>
        <div className="service flex flex-col items-center text-center">
            <img
                src="https://i.pinimg.com/564x/4b/90/ae/4b90ae61f7f5ac88dc1ef24e20ffca74.jpg"
                alt="Content Creation"
                className="w-24 h-24 rounded-full object-cover"
            />
            <h4 className="text-xl mt-4">Content Creation</h4>
            <button className="bg-pink-500 text-white  px-4 mt-2 rounded hover:bg-pink-700">Let's Do It</button>
        </div>
        <div className="service flex flex-col items-center text-center">
            <img
                src="https://i.pinimg.com/564x/99/8e/77/998e77e378dddad503d39d878bda759e.jpg"
                alt="Copywriting"
                className="w-24 h-24 rounded-full object-cover"
            />
            <h4 className="text-xl mt-4">Copywriting</h4>
            <button className="bg-pink-500 text-white  px-4 mt-2 rounded hover:bg-pink-700">I'm In</button>
        </div>
    </div>
</section>
  )
}

export default Services