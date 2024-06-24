import React from 'react'
import './Button.css'
import './upibutton.css'
const AnimatedButton = () => {
  return (
    <>
      <div className='flex md:justify-between justify-center items-center flex-col gap-4 md:flex-row'>
        <div>
        <button className="uiverse">
            <div className="wrapper">
              <span>Your Balance: 1000</span>
              <div className="circle circle-12" />
              <div className="circle circle-11" />
              <div className="circle circle-10" />
              <div className="circle circle-9" />
              <div className="circle circle-8" />
              <div className="circle circle-7" />
              <div className="circle circle-6" />
              <div className="circle circle-5" />
              <div className="circle circle-4" />
              <div className="circle circle-3" />
              <div className="circle circle-2" />
              <div className="circle circle-1" />
            </div>
          </button>
        </div>
        <div>
          <button className='btn'> Your upi: 1234567890@ybl
          </button>
        </div>

      </div>

    </>
  )
}

export default AnimatedButton