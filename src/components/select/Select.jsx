import axios from "axios";
import "./select.css";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
const Select = ({ category, setItems }) => {
  const [categoryHandler,setCategoryHandler] = useState()
  const changeHandler = (e) => {
    const getProducts = async () => {
      setCategoryHandler(e.target.value)
      const { data } = await axios.get(
        categoryHandler ? "https://fakestoreapi.com/products" : `https://fakestoreapi.com/products/category/${e.target.value}`
      );
      setItems(data);
    };
    getProducts();
  };

  return (
    <div>
      <select onChange={changeHandler} name="categories" id="categories">
        <option value=""><FormattedMessage id="all" defaultMessage='Bütün məhsullar'/></option>
        {category?.map((element, index) => {
          return (
            <option key={index} value={element}>
              {element}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
