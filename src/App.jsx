import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Navigation2 from './Components/Navigation2'
import Productslist from './Components/Productslist'
import Contact from './Pages/Contact'
import Card from './Pages/Card'
import { UpdateFollower } from 'react-mouse-follower';


const router = createBrowserRouter([
          {
                    path: '/home',
                    element: <><Home /> <Footer /> </>
          },
          {
                    path: '/mens',
                    element: <><Navigation2 /> <Productslist category="men" /> <Footer /> </>
          },
          {
                    path: '/womens',
                    element: <><Navigation2 /> <Productslist category='women' /> <Footer /> </>
          },
          {
                    path: '/kids',
                    element: <><Navigation2 /> <Productslist category='kid' /> <Footer /> </>
          },
          {
                    path: '/card',
                    element: <><Navigation2 /> <Card /> <Footer /> </>
          },
          {
                    path: '/contact',
                    element: <><Navigation2 /> <Contact /> <Footer /> </>
          },

])

const App = () => {
          return (
                    <main>
                              <UpdateFollower
                                        mouseOptions={{
                                                  backgroundColor: "white",
                                                  zIndex: 10,
                                                  followSpeed: 1.5,
                                        }}>
                                        <RouterProvider router={router} />
                              </UpdateFollower>
                    </main>
          )
}

export default App
