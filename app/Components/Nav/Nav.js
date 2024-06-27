"use client";

import React from 'react'

function Nav() {
  return (
    <nav className="bg-white py-5 shadow-md">
    <div className="container flex justify-center items-center mx-auto px-4">
        <h2 className="text-2xl font-bold">Sarah's Creative Services</h2>
        <ul className="flex items-center gap-8 text-lg">
            <li><a href="#pre-back">About</a></li>
            <li><a href="#pre-services">Work</a></li>
            <li><a href="#clients">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>🛒</li>
        </ul>
    </div>
</nav>
  )
}

export default Nav