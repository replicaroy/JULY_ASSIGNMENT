import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';

let cartarr = JSON.parse(localStorage.getItem("cartitems")) || [];

const Prductdetails = (item)=> {
  // let itemId = i;
  // let itemImg = item.image;
  // let itemprice = item.price ;
  // let itemdetail = item.name;
  cartarr.push(item);
  console.log(cartarr);
  localStorage.setItem("cartitems", JSON.stringify(cartarr));

}
const Hero = ({data}) => {
  return (
    <>     
        <div
          className="containers min-h-screen  "  
          style={{ padding: "1% 10%", margin: "auto", marginTop: "30px" }}
        >
          <div className="main-item custom-grid" style={{}}   >
          {data.map((item, i) => (
            <div className="item rounded shadow-md m-auto" style={{maxWidth: 300}} key={i}  >
              <div className="img" style={{width: '100%'}}>
                <img src={item.image} alt="image" />
              </div>
              <div className="details text-md text-gray-700 px-2 py-2"  >
                {/* <p>{typeof item.name === 'string' ? item.name.slice(0, 20) : ''}</p> */}
                <p>{item.name ? item.name.slice(0, 30) : "No Name"}</p>
              </div>
              <div className="desc flex justify-between py-2 px-2 text-xl text-gray-800">
                <p>$ {item.price}</p>
                <p className="text-sm">Rating {item.rating}</p>
              </div>
              <div className="btn-div">
                <button className="btn border shadow" onClick={()=> Prductdetails(item)} >Add to Cart</button>
              </div>
            </div>
          ))}
          </div>
        </div>
    
      {/* <div className="carousel"></div> */}
    </>
  );
};

export default Hero;

