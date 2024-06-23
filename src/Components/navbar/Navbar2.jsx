
// // import React, { useState } from "react";
// // import Dice from "../../assets/dice.jpg";
// // import { Link } from "react-router-dom";

// // const Navbar2 = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [activeTab, setActiveTab] = useState("home"); // Initial active tab

// //   const toggleSidebar = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   const handleTabClick = (tabName) => {
// //     setActiveTab(tabName);
// //     setIsOpen(true); // Close mobile menu on tab click
// //   };

// //   return (
// //     <>
// //       <nav className="border-gray-200 py-2.5 bg-[#0d3b66] text-white">
// //         <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
// //           <Link to="/" className="flex items-center">
// //             <img
// //               src={Dice}
// //               className="w-auto h-[54px] rounded-lg"
// //               alt="Landwind Logo"
// //             />
// //             {/* <span className="self-center text-xl font-semibold font-cursive whitespace-nowrap">
// //             Dice-King
// //           </span> */}
// //             {/* <div className="font-bold text-white text-xl ml-10 xl:ml-0">
// //             <Link to={'/'}><span className='text-[40px]'>D</span>ice <span className='text-[40px]'>K</span>ing<br /></Link>

// //           </div> */}
// //           </Link>
// //           <div className="flex items-center lg:order-2">
// //             <div className="hidden mt-2 mr-4 sm:inline-block font-lora">
// //               <span />
// //             </div>
// //             <Link
// //               to="https://themesberg.com/product/tailwind-css/landing-page"
// //               className="text-white bg-purple-700 lg:md:xl:mr-3 mr-5 hover:bg-purple-800 focus:ring-4 font-lora ml-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:ml-8 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
// //             >
// //               Admin
// //             </Link>
// //             <Link
// //               to="/login"
// //               className="text-white bg-purple-700 hover:bg-purple-800 font-lora focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
// //             >
// //               Logout
// //             </Link>
// //             <button
// //               data-collapse-toggle="mobile-menu-2"
// //               type="button"
// //               className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
// //               aria-controls="mobile-menu-2"
// //               aria-expanded={isOpen ? "true" : "false"}
// //               onClick={toggleSidebar}
// //             >
// //               <span className="sr-only">Open main menu</span>
// //               <svg
// //                 className={`${isOpen ? "hidden" : "block"} w-6 h-6`}
// //                 fill="currentColor"
// //                 viewBox="0 0 20 20"
// //                 xmlns="http://www.w3.org/2000/svg"
// //               >
// //                 <path
// //                   fillRule="evenodd"
// //                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
// //                   clipRule="evenodd"
// //                 />
// //               </svg>
// //               <svg
// //                 className={`${isOpen ? "block" : "hidden"} w-6 h-6`}
// //                 fill="currentColor"
// //                 viewBox="0 0 20 20"
// //                 xmlns="http://www.w3.org/2000/svg"
// //               >
// //                 <path
// //                   fillRule="evenodd"
// //                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
// //                   clipRule="evenodd"
// //                 />
// //               </svg>
// //             </button>
// //           </div>
// //           <div
// //             className={`${
// //               isOpen ? "block" : "hidden"
// //             } items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
// //             id="mobile-menu-2"
// //           >
// //             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
// //               <li>
// //                 <Link
// //                   to="/"
// //                   className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${
// //                     activeTab === "home" ? "border-b-2 border-purple-700" : ""
// //                   }`}
// //                   aria-current={activeTab === "home" ? "page" : undefined}
// //                   onClick={() => handleTabClick("home")}
// //                 >
// //                   Home
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link
// //                   to="/gamezone"
// //                   className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${
// //                     activeTab === "gameZone"
// //                       ? "border-b-2 border-purple-700"
// //                       : ""
// //                   }`}
// //                   aria-current={activeTab === "gameZone" ? "page" : undefined}
// //                   onClick={() => handleTabClick("gameZone")}
// //                 >
// //                   Game Zone
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link
// //                   to="/addcoins"
// //                   className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${
// //                     activeTab === "addCoins"
// //                       ? "border-b-2 border-purple-700"
// //                       : ""
// //                   }`}
// //                   aria-current={activeTab === "addCoins" ? "page" : undefined}
// //                   onClick={() => handleTabClick("addCoins")}
// //                 >
// //                   Add Coins
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link
// //                   to="/balance"
// //                   className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${
// //                     activeTab === "balance"
// //                       ? "border-b-2 border-purple-700"
// //                       : ""
// //                   }`}
// //                   aria-current={activeTab === "balance" ? "page" : undefined}
// //                   onClick={() => handleTabClick("balance")}
// //                 >
// //                   Balance
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link
// //                   to="/withdrawcoins"
// //                   className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${
// //                     activeTab === "withdrawCoins"
// //                       ? "border-b-2 border-purple-700"
// //                       : ""
// //                   }`}
// //                   aria-current={
// //                     activeTab === "withdrawCoins" ? "page" : undefined
// //                   }
// //                   onClick={() => handleTabClick("withdrawCoins")}
// //                 >
// //                   Withdraw Coins
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link
// //                   to="/leaderboard"
// //                   className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${
// //                     activeTab === "leaderBoard"
// //                       ? "border-b-2 border-purple-700"
// //                       : ""
// //                   }`}
// //                   aria-current={
// //                     activeTab === "leaderBoard" ? "page" : undefined
// //                   }
// //                   onClick={() => handleTabClick("leaderBoard")}
// //                 >
// //                   Leader Board
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link
// //                   to="/history"
// //                   className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${
// //                     activeTab === "history"
// //                       ? "border-b-2 border-purple-700"
// //                       : ""
// //                   }`}
// //                   aria-current={activeTab === "history" ? "page" : undefined}
// //                   onClick={() => handleTabClick("history")}
// //                 >
// //                   History
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link
// //                   to="/profile"
// //                   className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${
// //                     activeTab === "profile"
// //                       ? "border-b-2 border-purple-700"
// //                       : ""
// //                   }`}
// //                   aria-current={activeTab === "profile" ? "page" : undefined}
// //                   onClick={() => handleTabClick("profile")}
// //                 >
// //                   Profile
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link
// //                   to="/message"
// //                   className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${
// //                     activeTab === "message"
// //                       ? "border-b-2 border-purple-700"
// //                       : ""
// //                   }`}
// //                   aria-current={activeTab === "message" ? "page" : undefined}
// //                   onClick={() => handleTabClick("message")}
// //                 >
// //                   Message
// //                 </Link>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </nav>
// //     </>
// //   );
// // };

