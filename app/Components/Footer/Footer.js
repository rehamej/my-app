"use client";

import React from 'react'

function Footer() {
  return (
    <section className="footer text-center mb-16 p-16 bg-white flex space-y-reverse justify-evenly items-center flex-row gap-20" id="contact">
    <img
        className=" mx-auto w-2/5 object-cover"
        src="https://i.pinimg.com/originals/b6/52/e7/b652e73698a9e7749989134db6d504a5.jpg"
        alt="Polaroid" />
    <div>
        <h2 className="text-2xl font-bold mt-4">So Nice to Meet You</h2>
        <p className="text-lg mt-4">
            I'm Sarah, the girl behind Sarah Creative Services. I'm fueled by
            my passion for helping others achieve intentional, creative, and
            engaging content. I'm here to help you with strategies tailored to
            your needs.
        </p>
        <button className="bg-pink-500 text-white  px-4 mt-4 rounded hover:bg-pink-700">Let's Be Friends</button>
    </div>
</section>
  )
}

export default Footer