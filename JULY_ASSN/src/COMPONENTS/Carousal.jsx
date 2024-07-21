import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carousal = () => {
  return (
    <div className=''>
    <Carousel className=' mx-2 ' style={{marginTop: '90px', }}>
      <Carousel.Item>
        <img
          className="d-block w-100 object min-h-32" 
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/50c473c8fd544304.jpeg?q=20"
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
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d32fe11cd7824fb0.jpeg?q=90"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Carousal;
