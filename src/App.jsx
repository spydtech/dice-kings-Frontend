/* eslint-disable no-unused-vars */
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./Components/home/Home";
// import Login from "./Components/login/Login2";
// import Navbar from "./Components/navbar/Navbar2";
// import Profile from "./Components/profile/Profile";
// import SignUp from "./Components/signup/SignUp2";
// import Message from "./Components/message/Message";
// import History from "./Components/History/History";
// // import LeaderBoard from "./Components/LeaderBoard/LeaderBoard";
// import AddCoins from "./Components/addCoines/AddCoins";
// import WithdrawCoins from "./Components/withdrawCoins/WithdrawCoins";
// import Balance from "./Components/balance/Balance";
// import GameZone from "./Components/gamezone/GameZone";
// // import LeaderBoardUi from "./Components/LeaderBoard/LeaderBoardUi";
// import LeaderboardContainer from "./Components/LeaderBoard/LeaderBoardContainer";

// const AppContent = () => {
//   return (
//     <div className="content">
//       <Routes>
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/login" element={<Login />} />

//         <Route path="/message" element={<Message />} />

//         <Route path="/gamezone" element={<GameZone />} />
//         <Route path="/history" element={<History />} />
//         <Route path="/leaderboard" element={<LeaderboardContainer />} />
//         <Route path="/addcoins" element={<AddCoins />} />
//         <Route path="/withdrawcoins" element={<WithdrawCoins />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/balance" element={<Balance />} />
//         {/* <Route path="/ui" element={<LeaderBoardUi />} /> */}
//       </Routes>
//     </div>
//   );
// };

// function App() {
//   return (
//     <BrowserRouter>
//       <AppContent />
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/home/Home";
import TermandCondition from "./Components/home/Term&Condition/TermandCondition";
import Login from "./Components/login/Login2";
import Navbar from "./Components/navbar/Navbar2";
import Profile from "./Components/profile/Profile";
import SignUp from "./Components/signup/SignUp2";
import Message from "./Components/message/Message";
import History from "./Components/History/History";
import Dashboard from "./Admin/Components/Dashboard";
import AddCoins from "./Components/addCoines/AddCoins";
import WithdrawCoins from "./Components/withdrawCoins/WithdrawCoins";
import Balance from "./Components/balance/Balance";
import GameZone from "./Components/gamezone/GameZone";
import UpcomingSingle from "./Components/gamezone/single/UpcomingSingle";
import UpcomingDouble from "./Components/gamezone/double/UpcomingDouble";
import LiveSingle from "./Components/gamezone/single/LiveSingle";
import LiveDouble from "./Components/gamezone/double/LiveDouble";
import LeaderboardContainer from "./Components/LeaderBoard/LeaderBoardContainer";
import AdminRouter from "./Router/AdminRouter";

const AppContent = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Login />} />
        <Route path="/message" element={<Message />} />
        <Route path="/admin/*" element={<AdminRouter />} />
        <Route path="/admin1" element={<Dashboard />} />
        <Route path="/gamezone" element={<GameZone />} />
        <Route path="/history" element={<History />} />
        <Route path="/leaderboard" element={<LeaderboardContainer />} />
        <Route path="/addcoins" element={<AddCoins />} />
        <Route path="/withdrawcoins" element={<WithdrawCoins />} />
        <Route path="/home" element={<Home />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/termandcondition" element={<TermandCondition />} />
        <Route path="/upcomingsingle" element={<UpcomingSingle />} />
        <Route path="/upcomingdouble" element={<UpcomingDouble />} />
        <Route path="/livesingle" element={<LiveSingle />} />
        <Route path="/livedouble" element={<LiveDouble />} />

        {/* <Route path="/ui" element={<LeaderBoardUi />} /> */}
      </Routes>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
