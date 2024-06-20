import React from "react";
import Casino from "./casino.gif";
import Navbar2 from "../navbar/Navbar2";
import HomeCard from "./HomeCard";
import Footer from "./Footer/Footer";
import Term from "./Term&Condition/Term";
import AnimatedButton from "./balanceButton/AnimatedButton";
function Homepage() {
  return (
    <>
      <Navbar2 />
      <div className="bg-white p-8 mt-16">
        <AnimatedButton />
      </div>
      {/* About */}
      <div className="sm:flex items-center max-w-screen-2xl bg-white">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            {/* <img src="https://i.imgur.com/WbQnbas.png" /> */}
            <img src="https://rukminim2.flixcart.com/image/850/1000/jndhrbk0/board-game/f/4/y/dice-for-playing-pmw-original-imafafc9hzahj64a.jpeg?q=90&crop=false" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            {/* <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About us
            </span> */}
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl font-lora">
              Welcome to<span className="text-indigo-600"> Dice Kings</span>
            </h2>
            <p className="text-gray-700 font-lora font-2xl">
              "Dice Kings: Your ultimate destination for Ludo enthusiasts,
              offering thrilling gameplay and a vibrant community. Join us for
              strategic matches, exciting tournaments, and a gaming experience
              like no other!"
            </p>
          </div>
        </div>
      </div>

      <HomeCard />
      <Term />
      <Footer />
    </>
  );
}

export default Homepage;
