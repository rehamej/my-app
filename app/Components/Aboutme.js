"use client";
import React from 'react'

function Aboutme() {
  return (
    <section className="text-center mb-16 flex flex-wrap space-y-reverse justify-evenly items-center flex-row-reverse gap-20 ">
      <div className="pre-back order-first" id="pre-back">
        <img
          className="background mx-auto sm:w-%60 sm:h-%60 w-full h-full object-cover mix-blend-darken"
          src="https://i.pinimg.com/564x/ef/86/d8/ef86d83e08e6086f4f13a6ef6eeb9765.jpg"
          alt="Sarah"
        />
      </div>
      <div>
        <h2 className=" font-bold  md:text-5xl">Hey, I'm Sarah!</h2>
        <p className=" mt-4 text-3xl sm:text-2xl md:text-xl">
          I create meaningful connections through engaging content
        </p>
        <button className=" mt-2  text-white px-6 py-2 rounded-3xl hover:bg-pink-700 transition duration-300">Let's Work Together!</button>
      </div>
    </section>
  )
}

export default Aboutme;
