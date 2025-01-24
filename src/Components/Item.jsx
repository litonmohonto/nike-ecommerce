import React from 'react'
import { Link } from 'react-router'

const Item = ({ data }) => {
          return (
                    <div className='group relative'>
                              <Link to={`/data/${data?.id}`}>
                                        <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none grup-hover:opacity-75 lg:h-80 h-96'>
                                                  <img src={data?.image} alt={data?.name} className='h-full w-full object-cover object-center lg:h-full lg:w-full' />
                                        </div>
                              </Link>
                              <div className='mt-4 flex justify-between'>
                                        <div>
                                                  <h3 className='text-sm text-gray-700'>
                                                            <Link to={`/data/${data?.id}`}>
                                                                      <span aria-hidden="true" className='inset-0'>{data?.name}</span>
                                                            </Link>
                                                  </h3>
                                        </div>
                                        <p className='text-sm font-medium text-gray-900'>${data?.new_price}</p>
                              </div>
                    </div>
          )
}

export default Item