// // export default Navbar2;


// import React, { useState } from "react";
// import Dice from "../../assets/dice.jpg";
// import { Link } from "react-router-dom";

// const Navbar2 = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("home");

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleTabClick = (tabName) => {
//     setActiveTab(tabName);
//     setIsOpen(false); // Close mobile menu on tab click
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 right-0 border-gray-200 py-2.5 bg-[#0d3b66] text-white z-50">
//         <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
//           <Link to="/" className="flex items-center">
//             <img
//               src={Dice}
//               className="w-auto h-[54px] rounded-lg"
//               alt="Landwind Logo"
//             />
//           </Link>
//           <div className="flex items-center lg:order-2">
//             <div className="hidden mt-2 mr-4 sm:inline-block font-lora">
//               <span />
//             </div>
//             <Link
//               to="https://themesberg.com/product/tailwind-css/landing-page"
//               className="text-white bg-purple-700 lg:md:xl:mr-3 mr-5 hover:bg-purple-800 focus:ring-4 font-lora ml-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:ml-8 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
//             >
//               Admin
//             </Link>
//             <Link
//               to="/login"
//               className="text-white bg-purple-700 hover:bg-purple-800 font-lora focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
//             >
//               Logout
//             </Link>
//             <button
//               data-collapse-toggle="mobile-menu-2"
//               type="button"
//               className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               aria-controls="mobile-menu-2"
//               aria-expanded={isOpen ? "true" : "false"}
//               onClick={toggleSidebar}
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className={`${isOpen ? "hidden" : "block"} w-6 h-6`}
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               <svg
//                 className={`${isOpen ? "block" : "hidden"} w-6 h-6`}
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div
//             className={`${
//               isOpen ? "block" : "hidden"
//             } items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
//             id="mobile-menu-2"
//           >
//             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
//               <li>
//                 <Link
//                   to="/"
//                   className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${
//                     activeTab === "home" ? "border-b-2 border-purple-700" : ""
//                   }`}
//                   aria-current={activeTab === "home" ? "page" : undefined}
//                   onClick={() => handleTabClick("home")}
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/gamezone"
//                   className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${
//                     activeTab === "gameZone"
//                       ? "border-b-2 border-purple-700"
//                       : ""
//                   }`}
//                   aria-current={activeTab === "gameZone" ? "page" : undefined}
//                   onClick={() => handleTabClick("gameZone")}
//                 >
//                   Game Zone
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/addcoins"
//                   className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${
//                     activeTab === "addCoins"
//                       ? "border-b-2 border-purple-700"
//                       : ""
//                   }`}
//                   aria-current={activeTab === "addCoins" ? "page" : undefined}
//                   onClick={() => handleTabClick("addCoins")}
//                 >
//                   Add Coins
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/balance"
//                   className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${
//                     activeTab === "balance"
//                       ? "border-b-2 border-purple-700"
//                       : ""
//                   }`}
//                   aria-current={activeTab === "balance" ? "page" : undefined}
//                   onClick={() => handleTabClick("balance")}
//                 >
//                   Balance
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/withdrawcoins"
//                   className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${
//                     activeTab === "withdrawCoins"
//                       ? "border-b-2 border-purple-700"
//                       : ""
//                   }`}
//                   aria-current={
//                     activeTab === "withdrawCoins" ? "page" : undefined
//                   }
//                   onClick={() => handleTabClick("withdrawCoins")}
//                 >
//                   Withdraw Coins
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/leaderboard"
//                   className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${
//                     activeTab === "leaderBoard"
//                       ? "border-b-2 border-purple-700"
//                       : ""
//                   }`}
//                   aria-current={
//                     activeTab === "leaderBoard" ? "page" : undefined
//                   }
//                   onClick={() => handleTabClick("leaderBoard")}
//                 >
//                   Leader Board
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/history"
//                   className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${
//                     activeTab === "history"
//                       ? "border-b-2 border-purple-700"
//                       : ""
//                   }`}
//                   aria-current={activeTab === "history" ? "page" : undefined}
//                   onClick={() => handleTabClick("history")}
//                 >
//                   History
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/profile"
//                   className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${
//                     activeTab === "profile"
//                       ? "border-b-2 border-purple-700"
//                       : ""
//                   }`}
//                   aria-current={activeTab === "profile" ? "page" : undefined}
//                   onClick={() => handleTabClick("profile")}
//                 >
//                   Profile
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/message"
//                   className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${
//                     activeTab === "message"
//                       ? "border-b-2 border-purple-700"
//                       : ""
//                   }`}
//                   aria-current={activeTab === "message" ? "page" : undefined}
//                   onClick={() => handleTabClick("message")}
//                 >
//                   Message
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar2;

import { useState } from "react";
import Dice from "../../assets/dice.jpg";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    localStorage.clear();

  }

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (

    <nav
      className={` fixed top-0 left-0 right-0 border-gray-200 py-2.5 bg-[#0d3b66] text-white z-50`}
    >
      <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto">
        <Link to="/" className="flex items-center ">
          <img
            src={Dice}
            className="w-auto h-[54px] rounded-lg "

            alt="Landwind Logo"
          />
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"

          aria-expanded={isOpen ? "true " : "false"}

          onClick={toggleSidebar}
        >
          <span className="sr-only">Open main menu</span>
          <svg

            className={`${isOpen ? "hidden " : "block "} w-6 h-6 `}

            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"

            />
          </svg>
          <svg
            className={`${isOpen ? "block" : "hidden"} w-6 h-6`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>

        </button>
        <div
          className={`${isOpen ? "block" : "hidden"
            } items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
            <li>
              <NavLink
                exact
                to="/"
                className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${isActive("/") ? "border-b-2 border-purple-700" : ""
                  }`}
                onClick={toggleSidebar}

              >
                Home

              </NavLink>
            </li>
            <li>
              <NavLink

                to="/gamezone"
                className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${isActive("/gamezone") ? "border-b-2 border-purple-700" : ""
                  }`}
                onClick={toggleSidebar}
              >
                Game Zone
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addcoins"
                className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${isActive("/addcoins") ? "border-b-2 border-purple-700" : ""
                  }`}
                onClick={toggleSidebar}
              >
                Add Coins
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/balance"
                className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${isActive("/balance") ? "border-b-2 border-purple-700" : ""
                  }`}
                onClick={toggleSidebar}
              >
                Balance
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/withdrawcoins"
                className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${isActive("/withdrawcoins")
                  ? "border-b-2 border-purple-700"
                  : ""
                  }`}
                onClick={toggleSidebar}
              >
                Withdraw Coins
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/leaderboard"
                className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${isActive("/leaderboard") ? "border-b-2 border-purple-700" : ""
                  }`}
                onClick={toggleSidebar}
              >

                Leader Board
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/history"
                className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${isActive("/history") ? "border-b-2 border-purple-700" : ""
                  }`}
                onClick={toggleSidebar}
              >
                History
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${isActive("/profile") ? "border-b-2 border-purple-700" : ""
                  }`}
                onClick={toggleSidebar}
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/message"
                className={`block font-lora py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 ${isActive("/message") ? "border-b-2 border-purple-700" : ""
                  }`}
                onClick={toggleSidebar}
              >
                Message
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex items-center lg:order-2">
          <a
            href="/admin-dashboard"
            className="text-white bg-purple-700 lg:md:xl:mr-3 mr-5 hover:bg-purple-800 focus:ring-4 font-lora ml-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:ml-8 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
            onClick={toggleSidebar}
          >
            Admin
          </a>
          <NavLink
            to="/"
            className="text-white bg-purple-700 hover:bg-purple-800 font-lora focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
            onClick={logout}
          >
            Logout
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
