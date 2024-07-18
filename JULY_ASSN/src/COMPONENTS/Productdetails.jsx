import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../App.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
        const res = await axios.get(`https://renderjsondata.onrender.com/men/${id}`);
        setProduct(res.data);        
    } catch (error) {
        console.log(error)
    }
  };

  useEffect(() => {  
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail container" style={{ padding: "1% 4%", margin: "auto", marginTop: "100px" }}>
      <div className="product-image" style={{ width: '100%' }}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info text-xl text-gray-700 px-2 py-1">
        <h2>{product.name}</h2>
        <p>$ {product.price}</p>
        <p>Rating: {product.rating}</p>
        <button className="btn add-to-cart">Add to Cart</button>
        <button className="btn buy-now">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetail;
