import React, { useContext } from "react";
import "./footer.css";
import img from '../img/Logogo.Co.png'
import { CountContext } from "../../context/CountContext";
const Footer = () => {
  const date  = new Date().getFullYear()
  return <div className="footer">
    <img src={img} alt="" />
    <p>© {date} Logogo.Co, Inc.</p>
  </div>;
};

export default Footer;
