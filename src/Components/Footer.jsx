import React from 'react'

import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { div } from 'motion/react-client';
const data = [
          {
                    id: 1,
                    title: 'Home',
                    link: '#/homet',
          },
          {
                    id: 2,
                    title: 'About',
                    link: '#/about',
          },
          {
                    id: 3,
                    title: 'Contact',
                    link: '#/contact',
          }
          ,
          {
                    id: 4,
                    title: 'Blog',
                    link: '#/blog',
          }
]

const Footer = () => {
          return (
                    <div className='bg-gray-900 text-white'>
                              <div className='container py-12'>
                                        <div className='grid md:grid-cols-3 pb-4 pt-5 items-center'>
                                                  <div>
                                                            <a href="#" className='font-bold text-2xl sm:text-4xl flex gap-2 font-handeriting'>
                                                                      Nike shops

                                                            </a>
                                                            <p className='text-gray-600 lg:pr-24 pt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi omnis iusto culpa similique ipsum, laudantium adipisci eveniet vitae debitis atque.</p>
                                                            <p className='text-gray-500 capitalize mt-4 '>Made with 💖 by the coding Journey</p>
                                                  </div>
                                                  <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                                                            <div className='py-8 px-4'>
                                                                      <h1 className='text-2xl font-bold  mb-4'>Important Links</h1>
                                                                      <ul className='space-y-4'>
                                                                                {
                                                                                          data.map((link) => {
                                                                                                    return (
                                                                                                              <div key={link.id} className='space-y-4'>
                                                                                                                        <a href={link.link} className='text-gray-600 hover:text-black duration-300 dark:hover:text-white'>{link.title}</a>

                                                                                                              </div>
                                                                                                    )
                                                                                          })
                                                                                }
                                                                      </ul>

                                                            </div>
                                                            <div className='py-8 px-4'>
                                                                      <h1 className='text-2xl font-bold  mb-4'>Important Links</h1>
                                                                      <ul className='space-y-4'>
                                                                                {
                                                                                          data.map((link) => {
                                                                                                    return (
                                                                                                              <div key={link.id} className='space-y-4'>
                                                                                                                        <a href={link.link} className='text-gray-600 hover:text-black duration-300 dark:hover:text-white'>{link.title}</a>

                                                                                                              </div>
                                                                                                    )
                                                                                          })
                                                                                }
                                                                      </ul>

                                                            </div>

                                                            <div className='py-8 px-4 col-span-2  sm:col-auto'>
                                                                      <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
                                                                      <div>
                                                                                <div className='flex items-center gap-3'>
                                                                                          <a href="#"><FaLocationArrow /></a>
                                                                                          <p>Dhaka , Uttar <br /> Pradesh</p>
                                                                                </div>
                                                                                <div className='flex items-center gap-3 mt-3'>
                                                                                          <a href="#"><FaMobileAlt /></a>
                                                                                          <p>0177755654645</p>
                                                                                </div>
                                                                                <div className='flex items-center gap-3  mt-6 '>
                                                                                          <FaInstagram className='text-3xl hover:text-primary duration-300' />
                                                                                          <FaFacebook className='text-3xl hover:text-primary duration-300' />
                                                                                          <FaLinkedin className='text-3xl hover:text-primary duration-300' />
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                  </div>


                                        </div>
                                        <hr />
                                        <div className='text-center text-gray-500 py-4'>
                                                  <p>&copy; CoypRight || 2024 Nike Shops. All rights reserved.</p>
                                        </div>

                              </div >
                    </div>
          )
}


export default Footer

