import React from 'react'

const Botton = ({ text, bgColor, textColor, hendel = () => { } }) => {
          return (
                    <div className={` ${textColor}, ${bgColor} cursor-pointer py-2 px-4 hover:scale-105 duration-300  relative `}> {text}


                    </div>
          )
}

export default Botton
