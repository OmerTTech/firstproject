import React, { useContext, useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import img from '../img/Logogo.Co.png'
import { LuShoppingCart,LuUser2 } from "react-icons/lu";
import { CartContext } from "../../context/CartContext";
import { getUserData, logoutUser } from "../../auth/auth";
import { AiOutlineLogout } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import Dropdown from 'react-bootstrap/Dropdown';
import { GrLanguage } from "react-icons/gr";
import { FormattedMessage } from "react-intl";


const Header = (props) => {
  const { items } = useContext(CartContext)
  const [active, setActive] = useState(false)
  const [name, setName] = useState()

  useEffect(() => {
    const getUsername = async() => {
      const response = await getUserData()
      setName(response)
    }
    getUsername()

    
  }, [])

  const handleLocaleChange = (locale) => {
    props.onChange(locale)
  }

  return (
    <div className="header">
      <div className="image">
        <Link to='/'>
        <img src={img} alt="" />
        </Link>
      </div>
      <nav>
        <Link to='/'><FormattedMessage id="main" defaultMessage='Ana səhifə'/></Link>
        <Link to='/products'><FormattedMessage id="products" defaultMessage='Məhsullar'/></Link>
        {/* <Link to='/about'>About</Link> */}
        {/* <Link to='/contact'>Contact</Link> */}
        <Link className="cart" to='/cart'><LuShoppingCart />{items.length > 0 ? <span>{items.length}</span> : null}</Link>
        {
          name ? <div className="dropdown">
            <span onClick={() => setActive(!active)} className="link-span">Hello, {name}</span>
            {
              active && <div className="content">
              <Link to='/manage'><LuLayoutDashboard /> Dashboard</Link>
              <span onClick={() => logoutUser()}><AiOutlineLogout /> Logout</span>
            </div>
            }
          </div> : <Link className="cart" to='/auth/register'><LuUser2 /></Link>
        }
        <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        <GrLanguage />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleLocaleChange('az')}>Az</Dropdown.Item>
        <Dropdown.Item onClick={() => handleLocaleChange('en')}>En</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </nav>
    </div>
  );
};

export default Header;
