// import React, { useState } from "react";
// import Navbar2 from "../navbar/Navbar2";
// import Withdraw from "../../assets/withdraw.png"
// function WithdrawCoins() {
//   const [formData, setFormData] = useState({
//     minimumCoins: "",
//     paymentMethod: "",
//     phone: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Store form data in local storage
//     localStorage.setItem("withdrawFormData", JSON.stringify(formData));
//     alert("success");
//     setFormData({
//       minimumCoins: "",
//       paymentMethod: "",
//       phone: "",
//     });
//     console.log(formData);
//   };

//   return (
//     <>
//       <Navbar2 />
//       <div className="flex justify-center items-center md:flex-row flex-col bg-gray-100 gap-16 mt-16">
//         <div>
//           <img src={Withdraw} className="md:h-[550px] md:w-[550px]"/>
//         </div>
//       <div className="font-sans   md:w-96 max-w-screen-xl mx-auto md:px-4 py-5">
//         <h1 className="text-center mb-4 text-3xl font-bold  text-[#0d3b66] font-lora">
//           Withdraw Coins
//         </h1>
//         <h1 className="text-black font-bold font-lora ml-4 md:ml-0">Note: We will accept request within 30 minutes</h1>
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//         >
//           <div className="mb-4">
//             <label className="block mb-1 font-bold">Withdraw Coins:</label>
//             <input
//               type="text"
//               name="minimumCoins"
//               value={formData.minimumCoins}
//               onChange={handleChange}
//               className="w-72 px-3 py-2 border rounded"
//               placeholder="Minimum 50 coins"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-1 font-bold">Payment Method:</label>
//             <select
//               name="paymentMethod"
//               value={formData.paymentMethod}
//               onChange={handleChange}
//               className="w-72 px-3 py-2 border rounded"
//               required
//             >
//               <option value="">Select Payment Method</option>
//               <option value="Phone Pe">Phone Pe</option>
//               <option value="Google Pay">Google Pay</option>
//               <option value="Paytm">Paytm</option>
//             </select>
//           </div>
//           {/* <div className="mb-4">
//             <label className="block mb-1 font-bold">Phone:</label>
//             <input
//               type="text"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-72 px-3 py-2 border rounded"
//               placeholder="Enter Phone number"
//               required
//             />
//           </div> */}
//           <div className="text-center">
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none hover:bg-blue-700"
//             >
//               Withdraw
//             </button>
//           </div>
//         </form>
//       </div>
//       </div>
//     </>
//   );
// }

// export default WithdrawCoins;


import React, { useState, useEffect } from 'react';
import Navbar2 from '../navbar/Navbar2';
import Withdraw from '../../assets/withdraw.png';
import axios from 'axios'; // Ensure axios is imported

function WithdrawCoins() {
  const [formData, setFormData] = useState({
    minimumCoins: '',
    paymentMethod: '',
    mobileNumber: '',
    username: '', // Added for user data
    uniqueId: ''  // Added for user data
  });
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/balance');
        const data = await response.json();
        setBalance(data.balance);
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };

    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log('Fetching user details with token:', token); // Log the token for debugging
        const response = await axios.get('http://localhost:8000/api/v1/user-details', {
          headers: {
            Authorization: `Bearer ${token}`
          },
          withCredentials: true // Adjust if using cookies for authentication
        });
        const { username, uniqueId } = response.data;
        console.log('Fetched user details:', response.data); // Log the fetched user details
        setFormData({
          ...formData,
          username: username,
          uniqueId: uniqueId
        });
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
    fetchBalance();
  }, []); // Make sure to include the dependency array

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const coinsToWithdraw = parseInt(formData.minimumCoins, 10);
    if (coinsToWithdraw < 100) {
      setError('Minimum 100 coins required.');
      return;
    }
    if (coinsToWithdraw > balance) {
      setError('Insufficient balance.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/v1/withdraw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          minimumCoins: coinsToWithdraw,
          paymentMethod: formData.paymentMethod,
          mobileNumber: formData.mobileNumber,
          username: formData.username,
          uniqueId: formData.uniqueId,
          type: 'withdraw',
        }),
      });

      if (response.ok) {
        alert('Withdraw request submitted for admin approval');
        setFormData({
          minimumCoins: '',
          paymentMethod: '',
          mobileNumber: '',
          username: formData.username,
          uniqueId: formData.uniqueId
        });
        setBalance((prevBalance) => prevBalance - coinsToWithdraw);
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Error in withdraw request');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to connect to server. Please check your connection and try again.');
    }
  };

  return (
    <>
      <Navbar2 />
      <div className="flex justify-center items-center md:flex-row flex-col bg-gray-100 gap-16 mt-16">
        <div>
          <img src={Withdraw} className="md:h-[550px] md:w-[550px]" alt="Withdraw" />
        </div>
        <div className="font-sans md:w-96 max-w-screen-xl mx-auto md:px-4 py-5">
          <h1 className="text-center mb-4 text-3xl font-bold text-[#0d3b66] font-lora">
            Withdraw Coins
          </h1>
          <h1 className="text-black font-bold font-lora ml-4 md:ml-0">Note: We will accept requests within 30 minutes</h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label className="block mb-1 font-bold">UserId:</label>
              <input
                type="text"
                name="userid"
                value={formData.uniqueId} // Display uniqueId here
                onChange={handleChange}
                className="w-72 px-3 py-2 border rounded"
                readOnly // Readonly as it is fetched data
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-bold">UserName:</label>
              <input
                type="text"
                name="username"
                value={formData.username} // Display username here
                onChange={handleChange}
                className="w-72 px-3 py-2 border rounded"
                readOnly // Readonly as it is fetched data
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-bold">Withdraw Coins:</label>
              <input
                type="number"
                name="minimumCoins"
                value={formData.minimumCoins}
                onChange={handleChange}
                className="w-72 px-3 py-2 border rounded"
                placeholder="Minimum 100 coins"
                required
              />
              {error && (
                <p className="text-red-500 text-xs italic mt-2">{error}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-bold">Payment Method:</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-72 px-3 py-2 border rounded"
                required
              >
                <option value="">Select Payment Method</option>
                <option value="Phone Pe">Phone Pe</option>
                <option value="Google Pay">Google Pay</option>
                <option value="Paytm">Paytm</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-bold">Mobile Number:</label>
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-72 px-3 py-2 border rounded"
                placeholder="Enter Mobile Number"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none hover:bg-blue-700"
              >
                Submit Request
              </button>
            </div>
          </form>
          <h2 className="text-center mt-4 text-xl font-bold">Current Balance: {balance} coins</h2>
        </div>
      </div>
    </>
  );
}

export default WithdrawCoins;