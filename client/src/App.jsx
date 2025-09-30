import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartProductProvider from "./context/Cart.Context";

const App = () => {
  return (
    <div className="main-container">
      <CartProductProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProductProvider>
    </div>
  );
};

export default App;
