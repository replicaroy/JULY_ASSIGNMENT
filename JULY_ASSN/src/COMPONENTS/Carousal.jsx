import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carousal = () => {
  return (
    <div className=''>
    <Carousel className='  lg:mx-44 ' style={{marginTop: '90px', }}>
      <Carousel.Item>
        <img
          className="d-block w-100 object min-h-32  " 
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/cc4cf0843be9e4a8.jpg?q=20"
          alt="First slide"
        />  
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 min-h-32 "
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/c0c6613318fe22ff.jpg?q=90"
          alt="Second slide"
        />    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 min-h-32 "
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e0e3dbc99b6b1d83.jpeg?q=20"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Carousal;
