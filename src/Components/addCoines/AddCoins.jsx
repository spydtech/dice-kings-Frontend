/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import Navbar2 from "../navbar/Navbar2";
// import AddCoinImg from "../../assets/addcoins.png";
// import Scanner from "./Scanner";
// import axios from "axios";

// const AddCoins = () => {
//   const [formData, setFormData] = useState({
//     coinsDeposited: "",
//     paymentMethod: "",
//     utr: "",
//     upiTransactionId: "",
//     upiReferenceId: "",
//   });

//   const [showPayment, setShowPayment] = useState(false);
//   const [showScanner, setShowScanner] = useState(false);


//   // const handleSubmit = async (e) => {
//   //   const token = localStorage.getItem("token")
//   //   e.preventDefault();
//   //   try {
//   //     const axiosresponse = await axios.post('http://localhost:8000/api/v1/addCoins',
//   //       {
//   //         headers: {
//   //           Authorization: `Bearer ${token}`
//   //         }
//   //       }
//   //     )


//   //     console.log('Request URL:', response);
//   //     const { username, uniqueId } = response.data; // Log the request URL

//   //     const response1 = await fetch(response, {
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify({
//   //         coins: parseInt(formData.coinsDeposited, 10),
//   //         paymentMethod: formData.paymentMethod,
//   //         utr: formData.utr,
//   //         upiTransactionId: formData.upiTransactionId,
//   //         upiReferenceId: formData.upiReferenceId,
//   //         type: 'deposit',
//   //         username: username,
//   //         uniqueId: uniqueId

//   //       }),
//   //     });

//   //     console.log('Response:', response1); // Log the response received

//   //     if (response1.ok) {
//   //       alert('Deposit success');
//   //       setFormData({
//   //         coinsDeposited: "",
//   //         paymentMethod: "",
//   //         utr: "",
//   //         upiTransactionId: "",
//   //         upiReferenceId: "",
//   //       });
//   //       setShowPayment(false);
//   //     } else {
//   //       alert('Error in deposit');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error:', error);
//   //     alert('Failed to connect to server. Please check your connection and try again.');
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Retrieve the token from local storage
//     const token = localStorage.getItem("token");

//     try {
//       // Make the initial Axios POST request
//       const axiosResponse = await axios.post(
//         'http://localhost:8000/api/v1/addCoins',
//         {}, // Assuming the body is empty for this request
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       // Log the response from the Axios request
//       console.log('Axios Response:', axiosResponse);

//       // Destructure the username and uniqueId from the response data
//       const { username, uniqueId } = axiosResponse.data;

//       // Prepare the payload for the fetch request
//       const payload = {
//         coins: parseInt(formData.coinsDeposited, 10),
//         paymentMethod: formData.paymentMethod,
//         utr: formData.utr,
//         upiTransactionId: formData.upiTransactionId,
//         upiReferenceId: formData.upiReferenceId,
//         type: 'deposit',
//         username: username,
//         uniqueId: uniqueId
//       };

//       // Make the fetch request to the endpoint
//       const fetchResponse = await fetch('http://localhost:8000/api/v1/addCoins', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify(payload)
//       });

//       // Log the fetch response
//       console.log('Fetch Response:', fetchResponse);

//       // Check if the fetch response is ok
//       if (fetchResponse.ok) {
//         alert('Deposit success');
//         // Reset the form data
//         setFormData({
//           coinsDeposited: "",
//           paymentMethod: "",
//           utr: "",
//           upiTransactionId: "",
//           upiReferenceId: ""
//         });
//         setShowPayment(false);
//       } else {
//         // Handle the error response
//         const errorData = await fetchResponse.json();
//         alert(`Error in deposit: ${errorData.message}`);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Failed to connect to server. Please check your connection and try again.');
//     }
//   };



//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFocus = () => {
//     setShowScanner(true);
//   };

//   const handleCloseScanner = () => {
//     setShowScanner(false);
//     setShowPayment(true);
//   };

//   const renderPaymentDetails = () => {
//     switch (formData.paymentMethod) {
//       case "Phone Pe":
//         return (
//           <div className="mb-4">
//             <label className="block mb-1 font-bold">UTR:</label>
//             <input
//               type="text"
//               name="utr"
//               value={formData.utr}
//               onChange={handleChange}
//               className="w-72 px-3 py-2 border rounded"
//               placeholder="Enter UTR"
//               required
//             />
//           </div>
//         );
//       case "Google Pay":
//         return (
//           <div className="mb-4">
//             <label className="block mb-1 font-bold">UPI Transaction ID:</label>
//             <input
//               type="text"
//               name="upiTransactionId"
//               value={formData.upiTransactionId}
//               onChange={handleChange}
//               className="w-72 px-3 py-2 border rounded"
//               placeholder="Enter UPI Transaction ID"
//               required
//             />
//           </div>
//         );
//       case "Paytm":
//         return (
//           <div className="mb-4">
//             <label className="block mb-1 font-bold">UPI Reference ID:</label>
//             <input
//               type="text"
//               name="upiReferenceId"
//               value={formData.upiReferenceId}
//               onChange={handleChange}
//               className="w-72 px-3 py-2 border rounded"
//               placeholder="Enter UPI Reference ID"
//               required
//             />
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <Navbar2 />
//       <div className="flex justify-center items-center md:flex-row flex-col bg-gray-100 gap-16 mt-16">
//         <div>
//           <img src={AddCoinImg} className="md:h-[550px] md:w-[550px]" alt="Add Coins" />
//         </div>
//         <div className="font-lora md:w-96 max-w-screen-xl mx-auto px-4 py-5">
//           <h1 className="text-center mb-4 text-3xl font-bold text-[#0d3b66] font-lora">
//             Add Coins
//           </h1>
//           <form
//             onSubmit={handleSubmit}
//             className="bg-white shadow-md rounded px-2 md:px-8 pt-6 pb-8 mb-4"
//           >
//             <div className="mb-4">
//               <label className="block mb-1 font-bold">Enter Coins:</label>
//               <input
//                 type="number"
//                 name="coinsDeposited"
//                 value={formData.coinsDeposited}
//                 onChange={handleChange}
//                 onFocus={handleFocus}
//                 className="w-72 px-3 py-2 border rounded"
//                 placeholder="Minimum 50 coins"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-1 font-bold">Payment Method:</label>
//               <select
//                 name="paymentMethod"
//                 value={formData.paymentMethod}
//                 onChange={handleChange}
//                 className="w-72 px-3 py-2 border rounded"
//                 required
//               >
//                 <option value="">Select Payment Method</option>
//                 <option value="Phone Pe">Phone Pe</option>
//                 <option value="Google Pay">Google Pay</option>
//                 <option value="Paytm">Paytm</option>
//               </select>
//             </div>
//             {renderPaymentDetails()}
//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none hover:bg-blue-700"
//               >
//                 Add
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       {showScanner && <Scanner onScanComplete={handleCloseScanner} />}
//     </>
//   );
// };

// export default AddCoins;

// import React, { useState } from "react";
// import Navbar2 from "../navbar/Navbar2";
// import AddCoinImg from "../../assets/addcoins.png";
// import Scanner from "./Scanner";

// const AddCoins = () => {
//   const [formData, setFormData] = useState({
//     coinsDeposited: "",
//     paymentMethod: "",
//     mobileNumber: "",
//     utr: "",
//     upiTransactionId: "",
//     upiReferenceId: "",
//   });

//   const [showPayment, setShowPayment] = useState(false);
//   const [showScanner, setShowScanner] = useState(false);
//   const [error, setError] = useState("");
//   const [balance, setBalance] = useState(null);
//   const [isPending, setIsPending] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const url = 'http://localhost:8000/api/v/addcoin';
//       console.log('Request URL:', url); // Log the request URL

//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           coins: parseInt(formData.coinsDeposited, 10),
//           paymentMethod: formData.paymentMethod,
//           utr: formData.utr,
//           upiTransactionId: formData.upiTransactionId,
//           upiReferenceId: formData.upiReferenceId,
//           type: 'deposit'
//         }),
//       });

//       console.log('Response:', response); // Log the response received

//       if (response.ok) {
//         alert('Deposit success');
//         setFormData({
//           coinsDeposited: "",
//           paymentMethod: "",
//           utr: "",
//           upiTransactionId: "",
//           upiReferenceId: "",
//         });
//         setShowPayment(false);
//       } else {
//         alert('Error in deposit');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Failed to connect to server. Please check your connection and try again.');
//     }
//   };


//   const checkApprovalStatus = async (mobileNumber) => {
//     try {
//       const url = http://localhost:8000/api/users/balance/${mobileNumber};
//       const response = await fetch(url);
//       if (response.ok) {
//         const responseData = await response.json();
//         setBalance(responseData.balance);
//         setIsPending(false);
//       } else {
//         setTimeout(() => checkApprovalStatus(mobileNumber), 5000); // Retry every 5 seconds
//       }
//     } catch (error) {
//       console.error('Error fetching balance:', error);
//       setTimeout(() => checkApprovalStatus(mobileNumber), 5000); // Retry every 5 seconds
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFocus = () => {
//     setShowScanner(true);
//   };

//   const handleCloseScanner = () => {
//     setShowScanner(false);
//     setShowPayment(true);
//   };

//   const renderPaymentDetails = () => {
//     switch (formData.paymentMethod) {
//       case "Phone Pe":
//         return (
//           <div className="mb-4">
//             <label className="block mb-1 font-bold">UTR:</label>
//             <input
//               type="text"
//               name="utr"
//               value={formData.utr}
//               onChange={handleChange}
//               className="w-72 px-3 py-2 border rounded"
//               placeholder="Enter UTR"
//               required
//             />
//           </div>
//         );
//       case "Google Pay":
//         return (
//           <div className="mb-4">
//             <label className="block mb-1 font-bold">UPI Transaction ID:</label>
//             <input
//               type="text"
//               name="upiTransactionId"
//               value={formData.upiTransactionId}
//               onChange={handleChange}
//               className="w-72 px-3 py-2 border rounded"
//               placeholder="Enter UPI Transaction ID"
//               required
//             />
//           </div>
//         );
//       case "Paytm":
//         return (
//           <div className="mb-4">
//             <label className="block mb-1 font-bold">UPI Reference ID:</label>
//             <input
//               type="text"
//               name="upiReferenceId"
//               value={formData.upiReferenceId}
//               onChange={handleChange}
//               className="w-72 px-3 py-2 border rounded"
//               placeholder="Enter UPI Reference ID"
//               required
//             />
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <Navbar2 />
//       <div className="flex justify-center items-center md:flex-row flex-col bg-gray-100 gap-16 mt-16">
//         <div>
//           <img src={AddCoinImg} alt="Add Coin" className="h-80 w-80 md:mt-0 mt-4" />
//         </div>
//         <div className="bg-white p-8 rounded shadow-md flex flex-col items-center">
//           <h2 className="text-2xl font-bold mb-4">Add Coins</h2>
//           <form onSubmit={handleSubmit} className="flex flex-col items-center">
//             <div className="mb-4">
//               <label className="block mb-1 font-bold">Coins Deposited:</label>
//               <input
//                 type="number"
//                 name="coinsDeposited"
//                 value={formData.coinsDeposited}
//                 onChange={handleChange}
//                 className="w-72 px-3 py-2 border rounded"
//                 placeholder="Enter the number of coins"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-1 font-bold">Payment Method:</label>
//               <select
//                 name="paymentMethod"
//                 value={formData.paymentMethod}
//                 onChange={handleChange}
//                 className="w-72 px-3 py-2 border rounded"
//                 required
//               >
//                 <option value="">Select Payment Method</option>
//                 <option value="Phone Pe">Phone Pe</option>
//                 <option value="Google Pay">Google Pay</option>
//                 <option value="Paytm">Paytm</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block mb-1 font-bold">Mobile Number:</label>
//               <input
//                 type="text"
//                 name="mobileNumber"
//                 value={formData.mobileNumber}
//                 onChange={handleChange}
//                 className="w-72 px-3 py-2 border rounded"
//                 placeholder="Enter Mobile Number"
//                 required
//               />
//             </div>
//             {renderPaymentDetails()}
//             {error && <p className="text-red-500 mb-4">{error}</p>}
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             >
//               Submit
//             </button>
//           </form>
//           {isPending && <p>Transaction pending approval. Checking status...</p>}
//           {balance !== null && (
//             <p className="text-green-500 mt-4">Current Balance: {balance}</p>
//           )}
//         </div>
//       </div>
//       {showScanner && <Scanner onClose={handleCloseScanner} />}
//     </>
//   );
// };

// export default AddCoins;

// import React, { useState } from "react";
// import axios from 'axios'; // Make sure axios is imported
// import Navbar2 from "../navbar/Navbar2";
// import AddCoinImg from "../../assets/addcoins.png";

// const AddCoins = () => {
//   const [formData, setFormData] = useState({
//     coinsDeposited: "",
//     paymentMethod: "",
//     mobileNumber: "",
//     utr: "",
//     upiTransactionId: "",
//     upiReferenceId: "",
//   });

//   const [showPayment, setShowPayment] = useState(false);
//   const [error, setError] = useState("");
//   const [balance, setBalance] = useState(null);
//   const [isPending, setIsPending] = useState(false);



//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem("token");

//     if (!token) {
//       alert('No token found, please log in.');
//       return;
//     }

//     try {
//       // Prepare payload for the request
//       const payload = {
//         coins: parseInt(formData.coinsDeposited, 10),
//         paymentMethod: formData.paymentMethod,
//         mobileNumber: formData.mobileNumber,
//         utr: formData.utr,
//         upiTransactionId: formData.upiTransactionId,
//         upiReferenceId: formData.upiReferenceId,
//         type: 'deposit',
//       };

//       console.log('Payload:', payload);

//       // Axios request to the endpoint
//       const response = await axios.post('http://localhost:8000/api/v1/addCoins', payload, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': Bearer ${token}
//         }
//       });

//       console.log('Response:', response);

//       if (response.status === 201) {
//         alert('Deposit success');
//         setFormData({
//           coinsDeposited: "",
//           paymentMethod: "",
//           mobileNumber: "",
//           utr: "",
//           upiTransactionId: "",
//           upiReferenceId: "",
//         });
//         setShowPayment(false);
//       } else {
//         alert('Error in deposit');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Failed to connect to server. Please check your connection and try again.');
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const renderPaymentDetails = () => {
//     switch (formData.paymentMethod) {
//       case "Phone Pe":
//         return (
//           <div className="mb-4">
//             <label className="block mb-1 font-bold">UTR:</label>
//             <input
//               type="text"
//               name="utr"
//               value={formData.utr}
//               onChange={handleChange}
//               className="w-72 px-3 py-2 border rounded"
//               placeholder="Enter UTR"
//               required
//             />
//           </div>
//         );
//       case "Google Pay":
//         return (
//           <div className="mb-4">
//             <label className="block mb-1 font-bold">UPI Transaction ID:</label>
//             <input
//               type="text"
//               name="upiTransactionId"
//               value={formData.upiTransactionId}
//               onChange={handleChange}
//               className="w-72 px-3 py-2 border rounded"
//               placeholder="Enter UPI Transaction ID"
//               required
//             />
//           </div>
//         );
//       case "Paytm":
//         return (
//           <div className="mb-4">
//             <label className="block mb-1 font-bold">UPI Reference ID:</label>
//             <input
//               type="text"
//               name="upiReferenceId"
//               value={formData.upiReferenceId}
//               onChange={handleChange}
//               className="w-72 px-3 py-2 border rounded"
//               placeholder="Enter UPI Reference ID"
//               required
//             />
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <Navbar2 />
//       <div className="flex justify-center items-center md:flex-row flex-col bg-gray-100 gap-16 mt-16">
//         <div>
//           <img src={AddCoinImg} alt="Add Coin" className="h-80 w-80 md:mt-0 mt-4" />
//         </div>
//         <div className="bg-white p-8 rounded shadow-md flex flex-col items-center">
//           <h2 className="text-2xl font-bold mb-4">Add Coins</h2>
//           <form onSubmit={handleSubmit} className="flex flex-col items-center">
//           <div className="mb-4">
//               <label className="block mb-1 font-bold">UserId:</label>
//               <input
//                 type="text"
//                 name="coinsDeposited"
//                 value={formData.coinsDeposited}
//                 onChange={handleChange}
//                 className="w-72 px-3 py-2 border rounded"

//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-1 font-bold">userName</label>
//               <input
//                 type="text"
//                 name="coinsDeposited"
//                 value={formData.coinsDeposited}
//                 onChange={handleChange}
//                 className="w-72 px-3 py-2 border rounded"

//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block mb-1 font-bold">Coins Deposited:</label>
//               <input
//                 type="number"
//                 name="coinsDeposited"
//                 value={formData.coinsDeposited}
//                 onChange={handleChange}
//                 className="w-72 px-3 py-2 border rounded"
//                 placeholder="Enter the number of coins"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-1 font-bold">Payment Method:</label>
//               <select
//                 name="paymentMethod"
//                 value={formData.paymentMethod}
//                 onChange={handleChange}
//                 className="w-72 px-3 py-2 border rounded"
//                 required
//               >
//                 <option value="">Select Payment Method</option>
//                 <option value="Phone Pe">Phone Pe</option>
//                 <option value="Google Pay">Google Pay</option>
//                 <option value="Paytm">Paytm</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block mb-1 font-bold">Mobile Number:</label>
//               <input
//                 type="text"
//                 name="mobileNumber"
//                 value={formData.mobileNumber}
//                 onChange={handleChange}
//                 className="w-72 px-3 py-2 border rounded"
//                 placeholder="Enter Mobile Number"
//                 required
//               />
//             </div>
//             {renderPaymentDetails()}
//             {error && <p className="text-red-500 mb-4">{error}</p>}
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             >
//               Submit
//             </button>
//           </form>
//           {isPending && <p>Transaction pending approval. Checking status...</p>}
//           {balance !== null && (
//             <p className="text-green-500 mt-4">Current Balance: {balance}</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddCoins;



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
      <div className="flex justify-center items-center md:flex-row flex-col bg-gray-100 gap-16 mt-16">
        <div>
          <img src={AddCoinImg} alt="Add Coin" className="h-80 w-80 md:mt-0 mt-4" />
        </div>
        <div className="bg-white p-8 rounded shadow-md flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Add Coins</h2>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
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