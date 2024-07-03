/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../../navbar/Navbar2";
import axios from 'axios'; // Make sure to install axios: npm install axios

function LiveDouble() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/users");
        setItems(response.data.slice(0, 4)); // Limit to four members
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar2 />

      <div className="min-h-screen flex pt-20 justify-center bg-[url('https://img.freepik.com/free-vector/3d-rendering-dices-illustration_52683-75995.jpg?t=st=1718792279~exp=1718795879~hmac=cefbf8f83e06eed22909addc660bc1d3e0e0682d631fdf37095d06f5388adc91&w=996')] bg-cover bg-center backdrop-filter blur-30 webkit-backdrop-filter blur-30">
        <div className="space-y-6">
          {items.length > 0 ? (
            <div className="flex bg-yellow-800 rounded-lg p-6 flex-col md:flex-row items-center justify-center gap-6">
              {items.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.username}
                    </h2>
                    <p className="text-gray-600 mb-2">
                      <span className="font-bold">Game:</span> LUDO
                    </p>
                    <p className="text-gray-600 mb-2">
                      <span className="font-bold">Entry Fee:</span> 500
                    </p>
                  </div>
                  {index < items.length - 1 && (
                    <div className="text-6xl font-lora text-white">V/s</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No game selected.</p>
          )}
          <div className="flex justify-center items-center mt-4 md:mt-0">
            <Link to="#">
              <button className="bg-black w-32 font-bold text-yellow-800 px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors animate-bg">
                Start
              </button>
            </Link>
          </div>
        </div>
        <style jsx>{`
          @keyframes bg {
            0%,
            100% {
              background-color: black;
            }
            30% {
              background-color: #ffffff;
            }
          }

          .animate-bg {
            animation: bg 2s linear infinite;
          }

          @keyframes wave {
            0%,
            40%,
            100% {
              transform: translateY(0);
            }
            20% {
              transform: translateY(-10px);
            }
          }

          .wave {
            display: inline-block;
            animation: wave 1.5s infinite;
          }

          .wave:nth-child(1) {
            animation-delay: 0s;
          }
          .wave:nth-child(2) {
            animation-delay: 0.1s;
          }
          .wave:nth-child(3) {
            animation-delay: 0.2s;
          }
          .wave:nth-child(4) {
            animation-delay: 0.3s;
          }
          .wave:nth-child(5) {
            animation-delay: 0.4s;
          }
          .wave:nth-child(6) {
            animation-delay: 0.5s;
          }
          .wave:nth-child(7) {
            animation-delay: 0.6s;
          }

          .no-wrap {
            white-space: nowrap;
          }
        `}</style>
      </div>
    </>
  );
}

export default LiveDouble;
