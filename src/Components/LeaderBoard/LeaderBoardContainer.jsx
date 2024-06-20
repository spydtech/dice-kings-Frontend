import React, { useState } from "react";
import LeaderboardDaily from "./LeaderBoarddaily";
import LeaderboardWeekly from "./LeaderBoardWeek";
import LeaderboardMonthly from "./LeaderBoardMonthly";
import LeaderBoardUi from "./LeaderBoardUi";
import Navbar2 from "../navbar/Navbar2";

const LeaderboardContainer = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <>
      <Navbar2></Navbar2>
      <div className="">
        <LeaderBoardUi setActiveTab={setActiveTab} />
        {activeTab === "daily" && <LeaderboardDaily />}
        {activeTab === "weekly" && <LeaderboardWeekly />}
        {activeTab === "monthly" && <LeaderboardMonthly />}
      </div>
    </>
  );
};

export default LeaderboardContainer;
