import React, { useState } from "react";
import Navbar2 from "../navbar/Navbar2";
import Withdraw from "../../assets/withdraw.png"
function WithdrawCoins() {
  const [formData, setFormData] = useState({
    minimumCoins: "",
    paymentMethod: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store form data in local storage
    localStorage.setItem("withdrawFormData", JSON.stringify(formData));
    alert("success");
    setFormData({
      minimumCoins: "",
      paymentMethod: "",
      phone: "",
    });
    console.log(formData);
  };

  return (
    <>
      <Navbar2 />
      <div className="flex justify-center items-center md:flex-row flex-col bg-gray-100 gap-16 mt-16">
        <div>
          <img src={Withdraw} className="md:h-[550px] md:w-[550px]"/>
        </div>
      <div className="font-sans   md:w-96 max-w-screen-xl mx-auto md:px-4 py-5">
        <h1 className="text-center mb-4 text-3xl font-bold  text-[#0d3b66] font-lora">
          Withdraw Coins
        </h1>
        <h1 className="text-black font-bold font-lora ml-4 md:ml-0">Note: We will accept request within 30 minutes</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block mb-1 font-bold">Withdraw Coins:</label>
            <input
              type="text"
              name="minimumCoins"
              value={formData.minimumCoins}
              onChange={handleChange}
              className="w-72 px-3 py-2 border rounded"
              placeholder="Minimum 50 coins"
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
          {/* <div className="mb-4">
            <label className="block mb-1 font-bold">Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-72 px-3 py-2 border rounded"
              placeholder="Enter Phone number"
              required
            />
          </div> */}
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none hover:bg-blue-700"
            >
              Withdraw
            </button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}

export default WithdrawCoins;
