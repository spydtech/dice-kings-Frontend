import { useEffect, useState } from "react";
import axios from "axios";
import Navbar2 from "../navbar/Navbar2";

const LeaderboardMonthly = () => {
  const [data, setData] = useState([]);
  const [totalWins, setTotalWins] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const list = await axios.get("./leaderboard_data.json");
      setData(list.data);
      const total = list.data.reduce((acc, item) => acc + item.win, 0);
      setTotalWins(total);
    };
    getData();
  }, []);
  return (
    <>
      <div className=" pt-3 font-lora">
        {/* <h1 className=" text-2xl text-center md:text-4xl font-bold font-lora">
          Monthly Win :{" "}
          <span className=" text-red-600 bg-white px-2 rounded-md">
            {totalWins}
          </span> */}
        {/* </h1> */}
        {/* <p className=" pl-3 font-semibold text-xl md:text-3xl ">Leader Board</p> */}
        <hr className="mx-3" />
        {/* <div className=" m-4 text-center md:flex flex-col justify-center border-2 px-5 py-3 rounded-xl bg-white drop-shadow-xl">
          <h1 className=" text-lg font-bold m-2 md:text-2xl">
            Monthly Top Winners
          </h1>
          <table className="border-2 border-black w-full md:w-full self-center">
            <thead>
              <tr className=" border-b-2 border-black bg-gray-500 text-white">
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
                        <td className=" border-2 border-black md:text-lg">
                          {row[i]}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div> */}
      </div>
    </>
  );
};
export default LeaderboardMonthly;
