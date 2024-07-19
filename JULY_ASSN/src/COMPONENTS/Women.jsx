import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import HEro from "./HEro";


const Women = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      let res = await axios.get("https://render-json-server-a4l5.onrender.com/women");
    //   https://render-json-server-a4l5.onrender.com/Women
    // https://render-json-server-a4l5.onrender.com/women
      res = res.data;
      setData(res);
      console.log(data);      
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {  
    getData();
  }, []);

  return (
    <>     
    <HEro data={data}/>   
    </>
  );
};

export default Women;
