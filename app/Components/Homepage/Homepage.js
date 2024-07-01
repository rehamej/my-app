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
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';


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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&family=Luxurious+Roman&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&family=Ultra&display=swap" rel="stylesheet" />
            </Head>

            <ThemeSwitcher/>
            <Nav/>

            <main className="container mx-auto mt-10 font-mono max-w-none sm:text-2xl">
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
