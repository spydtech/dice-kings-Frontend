/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Data from "./singlejson";
import Navbar2 from "../../navbar/Navbar2";
import axios from "axios";
import { useEffect } from "react";

function UpcomingSingle() {
  const data = Data();
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/users");
        setUsers(response.data); // Limit to four members
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  const handlePlayClick = (item) => {
    localStorage.setItem("selectedItem", JSON.stringify(item));
  };

  return (
    <>
      <Navbar2 />
      <div className="container mx-auto p-4 bg-gray-200 mt-16">
        <div className="space-y-6">
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow flex flex-col md:flex-row md:justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {user.username}
                </h2>
                <p className="text-gray-600 mb-2">
                  <span className="font-bold">Game:</span> LUDO
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-bold">Entry Fee:</span> 500
                </p>
              </div>
              <div className="flex justify-end items-center mt-4 md:mt-0">
                <Link to="/livesingle" onClick={() => handlePlayClick(user)}>
                  <button className="bg-purple-700 w-32 font-bold text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors animate-bg">
                    Play
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes bg {
            0%,
            100% {
              background-color: #0d3b66;
            }
            50% {
              background-color: #7e22ce;
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

export default UpcomingSingle;
