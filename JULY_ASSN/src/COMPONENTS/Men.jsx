import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import HEro from "./HEro";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Men = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      let res = await axios.get("https://render-json-server-a4l5.onrender.com/men");
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
    <HEro data={data} data-aos="fade-up" />   
    </>
  );
};

export default Men;
