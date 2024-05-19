import React, { useContext, useEffect, useState } from "react";
import "./details.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CartContext } from '../../context/CartContext'
import apiURLs from "../../api/api";

const Details = () => {
  const [item, setItem] = useState();
  const { id } = useParams();
  const {addToCart} = useContext(CartContext)

  useEffect(() => {
    const getItem = async () => {
      await axios
        .get(`${apiURLs.productAPI}/${id}`)
        .then((resolve) => setItem(resolve.data))
        .catch((error) => console.log(error));
    };
    getItem();
  });

  const addHandler = () => {
    addToCart({
      id: id,
      title: item.title,
      price: item.price,
      image: item.image,
      count: 1
    })
  }


  return (
  item&&<div className="container">
    <div className="wrapper">
      <img src={item.image} alt="" />
      <div className="body">
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <div className="click">
          <p>{item.price}$</p>
          <button className="button" onClick={addHandler}>Add To Card</button>
        </div>
      </div>
    </div>

  </div>
  );
};

export default Details;
