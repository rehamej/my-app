"use client";
import React from 'react'

function Certificates() {
  return (
    <section id="pre-services" className="text-center mb-16 bg-white pt-20 pb-20 w-full ">
    <h2 className="text-3xl font-bold text-center mb-8">My Certificates</h2>
    {/* <p className="text-lg mt-4 mx-auto max-w-4xl">
        Cozy up with another cup of coffee and learn more about how you,
        your team, or organization can go from being the industry influencer
        with real strategies and customized content with me.
    </p> */}
    <div className="services flex justify-around mt-10 gap-10 md:flex-nowrap flex-wrap md:flex-row flex-col">
        <div className="service flex flex-col items-center text-center flex-1 basis-1/3 justify-center order-1 ">
            <img src="https://i.ibb.co/VMcP0Y2/download.png" className="w-28 object-cover mb-4" />
            <h2 className="text-3xl sm:text-2xl md:text-xl mt-4">Certified Management Consultant (CMC)</h2>
        </div>
        <div className="service flex flex-col items-center text-center flex-1 basis-1/3 order-2">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0g-s_dsEmT744CKtqPqxsfOMTKR1O8gurxQ&s"
                alt="Content Creation"
                className="w-28 object-cover mb-4"
            />
            <h2 className="text-3xl sm:text-2xl md:text-xl mt-4">Content Marketing Certification by HubSpot Academy</h2>
        </div>
        <div className="service flex flex-col items-center text-center flex-1 basis-1/3 order-3">
            <img
                src="https://media.licdn.com/dms/image/D4E22AQGQyB9_8XrOVw/feedshare-shrink_2048_1536/0/1694051105333?e=2147483647&v=beta&t=dkbIq0LDP59VJFrMCn2tL9vX9iIw9LD7pF_ETZaYP-s"
                alt="Copywriting"
                className="w-28 object-cover mb-4"
            />
            <h2 className="text-3xl sm:text-2xl md:text-xl mt-4 ">Direct Response Copywriting Certification by AWAI (American Writers & Artists Institute)</h2>
        </div>
    </div>



</section>
  )
}

export default Certificates