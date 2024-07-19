import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Drawer } from 'antd';




const Header = () => {
let cartarr = JSON.parse(localStorage.getItem("cartitems")) || [];
console.log(cartarr, '1234');

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div
      className="header flex justify-between fixed shadow uppercase font-bold bg-white "
      style={{ width: '100%', left: 0, top: 0, alignItems: 'center', zIndex: 100, padding: '10px 10%' }}
    >
      <div className="header-log ">
        <img
          src="https://www.svgrepo.com/show/217771/shopping-logo.svg"
          alt=""
          style={{ width: '60px' }}
        />
      </div>
      <div className="menu flex justify-between gap-28 " >
        <Link to="/"style={{textDecoration: 'none'}} >Men</Link>
        <Link to="/women"  style={{textDecoration: 'none'}}>Women</Link>
        <Link to="/girls" style={{textDecoration: 'none'}} >Girls</Link>
        <Link to="/about " style={{textDecoration: 'none'}} >About</Link>
      </div>
      <div className="search">
        <input
          type="text"
          name=""
          id=""
          className="border rounded-full outline-none px-4 py-1"
          style={{ border: '1px solid #aaa' }}
        />
      </div>
      <div className="menubar "></div>
      <div className="cart-btn">
        <div className="btn">
          <button onClick={showDrawer}>CRT</button>
        </div>
      </div>

      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
      <div className="ProductDisplay ">
        {
          cartarr.map((cart)=> (
      <div className="cartitems flex gap-12 mb-3 " style={{}} >
        <div className="img-div">
          <img src={cart.image} alt="" className='w-20' />
        </div>
        <div className="details">
          <p>details</p>
        </div>
        <div className="o-details flex gap-3">
          <div className="minue border">
            -
          </div>
          <div className="q-display border ">
            <p>q</p>
          </div>
          <div className="plus border ">
            +
          </div>
        </div>
        </div>

          ))
        }
      </div>
      </Drawer>
    </div>
  );
};

export default Header;
