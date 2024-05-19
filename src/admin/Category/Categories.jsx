import axios from "axios";
import React, { useEffect, useState } from "react";
import apiURLs from "../../api/api";

const Categories = () => {
  const [items, setItems] = useState();
  useEffect(() => {
    const getCategories = () => {
      axios
        .get(`${apiURLs.categoryAPI}`)
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getCategories();
  }, []);
  return <div>
    <div className="container p-4">
    <h1>All Categories</h1>
    <table className="table table-bordered table-striped text-center">
        <thead>
            <tr>
                <th>Id </th>
                <th>Name</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                items && items.map((item, index)=>{
                    return(
                       <tr>
                        <td>{index}</td>
                        <td>{item}</td>
                        <td>
                            <button className="btn btn-success me-1">Edit</button>
                            <button className="btn btn-danger ms-1">Delete</button>
                        </td>
                       </tr>
                    )
                })
            }
        </tbody>
    </table>
    </div>
  </div>;
};

export default Categories;
