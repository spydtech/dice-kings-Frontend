import React, { useEffect } from 'react'
import Terms from '../../../assets/Terms.svg'
import { Link } from 'react-router-dom'
import Casino from "../casino.gif"
const Term = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="relative flex  items-center max-w-screen-xl px-6 mx-auto md:flex-row p-8 bg-white flex-col-reverse">
        <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
          <div className="text-left">
            <h2 className="font-lore text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
              Terms and
              <span className="font-lora font-bold text-blue-500"> Conditions</span>
              {/* <span className="text-xl font-semibold rounded-full text-blueGray-500">
          2.0
        </span> */}
            </h2>
            <p className="font-lora max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Terms may change, so review them regularly. Continued use of our site means you accept any updates. Play responsibly and follow our community guidelines. Contact support for any questions.
            </p>
            <div className="mt-5 sm:flex md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="/termandcondition"
                  className="font-lora flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-[#0d3b66] border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                </Link>
              </div>
              {/* <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <a
            href=""
            className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-blue-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
          >
            Contribute
          </a>
        </div> */}
            </div>
          </div>
        </div>
        <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 ">
          <div className="relative w-full p-3 rounded  md:p-8">
            <div className="rounded-lg bg-white text-black w-full">
              {/* <img src="https://picsum.photos/400/300" /> */}
              {/* <img src={Terms} /> */}
              <img src={Casino} />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Term