import React, { useState } from "react";
import Navbar2 from "../navbar/Navbar2";
import AddCoinImg from "../../assets/addcoins.png";
// import AddCoinImg from "../../assets/bgremove.png";
function AddCoins() {
  const [formData, setFormData] = useState({
    coinsDeposited: "",
    paymentMethod: "",
    utr: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    localStorage.setItem("addcoins", JSON.stringify(formData));
    alert("desposit success");
    setFormData({
      coinsDeposited: "",
      paymentMethod: "",
      utr: "",
    });
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Navbar2 />
      <div className="flex justify-center items-center md:flex-row flex-col bg-gray-100 gap-16 mt-16">
        <div>
          <img src={AddCoinImg} className="md:h-[550px] md:w-[550px]" />
        </div>
        <div className="font-lora md:w-96 max-w-screen-xl mx-auto px-4 py-5">
          <h1 className=" text-center mb-4 text-3xl font-bold  text-[#0d3b66] font-lora">
            Add Coins
          </h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-2 md:px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label className="block mb-1 font-bold">Enter Coins:</label>
              <input
                type="text"
                name="coinsDeposited"
                value={formData.coinsDeposited}
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
            <div className="text-center">
              <button
                type="submit"
                className="px-4 py-2  bg-blue-500 text-white rounded focus:outline-none hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </form>
        </div>

      </div>
    </>
  );
}

export default AddCoins;
