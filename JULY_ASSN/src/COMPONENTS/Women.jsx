import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import HEro from "./HEro";


const Women = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  const getData = async () => {
    try {
      setLoading(true);
      let res = await axios.get(
        "https://render-json-server-a4l5.onrender.com/women"
      );
      res = res.data;
      setData(res);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading)
    return (
      <div className="grid place-items-center min-h-96 ">
                <div className=" animate-spin border-gray-400 text-4xl w-10 font-bold border-8 border-b-black border-dotted rounded-full p-10 ">

          {" "}
        </div>
      </div>
    );

  return (
    <>     
    <HEro data={data}/>   
    </>
  );
};

export default Women;
