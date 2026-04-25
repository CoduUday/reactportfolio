import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import pfp from "../assets/pfp.jpg"
import mail from "../assets/mail.svg"
import calendar from "../assets/calendar.svg"
import location from "../assets/location.svg"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import cloud from "../assets/icon-cloud.png"
import design from "../assets/icon-design.png"
import cat from "../assets/cat.jpg"

const Home = () => {
    return <>
        <div className='flex justify-center items-center gap-5 w-screen'>
            <div className="leftside bg-[#1e1e20] p-5 border border-[#383838] rounded-lg">
                <div className="left-top flex flex-col justify-center items-center gap-5">

                    <img className='rounded-lg' width={100} height={100} src={pfp} alt="" />
                    <h1 className='name text-white'>Uday Lawand</h1>
                    <div className="capsule px-5 py-2 rounded-lg bg-[#2b2b2e] text-white poppins text-sm">Web Developer</div>
                    <div className="separator h-px bg-[#383838] mb-5 w-full"></div>
                </div>

                <div className="left-mid">
                    <ul className='flex flex-col gap-5'>
                        <li className='flex gap-2'>
                            <div className="icon flex justify-center items-center p-4 rounded-lg"><img width={22} height={22} src={mail} alt="" /></div><div className="text flex flex-col"><p className='text-[#909090] text-sm poppins '>EMAIL</p><p className='text-white poppins'>udaylawand5@gmail.com</p></div>
                        </li>
                        <li className='flex gap-2'>
                            <div className="icon flex justify-center items-center p-4 rounded-lg"><img width={22} height={22} src={calendar} alt="" /></div><div className="text flex flex-col"><p className='text-[#909090] text-sm poppins '>BIRTHDAY</p><p className='text-white poppins'>Nov 16, 2007</p></div>
                        </li>
                        <li className='flex gap-2'>
                            <div className="icon flex justify-center items-center p-4 rounded-lg"><img width={22} height={22} src={location} alt="" /></div><div className="text flex flex-col"><p className='text-[#909090] text-sm poppins '>LOCATION</p><p className='text-white poppins'>Pune,Maharastra <br />India </p></div>
                        </li>
                    </ul>
                    <div className="separator h-px bg-[#383838] my-5 w-full"></div>

                </div>


                <div className="left-bottom">
                    <div className="icons flex gap-5">
                        <a href="https://www.linkedin.com/in/uday-lawand-37a3a03a8/"><svg
                            className="w-5 fill-[#9f9f9f] hover:fill-[#0077B5] transition-colors duration-200"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <title>Logo Linkedin</title>
                            <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
                        </svg></a>
                        <a href="https://github.com/CoduUday"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5 fill-[#9f9f9f] hover:fill-[#0077B5] transition-colors duration-200"
                        >
                            <title>Logo Github</title>
                            <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
                        </svg></a>
                        <a href="https://www.instagram.com/uday_lawand_?igsh=ajBhYmFtbGRwc2k0"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5 fill-[#9f9f9f] hover:fill-[#0077B5] transition-colors duration-200"
                        >
                            <title>Logo Instagram</title>
                            <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path>
                            <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path>
                        </svg></a>
                    </div>
                </div>
            </div>
            <div className='my-10 rightside relative bg-[#1e1e20] w-4xl p-5 border border-[#383838] rounded-lg'>
                <Navbar></Navbar>
                <div className="animation">
                    <h2 className='mt-3.75 poppins text-3xl font-semibold text-white'>About Me</h2>
                    <div className="separation h-1.5 w-10 my-5 rounded-lg bg-[linear-gradient(to_right,hsl(45,100%,72%),hsl(35,100%,68%))]">
                    </div>
                    <div className="poppins text-[#d6d6d6] flex flex-col gap-4 text-md mb-10">
                    <p>
                        I’m Uday Lawand, a Computer Engineering student with a strong academic foundation and a growing passion for software development, problem-solving, and building impactful digital solutions. I have developed proficiency in languages such as Python, JavaScript, and C++, along with a solid understanding of core computer science subjects including Data Structures, Algorithms, Object-Oriented Programming, and Database Management Systems. </p>

                    <p>My technical journey is driven by curiosity and consistent practice. I actively work on coding problems and small projects to strengthen my logical thinking and development skills. I also have hands-on experience with tools and technologies like Git, React, Node.js, and basic backend development, which have helped me understand how applications are built and deployed. </p></div>

                    <div className='flex gap-4 flex-col'>
                    <h2 className='mt-3.75 poppins text-3xl font-semibold text-white'>What I'm Doing</h2>
                    <div className="skills flex flex-col gap-5">
                        
                        <div className='skill flex gap-2 p-5 border rounded-lg border-[#383838]'>
                            <img width={45} src={cloud} alt="" />
                            <div className='flex flex-col'>
                                <h3 className='poppins text-2xl text-white font-semibold'>Cloud Computing</h3>
                                <p className='poppins text-[#d6d6d6]'>Development of scalable and secure cloud computing solutions</p>
                            </div>
                        </div>
                        <div className='skill flex gap-2 p-5 border rounded-lg border-[#383838]'>
                            <img width={40} src={design} alt="" />
                            <div className='flex flex-col'>
                                <h3 className='poppins text-2xl text-white font-semibold'>Web design</h3>
                                <p className='poppins text-[#d6d6d6]'>The most modern and high-quality design</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>


}

export default Home
