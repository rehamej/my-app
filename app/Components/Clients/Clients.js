"use client";

import React from 'react'

function Clients() {
  return (
    <section className="text-center mb-26 " id="clients">
    <h2 className="text-2xl font-bold">What They're Saying</h2>
    <section className="text-center mb-26">
        <div className="splide">
            <div className="splide__track">
                <ul className="splide__list">
                    <li className="splide__slide">
                        <p className="text-lg mt-4">
                            "I chose Sarah because of her expertise and creativity with social
                            media. Since starting I have experienced great improvements!"
                        </p>
                        <p className="mt-4 text-lg text-black">- Kim, JAN-PRO of Charlotte</p>
                    </li>

                    <li className="splide__slide">
                        <p className="text-lg mt-4">
                            "Sarah's content strategies have transformed our online presence. Her unique approach and dedication have been a game changer for our business."
                        </p>
                        <p className="mt-4 text-lg text-black">- John, ABC Marketing</p>
                    </li>

                    <li className="splide__slide">
                        <p className="text-lg mt-4">
                            "Working with Sarah has been a pleasure. Her insights into content creation and marketing have helped us engage more effectively with our audience."
                        </p>
                        <p className="mt-4 text-lg text-black">- Lisa, XYZ Solutions</p>
                    </li>
                </ul>
            </div>
            <div className="my-slider-progress">
                <div className="my-slider-progress-bar"></div>
            </div>
        </div>
    </section>
</section>
  )
}

export default Clients