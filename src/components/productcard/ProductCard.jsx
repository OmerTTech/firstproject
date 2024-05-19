import React, { useContext } from "react";
import "./productcard.css";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { FormattedMessage } from "react-intl";


const ProductCard = (props) => {
  const { id, image, title, price, description } = props.link;
  const {addToCart} = useContext(CartContext)

  const addHandler = () => {
    addToCart({
      id: id,
      title: title,
      price: price,
      image: image,
      count: 1
    })
  }

  return (
    <div className="col-lg-3">
      <div className="card" id={id}>
        <Link to={`/products/${id}`}>
        <img src={image} className="card-img-top" alt="..." /></Link>
        <CiHeart />
        <div className="card-body">
          <h5 className="card-title">
            {title.length > 20 ? title.slice(0, 20) + "..." : title}
          </h5>
          <p className="card-text">
            {description.length > 30
              ? description.slice(0, 30) + "..."
              : description}
          </p>
          <div className="d-flex align-center justify-content-between">
            <p className="fs-5 fw-bold">{price}$</p>
            <button onClick={addHandler} className="btn btn-primary"><FormattedMessage id="card" defaultMessage='Səbətə at'/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
