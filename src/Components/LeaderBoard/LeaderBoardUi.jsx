// // import React from "react";
// // import { Link } from "react-router-dom";

// // function LeaderBoardUi() {
// //   return (
// //     <>
// //       <div className="main text-white flex justify-center items-center my-2 w-screen ">
// //         <div className=" grid-cols-3 gap-x-60   grid justify-center items-center">
// //           <div className="div1 ">
// //             <Link>
// //               <button className="p-4 bg-[#0d3b66] w-60 h-auto rounded-lg">
// //                 Daily Leaders
// //               </button>
// //             </Link>
// //           </div>
// //           <div className="div2 ">
// //             <Link>
// //               <button className="p-4 bg-[#0d3b66] w-60 h-auto rounded-lg">
// //                 Weekly Leaders
// //               </button>
// //             </Link>
// //           </div>
// //           <div className="div3 ">
// //             <Link>
// //               <button className="p-4 bg-[#0d3b66] w-60 h-auto rounded-lg">
// //                 Monthly Leaders
// //               </button>
// //             </Link>
// //           </div>

// //           {/* <hr className="bg-black w-screen mt-4" /> */}
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default LeaderBoardUi;
// import React from "react";
// import { Link } from "react-router-dom";

// function LeaderBoardUi({ setActiveTab }) {
//   return (
//     <>
//       <div className="main mt-2 text-white  flex justify-center items-center  w-screen ">
//         <div className="md:lg:xl:2xl:3xl:grid-cols-1 sm:grid-cols-3 gap-2  gap-x-32 grid justify-center items-center">
//           <div className="div1">
//             <button
//               onClick={() => setActiveTab("daily")}
//               className="p-4 hover:bg-[#0d3b66] bg-[#4b6176] w-60 h-auto rounded-lg"
//             >
//               Daily Leaders
//             </button>
//           </div>
//           <div className="div2">
//             <button
//               onClick={() => setActiveTab("weekly")}
//               className="p-4 hover:bg-[#0d3b66] bg-[#4b6176] w-60 h-auto rounded-lg"
//             >
//               Weekly Leaders
//             </button>
//           </div>
//           <div className="div3">
//             <button
//               onClick={() => setActiveTab("monthly")}
//               className="p-4 hover:bg-[#0d3b66] bg-[#4b6176] w-60 h-auto rounded-lg"
//             >
//               Monthly Leaders
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default LeaderBoardUi;

import { useEffect, useState } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [data, setData] = useState([]);
  // const [totalWins, setTotalWins] = useState(0)
  const [dataType, setDataType] = useState("Daily");

  useEffect(() => {
    const getData = async () => {
      const list = await axios.get(getDataUrl(dataType));
      // console.log(list)
      setData(list.data);

      // Total number of wins
      // const total = list.data.reduce((acc, item) => acc + item.win, 0);
      // setTotalWins(total);
    };
    getData();
  }, [dataType]);

  const getDataUrl = (type) => {
    const urlMap = {
      Monthly: "Monthly_Data.json",
      Daily: "Daily_Data.json",
      Weekly: "Weekly_Data.json",
    };
    return urlMap[type];
  };

  const buttonClick = (type) => {
    setDataType(type);
  };

  return (
    <div>
      <div className=" mt-20 ">
        {/* <h1 className=" text-2xl text-center md:text-4xl font-bold font-sans">Monthly Win : <span className=" text-red-600 bg-white px-2 rounded-md">{totalWins}</span></h1> */}
        <p className=" font-lora pl-3 font-semibold text-[30px] md:text-[40px] md:text-center md:mt-[10px] md:mb-[10px] ">
          Leader Board
        </p>
        <hr className="mx-3" />
        <div></div>
        <div className="  m-4 text-center md:flex flex-col justify-center border-2 px-5 py-3 rounded-xl drop-shadow-xl">
          <div className="flex justify-around">
            <button
              className=" px-2 rounded-lg font-semibold bg-[#0d3b66] text-white md:text-[24px]"
              onClick={() => buttonClick("Daily")}
            >
              Daily
            </button>
            <button
              className=" px-2 rounded-lg font-semibold bg-[#0d3b66] text-white md:text-[24px]"
              onClick={() => buttonClick("Weekly")}
            >
              Weekly
            </button>
            <button
              className=" px-2 rounded-lg font-semibold bg-[#0d3b66] text-white md:text-[24px]"
              onClick={() => buttonClick("Monthly")}
            >
              Monthly
            </button>
          </div>
          <h1 className=" text-lg font-bold m-4 md:text-2xl">
            <span className=" text-[24px]  p-2 rounded-lg my-2">
              {dataType.toUpperCase()}
            </span>{" "}
            TOP WINNERS
          </h1>
          <table className="border-2 border-black w-full self-center">
            <thead>
              <tr className=" border-b-2 border-black bg-[#0d3b66] text-white">
                <th className=" border-2 border-black md:text-xl">Name</th>
                <th className=" border-2 border-black md:text-xl">Win</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => {
                return (
                  <tr>
                    {Object.keys(data[0]).map((i) => {
                      return (
                        <td className=" border-2 border-black md:text-lg bg-gray-100">
                          {row[i]}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Leaderboard;
