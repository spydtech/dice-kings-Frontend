/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar2 from "../../navbar/Navbar2";
import axios from 'axios'

function LiveSingle() {
  const location = useLocation();
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/users");
        setItems(response.data.slice(0, 2)); // Limit to four members
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);



  return (
    <>
      <Navbar2 />

      <div className="min-h-screen flex pt-16 justify-center bg-[url('https://img.freepik.com/free-vector/3d-casino-game-play-cube-roll-isolated-vector-icon-white-realistic-gambling-poker-lucky-square-rolling-with-six-five-two-dot-number-set-random-gamble-gaming-entertainment-toy-pieces-with-risk_107791-22553.jpg?t=st=1718792194~exp=1718795794~hmac=785cf94cb68cb2339ab7abdd558b62ad4a4af913ff4e2dfe6d33d50bf795c8a7&w=1060')] bg-cover bg-center backdrop-filter blur-30 webkit-backdrop-filter blur-30">
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
      </div>
    </>
  );
}

export default LiveSingle;
