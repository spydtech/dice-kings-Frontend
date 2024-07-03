/* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import Navbar2 from "../navbar/Navbar2";
// import BalanceImg from "../../assets/balance.svg"
// function Balance() {
//   const [balance, setBalance] = useState(); // Initial balance state

//   return (
//     <>
//       <Navbar2 />
//       <div className="flex justify-center items-center md:flex-row flex-col bg-gray-100 gap-16 mt-16">
//         <div>
//           <img src={BalanceImg} className="md:h-[550px] md:w-[550px]" />
//         </div>
//         <div className="font-sans md:w-96 max-w-screen-xl mx-auto md:px-4 py-5">
//           <h1 className="text-center mb-4 text-3xl font-bold  text-[#0d3b66] font-lora">
//             Your Balance
//           </h1>
//           <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//             <div className="mb-4">
//               <label className="block mb-1 font-bold">Current Balance:</label>
//               <input
//                 type="text"
//                 readOnly
//                 value={`INR ${balance}`} // Display balance with currency symbol
//                 className="w-72 px-3 py-2  rounded bg-gray-100"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Balance;

import React, { useState, useEffect } from "react";
import Navbar2 from "../navbar/Navbar2";
import BalanceImg from "../../assets/balance.svg";
import axios from "axios";

function Balance() {
  const [balance, setBalance] = useState(""); // Initial balance state

  useEffect(() => {
    const token = localStorage.getItem("token")
    const fetchBalance = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/balance', {
          headers: {

            'Authorization': `Bearer ${token}`
          }
        });
        // if (response.ok) {
        //   const data = await response.json();
        //   setBalance(data.balance);
        // } else {
        //   console.error('Error fetching balance');
        // }
        const { balance } = response.data;
        setBalance(balance);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchBalance();
  }, []); // Ensure empty dependency array to fetch balance only once

  return (
    <>
      <Navbar2 />
      <div className="flex justify-center items-center md:flex-row flex-col bg-gray-100 gap-16 mt-16">
        <div>
          <img src={BalanceImg} className="md:h-[550px] md:w-[550px]" alt="Balance" />
        </div>
        <div className="font-sans md:w-96 max-w-screen-xl mx-auto md:px-4 py-5">
          <h1 className="text-center mb-4 text-3xl font-bold text-[#0d3b66] font-lora">
            Your Balance
          </h1>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block mb-1 font-bold">Current Balance:</label>
              <input
                type="text"
                readOnly
                value={`INR ${balance}`} // Display balance with currency symbol
                className="w-72 px-3 py-2 rounded bg-gray-100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Balance;