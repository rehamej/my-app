"use client";

import React from 'react'

function Projects() {
  return (
    <section className="text-center mb-26 " id="clients">
    <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
    <section className="text-center mb-26">
        <div className="splide">
            <div className="splide__track">
                <ul className="splide__list   text-3xl sm:text-xl">
                    <li className="splide__slide px-16 py-5">
                        <h3 className="mt-4  text-black">Digital Transformation Strategy for Small Businesses</h3>
                        <h3 className=" mt-4 ">
                            "Developed a comprehensive digital transformation strategy for a small retail business, 
                            leading to a 35% increase in online sales within six months. The project included market analysis, technology integration, 
                            and staff training to enhance digital capabilities and streamline operations."
                        </h3>
                    </li>

                    <li className="splide__slide px-16 py-5">
                        <h3 className="mt-4  text-black">Website Redesign for a Financial Services Company</h3>
                        <h3 className=" mt-4">
                            "Crafted persuasive and SEO-optimized copy for the complete redesign of a financial services company's website. The new content improved user experience, increased site traffic by 40%, and boosted conversion rates by 25% by clearly communicating the company's value propositions and services."
                        </h3>
                    </li>

                    <li className="splide__slide px-16 py-5">
                        <h3 className="mt-4  text-black">Engaging Social Media Campaign for a Tech Startup</h3>
                        <h3 className=" mt-4">
                            "Created and executed a dynamic social media campaign for a tech startup, resulting in a 50% increase in follower engagement and a 20% growth in lead generation. The campaign included compelling visuals, interactive content, and a series of informative blog posts tailored to the target audience."
                        </h3>
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

export default Projects