import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/productcard/ProductCard";
import "./product.css";
import InputHeader from "../../components/input/InputHeader";
import Select from "../../components/select/Select";
import PulseLoader from "react-spinners/ClipLoader";
const Product = () => {
  const [items, setItems] = useState([]);
  const [val, setVal] = useState();

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setItems(data);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getCategory = async () => {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setVal(data);
    };
    getCategory();
  }, []);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between px-5">
        <InputHeader setItems={setItems} input={items} />
        <span>
          <Select setItems={setItems} category={val} />
        </span>
      </div>

      <div className="container  my-3">
        <div className="row row-gap-3">
          {items ? (
            items.map((element) => {
              return <ProductCard key={element.id} link={element} />;
            })
          ) : (
            <PulseLoader color="#36d7b7" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
