import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router';
const navlinks = [
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

const ReponsiveMenu = ({ showMenu, setShowMenu }) => {
          return (
                    <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-50 flex h-full w-[80%] flex-col justify-between bg-[#88BAC0]/80 backdrop:blur-sm px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-e-3xl`}>
                              <div>
                                        <div className='flex items-center justify-start gap-3'>
                                                  <FaUserCircle className='size-10' />
                                                  <div>
                                                            <h1>Mello User</h1>
                                                            <h1 className='text-sm text-slate-500' >Premiun User</h1>
                                                  </div>

                                        </div>
                                        <nav className='mt-12'>
                                                  <ul className='space-y-4 text-sl text-black flex flex-col'>
                                                            {
                                                                      navlinks.map((data, i) => {
                                                                                return (
                                                                                          <li key={i} onClick={() => setShowMenu(false)}>
                                                                                                    <Link to={data.path} className='inline-block text-base font-semibold py-2 px-3 uppercase'>
                                                                                                              {data.title}
                                                                                                    </Link>
                                                                                          </li>

                                                                                )
                                                                      })}
                                                  </ul>

                                        </nav>


                              </div>
                              <div>
                                        <h1>Made with ❤ by Liton</h1>
                              </div>

                    </div >
          )
}

export default ReponsiveMenu
