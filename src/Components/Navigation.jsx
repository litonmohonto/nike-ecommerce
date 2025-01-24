import React, { useState } from 'react'
import logo from "../../src/assets/logo2.png"
import { Link } from 'react-router'
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import ReponsiveMenu from './ReponsiveMenu';

const navlink = [
          {
                    id: 1,
                    title: 'Home',
                    path: '/home',
          },
          {
                    id: 2,
                    title: 'mens',
                    path: '/mens',
          },
          {
                    id: 3,
                    title: 'womens',
                    path: '/womens',
          },
          {
                    id: 4,
                    title: 'kids',
                    path: '/kids',
          },
          {
                    id: 5,
                    title: 'Contact',
                    path: '/contact',
          },
]

const Navigation = () => {
          const [showMenu, setShowMenu] = useState(false)
          const handleToggleMenu = () => {
                    setShowMenu(!showMenu)
          }
          return (
                    <div className=' py-4 text-white'>
                              <div className='container'>
                                        <div className='flex justify-between items-center'>
                                                  {/* logo section */}
                                                  <div>
                                                            <img src={logo} alt="" className='max-w-[100px] invert' />
                                                  </div>
                                                  {/* manu section  */}
                                                  <div className='hidden md:block'>
                                                            <ul className='flex gap-4 items-center relative z-40'>
                                                                      {
                                                                                navlink.map((data) => {
                                                                                          return (
                                                                                                    <div key={data.id}>
                                                                                                              <li> <Link to={data.path} className='inline-block text-base font-semibold py-2 px-3 uppercase'>{data.title}</Link></li>
                                                                                                    </div>
                                                                                          )
                                                                                })}
                                                                      <Link to='/card'>
                                                                                <button className='text-xl ps-14 '> <LuShoppingCart /></button>
                                                                      </Link>
                                                                      <Link>
                                                                                <button className='text-xl ps-8 '><FaRegUser /></button>
                                                                      </Link>
                                                            </ul>

                                                  </div>
                                                  {/* mobile menu */}
                                                  <div className='md:hidden flex gap-8 z-50'>
                                                            <Link  >
                                                                      <button to={'/card'} className='text-xl ps-14 font-bold '> <LuShoppingCart /></button>
                                                            </Link>

                                                            <div >
                                                                      {
                                                                                showMenu ? (<IoClose onClick={handleToggleMenu} className='cursor-pointer transition-all z-50 md:hidden size-30' />) :
                                                                                          (<HiOutlineMenuAlt3 onClick={handleToggleMenu} className='cursor-pointer transition-all z-50 md:hidden size-30' />)
                                                                      }

                                                            </div>

                                                  </div>

                                        </div>
                                        <ReponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />

                              </div>

                    </div >

          )
}

export default Navigation
