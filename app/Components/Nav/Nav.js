"use client";

import React from 'react'

function Nav() {
  return (
    <nav className="bg-white py-5 text-center rounded-lg shadow-lg">
    <div className="container flex justify-center items-center mx-auto px-4 ">
        <h2 className=" sm:text-5xl  text-5xl font-bold">Sarah's Creative Services</h2>
        <ul className="flex items-center gap-8 text-2xl sm:text-3xl md:text-xl">
            <li><a href="#pre-back">About me</a></li>
            <li><a href="#pre-services">Skills</a></li>
            <li><a href="#clients">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>🛒</li>
        </ul>
    </div>
</nav>
  )
}

export default Nav