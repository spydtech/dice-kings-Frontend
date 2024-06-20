import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar2 from "../../navbar/Navbar2";

function LiveSingle() {
  const location = useLocation();
  const defaultUser = {
    name: " User",
    game: "ludo",
    entry: "500",
  };
  const [item, setItem] = useState(location.state?.item || {});

  useEffect(() => {
    if (!location.state?.item) {
      const savedItem = localStorage.getItem("selectedItem");
      if (savedItem) {
        setItem(JSON.parse(savedItem));
      } else {
        setItem(defaultUser);
      }
    }
  }, [location.state?.item, defaultUser]);

  return (
    <>
      <Navbar2 />

      <div className="min-h-screen flex pt-16 justify-center bg-[url('https://img.freepik.com/free-vector/3d-casino-game-play-cube-roll-isolated-vector-icon-white-realistic-gambling-poker-lucky-square-rolling-with-six-five-two-dot-number-set-random-gamble-gaming-entertainment-toy-pieces-with-risk_107791-22553.jpg?t=st=1718792194~exp=1718795794~hmac=785cf94cb68cb2339ab7abdd558b62ad4a4af913ff4e2dfe6d33d50bf795c8a7&w=1060')] bg-cover bg-center backdrop-filter blur-30 webkit-backdrop-filter blur-30">
        <div className="container mx-auto p-4">
          <div className="space-y-6">
            <div className="bg-black p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                {item ? (
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        {defaultUser.name}
                      </h2>
                      <p className="text-gray-600 mb-2">
                        <span className="font-bold">Game:</span>{" "}
                        {defaultUser.game}
                      </p>
                      <p className="text-gray-600 mb-2">
                        <span className="font-bold">Entry Fee:</span>{" "}
                        {defaultUser.entry}
                      </p>
                    </div>
                    <div className="text-6xl font-lora text-white">V/s</div>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        {item.name}
                      </h2>
                      <p className="text-gray-600 mb-2">
                        <span className="font-bold">Game:</span> {item.game}
                      </p>
                      <p className="text-gray-600 mb-2">
                        <span className="font-bold">Entry Fee:</span>{" "}
                        {item.entry}
                      </p>
                    </div>

                  </div>
                ) : (
                  <p className="text-gray-600">No game selected.</p>
                )}
                <div className="flex justify-center md:justify-end items-center mt-4 md:mt-0">
                  <div className="flex no-wrap">
                    <Link to="#">
                      <button className="bg-purple-500 w-32 font-bold text-white px-4 py-2 rounded-lg shadow-md hover:bg-violet-700 transition-colors animate-bg">
                        Start
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LiveSingle;
