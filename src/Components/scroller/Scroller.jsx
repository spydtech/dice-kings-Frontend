import React from "react";

function Scroller() {
  return (
    <>
      <div className=" px-4 sm:px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 relative overflow-hidden">
        <div className="whitespace-nowrap inline-block animate-marquee">
          <p className="text-white text-xl">
            The dice game is a simple and engaging game of chance that involves
            rolling one or more dice to achieve a specific outcome or score.
            Typically, players take turns rolling the dice, aiming to get
            certain combinations or totals that are predetermined by the game's
            rules.
          </p>
        </div>
      </div>
    </>
  );
}

export default Scroller;
