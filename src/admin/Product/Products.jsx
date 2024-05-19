import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import apiURLs from "../../api/api";

const Products = () => {
  const [items, setItems] = useState();
  const [count, setCount] = useState(5);
  const navigate = useNavigate()
  useEffect(() => {
    const getCategories = () => {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getCategories();
  }, []);

  const clickHandler = () => {
    setCount(count + 5);
  };

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`${apiURLs.productAPI}/${id}`)
      toast.success('Product deleted...')
      navigate('/')
    } catch (error) {
      toast.error('Error occured...')
    }
  }
  
  return (
    <div className="container p-4">
      <h1>All Categories</h1>
      <table className="table table-bordered table-striped text-center">
        <thead>
          <tr>
            <th>Id </th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.slice(0, count).map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td className="w-25">
                    <img style={{ width: "10%" }} src={item.image} alt="" />
                  </td>
                  <td className="w-25">{item.title}</td>
                  <td>{item.price}$</td>
                  <td>
                    <button className="btn btn-success me-1">Edit</button>
                    <button onClick={() => deleteHandler(item.id)} className="btn btn-danger ms-1">Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <button onClick={clickHandler} className="btn btn-primary">
        Load More
      </button>
    </div>
  );
};

export default Products;
