import { useState, useEffect } from "react";
import axios from "axios";
import Navbar2 from "../navbar/Navbar2";
const History = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const list = await axios.get("http://localhost:8000/api/v1/all-history");
      console.log(list)
      setData(list.data);
    };
    getData();
  }, []);

  return (
    <>
    
      <Navbar2 />
      <h1 className="text-center font-lora text-[30px]  mt-20 font-semibold md:text-[40px] md:text-center">
        History
      </h1>
      <div className=" bg-white sm:max-w-full overflow-auto lg:flex justify-center border-2 m-4 drop-shadow-2xl rounded-xl">
        <table className=" border-2 m-4 md:w-full ">
          <thead>
            <tr className=" bg-blue-800 text-white">
              <th className=" border-2 px-2 border-black">Game</th>
              <th className=" border-2 px-2 border-black">Entry Coins</th>
              <th className=" border-2 px-2 border-black">Dare By</th>
              <th className=" border-2 px-2 border-black">Accepted By</th>
              <th className=" border-2 px-2 border-black">Room Id</th>
              <th className=" border-2 px-2 border-black">Winner</th>
              <th className=" border-2 px-2 border-black">Winner Coins</th>
              <th className=" border-2 px-2 border-black">Date</th>
              <th className=" border-2 px-2 border-black">Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => {
              return (
                <tr>
              
                      <td className=" border-2 px-2 border-black text-center"> {d.game}</td>
                      <td className=" border-2 px-2 border-black text-center"> {d.entryCoins}</td>
                      <td className=" border-2 px-2 border-black text-center"> {d.dareBy}</td>
                      <td className=" border-2 px-2 border-black text-center"> {d.acceptedBy}</td>
                      <td className=" border-2 px-2 border-black text-center"> {d.roomId}</td>
                      <td className=" border-2 px-2 border-black text-center"> {d.winner}</td>
                      <td className=" border-2 px-2 border-black text-center"> {d.winnerCoins}</td>
                      <td className=" border-2 px-2 border-black text-center"> {d.date}</td>
                      <td className=" border-2 px-2 border-black text-center"> {d.time}</td>
                 
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default History;
