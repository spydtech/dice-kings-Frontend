// import React from "react";
// import Navbar2 from "../navbar/Navbar2";
// // import { RiArrowRightDoubleFill } from "react-icons/ri";
// import { Link } from "react-router-dom";
// const GameZone = () => {
//   const cardData = [
//     {
//       front: " Upcoming",
//       single: "1 VS 1 League ",
//       singleentry: "2-members – Entry 50 - 5000",
//       linksingle: "/upcomingsingle",
//       // singledetails: "Lite Showing",
//       double: "Double Damaka ",
//       doubleentry: "4 Members - Entry 100 - 10000",
//       // doubledetails: "Lite Showing",
//       linkdouble: "/upcomingdouble",
//     },
//     {
//       front: "Live Games",
//       single: "1 VS 1 League ",
//       // singleentry: "2-members – Entry 50 - 5000",

//       linksingle: "/livesingle",
//       // singledetails: "Lite Showing",
//       double: "Double Damaka ",
//       // doubleentry: "4 Members - Entry 100 - 10000",
//       // doubledetails: "Lite Showing",
//       linkdouble: "/livedouble",
//     },
//     {
//       front: "Completed",
//       single: "1 VS 1 League ",
//       // singleentry: "2-members – Entry 50 - 5000",
//       linksingle: "/gamelive",
//       // singledetails: "Lite Showing",
//       double: "Double Damaka ",
//       // doubleentry: " 4 Members - Entry 100 - 10000",
//       // doubledetails: "Lite Showing",
//       linkdouble: "/gamelive",
//     },
//   ];

//   return (
//     <>
//       <Navbar2 />
//       <div className="flex min-h-screen items-center justify-center bg-slate-100">
//         <div className="flex flex-wrap gap-4">
//           {cardData.map((card, index) => (
//             <div key={index} className="group h-96 w-96 [perspective:1000px]">
//               <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500">
//                 <div className="absolute h-[400px] inset-0 font-lora w-96 rounded-xl bg-[#0d3b66] px-4 text-center text-slate-200 ">
//                   <p className="animate__animated animate__flash animate__infinite infinite text-4xl pt-4 font-lora ">
//                     {card.front}
//                   </p>
//                   <div className="flex min-h-full flex-col justify-center items-center gap-y-4">
//                     <div className="mb-10">
//                       <p className="text-lg font-bold">{card.single}</p>
//                       <p className="text-lg font-bold">{card.singleentry}</p>
//                       {/* <p className="text-base">{card.singledetails}</p> */}
//                       <Link to={card.linksingle}>
//                         <button className="mt-2 text-white rounded-md bg-purple-500 py-2 px-2 text-sm hover:bg-violet-600">
//                           Continue
//                           {/* <RiArrowRightDoubleFill /> */}
//                         </button>
//                       </Link>
//                     </div>

//                     {/*  */}
//                     <div className="mb-10">
//                       {" "}
//                       <p className="text-lg font-bold">{card.double}</p>
//                       <p className="text-lg font-bold">{card.doubleentry}</p>
//                       {/* <p className="text-base">{card.doubledetails}</p> */}
//                       <Link to={card.linkdouble}>
//                         <button className="mt-2 text-white rounded-md bg-purple-500 py-2 px-2 text-sm hover:bg-violet-600">
//                           Continue
//                         </button>
//                       </Link>
//                     </div>
//                     {/*  */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default GameZone;

import React from "react";
import Navbar2 from "../navbar/Navbar2";
// import { RiArrowRightDoubleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const GameZone = () => {
  const cardData = [
    {
      front: "Select League",
      single: "1 VS 1 League ",
      singleentry: "2-members – Entry 30 - 5000",
      linksingle: "/upcomingsingle",
      // singledetails: "Lite Showing",
      double: "2 VS 2 League",
      doubleentry: "4 Members - Entry 100 - 10000",
      // doubledetails: "Lite Showing",
      linkdouble: "/upcomingdouble",
    },
    // {
    //   front: "Live Games",
    //   single: "1 VS 1 League ",
    //   // singleentry: "2-members – Entry 50 - 5000",

    //   linksingle: "/livesingle",
    //   // singledetails: "Lite Showing",
    //   double: "Double Damaka ",
    //   // doubleentry: "4 Members - Entry 100 - 10000",
    //   // doubledetails: "Lite Showing",
    //   linkdouble: "/livedouble",
    // },
    // {
    //   front: "Completed",
    //   single: "1 VS 1 League ",
    //   // singleentry: "2-members – Entry 50 - 5000",
    //   linksingle: "/gamelive",
    //   // singledetails: "Lite Showing",
    //   double: "Double Damaka ",
    //   // doubleentry: " 4 Members - Entry 100 - 10000",
    //   // doubledetails: "Lite Showing",
    //   linkdouble: "/gamelive",
    // },
  ];

  return (
    <>
      <Navbar2 />
      <div className="flex flex-col  md:flex-row-reverse justify-center items-center mt-8">
        <div>
          <img src="https://bandkbarsupplies.com/media/catalog/product/cache/9e258016ecb5c21cebed181938df574a/i/n/ingle_dice_2.jpg" 

            className=" mt-20"
          />
        </div>
        <div className="flex justify-center items-center flex-wrap gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className=" lg:xl:md:mt-20   md:mt-40 flex group h-96 w-96 [perspective:1000px]"
            >
              <div className=" mx-5 z-50  h-full w-full rounded-xl  ">
                <div className=" absolute lg:xl:2xl:3xl:md:mx-4 mx-8  mt-2  h-[400px] inset-0 font-lora lg:xl:2xl:md:w-96  w-72  rounded-xl bg-white px-4 text-center text-black shadow-2xl">
                  <p className="text-4xl pt-4 font-lora ">{card.front}</p>

                  <div className="flex min-h-full flex-col justify-center items-center gap-y-4">
                    <div className="mb-10">
                      <p className="text-lg font-bold">{card.single}</p>
                      <p className="text-lg font-bold">{card.singleentry}</p>
                      {/* <p className="text-base">{card.singledetails}</p> */}
                      <Link to={card.linksingle}>
                        <button className="mt-2 text-white rounded-md bg-purple-500 py-2 px-2 text-sm hover:bg-violet-600">
                          Continue
                          {/* <RiArrowRightDoubleFill /> */}
                        </button>
                      </Link>
                    </div>

                    {/*  */}
                    <div className="mb-10">
                      {" "}
                      <p className="text-lg font-bold">{card.double}</p>
                      <p className="text-lg font-bold">{card.doubleentry}</p>
                      {/* <p className="text-base">{card.doubledetails}</p> */}
                      <Link to={card.linkdouble}>
                        <button className="mt-2 text-white rounded-md bg-purple-500 py-2 px-2 text-sm hover:bg-violet-600">
                          Continue
                        </button>
                      </Link>
                    </div>
                    {/*  */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GameZone;
