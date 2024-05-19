import React from "react";
import Layout from "../layout/Layout";
import Main from '../pages/main/Main';
import Product from '../pages/products/Product';
import Details from '../pages/Details/Details';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "../context/CartContext";
import Cart from "../pages/cart/Cart";
import Register from "../pages/user/Register";
import Login from "../pages/user/Login";
const PublicRoutes = () => {
  return (
    <CartProvider>
      <Layout>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </Layout>
    </CartProvider>
  );
};

export default PublicRoutes;
