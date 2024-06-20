import React from 'react'
import LoginCube2 from './LoginCube2'
const HomeCard = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6 bg-white">
        <div className="text-center mb-10 md:ml-36">
          <h2 className="font-lora text-[#0d3b66]  text-2xl md:text-4xl tracking-tight font-bold ">
            Discover the Thrill of Dice Kings
          </h2>
        </div>
        <div className="flex flex-col md:flex-row">
          {/* can help image */}
          <div className="mr-0 md:mr-8 mb-6 md:mb-0">
            <div className="w-1/2 md:w-full mx-auto">
              <LoginCube2 />
            </div>
          </div>
          {/* end can help image */}
          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl text-lg space-y-4 leading-relaxed">
                <h3 className="text-2xl font-bold text-md mb-6 font-lora">
                  🎲 Engaging Gameplay:
                </h3>
                <p className='font-lora'>

                  Enjoy the classic world of Ludo with a modern twist. Challenge
                  friends or compete globally.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl text-lg space-y-4 leading-relaxed">
                <h3 className="text-2xl font-bold text-md mb-6 font-lora">
                  💰 Payment Collection:
                </h3>
                <p className="font-lora">
                  {" "}
                  Experience seamless and secure payments, making it easy to enter
                  matches and claim winnings.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl text-lg space-y-4 leading-relaxed">
                <h3 className="text-2xl font-bold text-md mb-6 font-lora">
                  🎲 Betting Mechanics:
                </h3>
                <p className="font-lora">
                  Feel the adrenaline rush of betting on your Ludo skills. Outsmart
                  opponents to win prizes!and dice
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl text-lg space-y-4 leading-relaxed">
                <h3 className="text-2xl font-bold text-md mb-6 font-lora">
                  🔒 Secure & Fair Play
                </h3>
                <p className="font-lora">
                  We prioritize security and fair play with robust anti-fraud
                  measures and transparent game mechanics.

                </p>
              </div>
            </div>
            {/* <div className="w-full sm:w-1/2 mb-4 px-2 ">
        <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl text-lg space-y-4 leading-relaxed">
          <h3 className="text-2xl font-bold text-md mb-6">
          🕹️ User-Friendly Interface:
          </h3>
          <p className="">
          We prioritize security and fair play with robust anti-fraud
          measures and transparent game mechanics.
          </p>
        </div>
      </div> */}
          </div>
        </div>
      </div>


    </>
  )
}

export default HomeCard