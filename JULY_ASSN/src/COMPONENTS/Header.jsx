import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Header = () => {
  return (
    <div
      className="header flex justify-between fixed  p-2 px-60 shadow uppercase font-bold bg-white "
      style={{ width: "100%", left: 0, top: 0, alignItems: "center", zIndex: 100 }}
    >
      <div className="header-log ">
        <img
          src="https://www.svgrepo.com/show/217771/shopping-logo.svg"
          alt=""
          style={{ width: "70px" }}
        />
      </div>
      <div className="menu flex justify-between gap-28 ">
        <a href="">Home</a>
        <a href="">Products</a>
        <a href="">Gallery</a>
        <a href="">About US</a>
        <a href="">Contacts</a>
      </div>
      <div className="search">
        <input
          type="text"
          name=""
          id=""
          className="border rounded-full outline-none  px-4 py-1"
          style={{ border: "1px solid  #aaa" }}
        />
      </div>
      <div className="menubar "></div>
    </div>
  );
};

export default Header;
