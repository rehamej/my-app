"use client";

import React from 'react'

function Footer() {
  return (
    <section className="footer text-center mb-16 p-16 bg-white flex space-y-reverse justify-evenly items-center flex-row gap-20 sm:flex-nowrap flex-wrap" id="contact">
    <img
        className=" mx-auto w-2/5 object-cover"
        src="https://i.pinimg.com/736x/67/6a/be/676abe5401758a820006c8c4a2c55178.jpg"
        alt="Polaroid" />
    <div>
        <h2 className=" font-bold mt-4 text-4xl sm:text-3xl md:text-2xl">So Nice to Meet You!</h2>
        <p className=" mt-4 text-3xl sm:text-xl md:text-2xl font-thin">
        I am dedicated to helping others achieve their goals with personalized strategies tailored to your unique needs.
         With a commitment to excellence and a passion for delivering impactful results,
          I aim to provide the support and guidance you need to succeed.
        </p>
        <button className="mt-2  text-white px-6 py-2 rounded-3xl hover:bg-pink-700 transition duration-300">Let's Be Friends</button>
    </div>
</section>
  )
}

export default Footer