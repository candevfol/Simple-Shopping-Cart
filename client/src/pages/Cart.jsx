import React, { useContext } from "react";
import { CartProductContext } from "../context/Cart.Context";
import axios from "axios";

const Cart = () => {
  const { cartProducts, addProduct, removeProduct } = useContext(CartProductContext);

  const increaseQuantityHandler = (product) => {
    console.log(`insied`);
    addProduct(product);
  };
  const decreaseQuantityHandler = (product) => {
    removeProduct(product);
  };
  const checkout = async() => {
    const req_json = [];
    cartProducts.forEach(product => {
      req_json.push({
        id: product.id,
        quantity: product.quantity
      })
    });
    
    await axios.post("http://localhost:3000/api/checkout", {cart:req_json});
  }

  return (
    <>
    <div className="cart-container">
      <ol>
        {cartProducts.map((product) => (
          <div className="cart-product">
            <li key={product.id} />
            <div>{product.name}</div>
            <div className="quantity-container">
              <button className="quantity-btn" onClick={() => decreaseQuantityHandler(product)}>-</button>
              <div className="quantity">{product.quantity}</div>
              <button className="quantity-btn" onClick={() => increaseQuantityHandler(product)}>+</button>
              <div>{product.price} * {product.quantity}</div>
            </div>

          </div>
        ))}
      </ol>
    </div>
    <div className="bottom-div">
      <div className="amt-div">Total Amout: {cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)}</div>
      <button className="checkout-btn" onClick={()=>checkout()}>Checkout</button>
    </div>
    
    </>
  );
};

export default Cart;
