import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

const Hero = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      let res = await axios.get("https://renderjsondata.onrender.com/men");
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
        <div
          className="container"
          style={{ padding: "1% 4%", margin: "auto", marginTop: "100px" }}
        >
          <div className="main-item custom-grid" style={{}}>
          {data.map((item, i) => (
            <div className="item rounded shadow-md" style={{maxWidth: 300}} key={i}>
              <div className="img" style={{width: '100%'}}>
                <img src={item.image} alt="image" />
              </div>
              <div className="details text-md text-gray-700 px-2 p-1">
                <p>{typeof item.name === 'string' ? item.name.slice(0, 20) : ''}</p>
              </div>
              <div className="desc flex justify-between px-3 text-xl text-gray-600">
                <p>$ {item.price}</p>
                <p className="text-sm">Rating {item.rating}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
    
      <div className="carousel"></div>
    </>
  );
};

export default Hero;
