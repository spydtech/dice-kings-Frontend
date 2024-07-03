/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navbar2 from "../navbar/Navbar2";
import AddCoinImg from "../../assets/addcoins.png";

const AddCoins = () => {
  const [formData, setFormData] = useState({
    coinsDeposited: "",
    paymentMethod: "",
    mobileNumber: "",
    utr: "",
    upiTransactionId: "",
    upiReferenceId: "",
    username: "", // Added for user data
    uniqueId: ""  // Added for user data
  });

  const [error, setError] = useState("");
  const [balance, setBalance] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get('http://localhost:8000/api/v1/user-details', {
          headers: {
            Authorization: `Bearer ${token}`
          },
          withCredentials: true // Adjust if using cookies for authentication
        });
        const { username, uniqueId } = response.data;
        setFormData({
          ...formData,
          username: username,
          uniqueId: uniqueId
        });
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []); // Empty dependency array ensures this runs only once

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert('No token found, please log in.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/v1/addCoins', formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 201) {
        alert('Deposit success');
        setFormData({
          coinsDeposited: "",
          paymentMethod: "",
          mobileNumber: "",
          utr: "",
          upiTransactionId: "",
          upiReferenceId: "",
          username: formData.username,
          uniqueId: formData.uniqueId
        });
      } else {
        alert('Error in deposit');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to connect to server. Please check your connection and try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const renderPaymentDetails = () => {
    switch (formData.paymentMethod) {
      case "Phone Pe":
        return (
          <div className="mb-4">
            <label className="block mb-1 font-bold">UTR:</label>
            <input
              type="text"
              name="utr"
              value={formData.utr}
              onChange={handleChange}
              className="w-72 px-3 py-2 border rounded"
              placeholder="Enter UTR"
              required
            />
          </div>
        );
      case "Google Pay":
        return (
          <div className="mb-4">
            <label className="block mb-1 font-bold">UPI Transaction ID:</label>
            <input
              type="text"
              name="upiTransactionId"
              value={formData.upiTransactionId}
              onChange={handleChange}
              className="w-72 px-3 py-2 border rounded"
              placeholder="Enter UPI Transaction ID"
              required
            />
          </div>
        );
      case "Paytm":
        return (
          <div className="mb-4">
            <label className="block mb-1 font-bold">UPI Reference ID:</label>
            <input
              type="text"
              name="upiReferenceId"
              value={formData.upiReferenceId}
              onChange={handleChange}
              className="w-72 px-3 py-2 border rounded"
              placeholder="Enter UPI Reference ID"
              required
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar2 />
      <div className="flex md:justify-between  justify-center items-center  md:flex-row  flex-col mt-20 ">
        <div>
          <button className="w-[200px] md:ml-4 bg-[#0071bc] h-[50px] my-3 flex items-center justify-center  cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1]  hover:before:left-0 text-[#fff]" name="userid"
            value={formData.uniqueId} // Display uniqueId here
          >
            UserId: {formData.uniqueId}
          </button>

        </div>
        <div>
          <button className="w-[200px] md:mr-4 bg-[#0071bc] h-[50px] my-3 flex items-center justify-center  cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1]  hover:before:left-0 text-[#fff]"
            name="username"
            value={formData.username} // Display username here
          >
            UserName: {formData.username}
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center md:flex-row flex-col  gap-16 ">

        <div>
          <img src={AddCoinImg} alt="Add Coin" className="h-80 w-80 md:mt-0 mt-4" />
        </div>
        <div className="bg-white p-8 rounded shadow-md flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Add Coins</h2>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            {/* <div className="mb-4">
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
            </div> */}
            <div className="mb-4">
              <label className="block mb-1 font-bold">Coins Deposited:</label>
              <input
                type="number"
                name="coinsDeposited"
                value={formData.coinsDeposited}
                onChange={handleChange}
                className="w-72 px-3 py-2 border rounded"
                placeholder="Enter the number of coins"
                required
              />
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
            {renderPaymentDetails()}
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
          {isPending && <p>Transaction pending approval. Checking status...</p>}
          {balance !== null && (
            <p className="text-green-500 mt-4">Current Balance: {balance}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AddCoins;
