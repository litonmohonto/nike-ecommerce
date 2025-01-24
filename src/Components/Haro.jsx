import React, { useState } from 'react'
import img1 from '../assets/Shoes1.png'
import img2 from '../assets/Shoes2.png'
import img3 from '../assets/Shoes3.png'
import { motion } from 'motion/react'
import Navigation from './Navigation'



const hero = [
          {
                    id: 1,
                    title: "Jordan Luke 3 PF",
                    img: img1,
                    sub: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat labore vero rem maxime deleniti esse quisquam aliquam cumque deserunt sed",
                    price: '$40',
                    prices: '$45',
                    modal: "Spoets",
                    bgcolor: "#138695"
          },
          {
                    id: 2,
                    title: "Nike g.t Cut 3 EP",
                    img: img2,
                    sub: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas! Ipsam, facilis repellat consequuntur vel expedita quidem cumque.",
                    price: '$60',
                    prices: '$85',
                    modal: "Spoets",
                    bgcolor: "#727272"
          },
          {
                    id: 3,
                    title: "Nike g.t cut academy ep",
                    img: img3,
                    sub: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque voluptatibus consequatur, commodi, magnam, nisi doloribus error architecto quisquam ea.",
                    price: '$35',
                    prices: '$45',
                    modal: "Spoets",
                    bgcolor: "#698869"
          }
]
const Haro = () => {
          const [activedata, setActivedata] = useState(hero[0])
          const heandler = (data) => {
                    setActivedata(data)

          }


          return (
                    <motion.section
                              initial={{ backgroundColor: activedata.bgcolor }}
                              animate={{ backgroundColor: activedata.bgcolor }}
                              transition={{ duration: 0.8 }}
                              className='bg-primary'
                    >
                              <Navigation />
                              <div className='grid  grid-cols-1 md:grid-cols-2 min-h-[650px] container place-items-center'>
                                        <div className='flex justify-center items-center py-14 md:py-0 xl:max-h-[500px] text-white order-2 md:order-1 '>
                                                  <div className='space-y-6 text-center md:text-left'>
                                                            <h1 className='text-3xl lg:text-6xl xl:text-7xl font-bold font-handeriting'>{activedata.title}</h1>
                                                            <p>{activedata.sub}</p>

                                                            <button className='px-4 py-2 bg-white rounded-md text-black inline-block font-normal hover:scale-105 duration-200'>Order Now</button>
                                                            <div className='flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb:10'>
                                                                      <div className='w-20 h-[1px] bg-white'></div>
                                                                      <p className='uppercase'>top Recommendtion</p>
                                                                      <div className='w-20 h-[1px] bg-white'></div>
                                                            </div>
                                                            <div className='grid grid-cols-3 gap-3 '>
                                                                      {
                                                                                hero.map((data) => {
                                                                                          return (
                                                                                                    <div key={data.id} className='cursor-pointer space-y-3 hover:scale-105 duration-200 transition-all' onClick={() => heandler(data)}>
                                                                                                              <div className='flex justify-center'>
                                                                                                                        <img src={data.img} alt="" className={`w-[80px] ${activedata.img === data.img ? "opacity-100 scale-110 " : "opacity-50"}`} />
                                                                                                              </div>
                                                                                                              <div className='text-center !mt-6 space-y-1'>
                                                                                                                        <p className='line-through text-base opacity-50'>{data.prices}</p>
                                                                                                                        <p className='text-xl font-bold'>{data.price}</p>
                                                                                                              </div>

                                                                                                    </div>
                                                                                          )
                                                                                })}
                                                            </div>
                                                  </div>

                                        </div>

                                        <div className='order-1 md:order-2 flex flex-col justify-end items-center relative'>
                                                  <img src={activedata.img} alt="" className='w-[300px] md:w-[200px] lg:w-[600px] -rotate-45 z-10' />
                                        </div>
                              </div>


                    </motion.section >
          )


}

export default Haro
