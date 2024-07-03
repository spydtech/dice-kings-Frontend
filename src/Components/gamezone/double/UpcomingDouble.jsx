/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Data from "./doublejson";
import Navbar2 from "../../navbar/Navbar2";
import axios from "axios";

function UpcomingDouble() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setData(Data());
  }, []);

  useEffect(() => {
    // Fetch registered users from the backend
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/users"); // Adjust the endpoint if necessary
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };

    fetchUsers();
  }, []);

  const handlePlayClick = () => {
    const randomItems = [];
    while (randomItems.length < 3) {
      const randomIndex = Math.floor(Math.random() * data.length);
      if (!randomItems.includes(data[randomIndex])) {
        randomItems.push(data[randomIndex]);
      }
    }
    localStorage.setItem("doubleData", JSON.stringify(randomItems));
    navigate("/livedouble");
  };

  return (
    <>
      <Navbar2 />
      <div
        className="container mt-16 mx-auto p-4 bg-gray-200"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
        }}
      >
        <div className="space-y-6">
          <div className="flex justify-center items-center">
            <button
              onClick={handlePlayClick}
              className="bg-green-700 w-32 font-bold text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors animate-bg"
            >
              Start
            </button>
          </div>
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
                  <span className="font-bold">Entry Fee:</span> $500
                </p>
              </div>
              <div className="flex justify-end items-center mt-4 md:mt-0">
                <Link to="#" onClick={() => handlePlayClick(user)}>
                  <button className="bg-purple-700 w-32 font-bold text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors animate-bg">
                    Waiting....
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

export default UpcomingDouble;
