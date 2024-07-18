import React, { useState } from "react";
import "../App.css";
import axios from "axios";

const HEro = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    let res = await axios.get("https://renderjsondata.onrender.com/men");
    res = res.data;
    setData(res);
    console.log(data);
  };
  getData();

  return (
    <>
      {data.map((item) => (
        <div
          className="container"
          style={{ padding: "1% 4%", margin: "auto", marginTop: "100px" }}
        >
          <div className="main-item custom-grid">
            <div className="item">
              <div className="img">
                <img src={item.image} alt="image" />
              </div>
              <div className="details  text-xl text-gray-700  px-4 ">
                <p>{item.name}</p>
              </div>
              <div className="desc flex justify-between px-4  text-2xl text-gray-600">
                <p className=" ">{item.price}</p> <p>{item.rating}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="carausal"></div>
    </>
  );
};

export default HEro;
