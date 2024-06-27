"use client";
import React from 'react'

function Work() {
  return (
    <section className="text-center mb-16 mb-1 flex space-y-reverse justify-evenly items-center flex-row-reverse gap-20">
    <div className="pre-back" id="pre-back">
      <img
        className="background mx-auto w-%40 h-%40 object-cover mix-blend-darken"
        src="https://i.pinimg.com/564x/ef/86/d8/ef86d83e08e6086f4f13a6ef6eeb9765.jpg"
        alt="Sarah"
      />
    </div>
    <div>
      <h2 className="text-3xl font-bold">Hey, I'm Sarah!</h2>
      <p className="text-xl mt-4">
        I create meaningful connections through engaging content
      </p>
      <button className="bg-pink-500 text-white  px-4 mt-2 rounded hover:bg-pink-700">Let's Work Together!</button>
    </div>
  </section>
  )
}

export default Work