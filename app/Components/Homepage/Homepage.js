"use client";
import React, { useEffect } from 'react'
import Aboutme from '../Aboutme';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Head from 'next/head';
import '../../styles.css';
import Nav from '../Nav/Nav';
import Skills from '../Skills/Skills';
import Certificates from '../Certificates/Certificates';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';


function Homepage() {
    useEffect(() => {
        const splide = new Splide('.splide');
        const bar = document.querySelector('.my-slider-progress-bar');

        splide.on('mounted move', () => {
            const end = splide.Components.Controller.getEnd() + 1;
            const rate = Math.min((splide.index + 1) / end, 1);
            bar.style.width = `${100 * rate}%`;
        });

        splide.mount();
    }, []);



    return (
        <div className="">
            <Head>
                <title>Sarah's Creative Services</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav/>

            <main className="container mx-auto mt-10 font-mono">
                <Aboutme/>

                <Skills/>

                <Projects/>

                <Certificates/>


                <Footer/>
            </main>
        </div>
    );


}

export default Homepage;
