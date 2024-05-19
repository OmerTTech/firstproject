import React from "react";
import "./inputHeader.css";
import axios from "axios";
const InputHeader = ({ input, setItems }) => {
 
  const searchHandler = (e) => {
   const filteredData = input.filter((element) => {
    
    return element.title.slice(0,e.target.value.length).toLowerCase() === e.target.value.toLowerCase() ? element : null
    });
    if (e.target.value.length === 0) {
      const getProducts = async () => {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setItems(data);
      };
      getProducts();
    } else {
      setItems(filteredData)
    }
  };
  return (
    <div className="inputH">
      <input onChange={searchHandler} type="text" placeholder="Search" />
    </div>
  );
};

export default InputHeader;
