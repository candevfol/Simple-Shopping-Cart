import React, { useContext, useState } from "react";
import { CartProductContext } from "../context/Cart.Context";

const Product = ({ product }) => {
  const { id, name, price, imageUrl } = product;
  const { cartProducts, addProduct, removeProduct } = useContext(CartProductContext);
    const existingProduct = cartProducts.find((p) => p.id === product.id);
    const initialQuantity = existingProduct !==undefined? existingProduct.quantity : 0
  const [quantity,setQuantity] = useState(initialQuantity);

  const increaseQuantityHandler = () => {
    setQuantity((prev) => prev + 1);
    addProduct(product);
  }
   const decreaseQuantityHandler = () => {
    setQuantity((prev) => prev - 1);
    removeProduct(product);
  }
  return (
    <div className="product">
      <img src={imageUrl} alt="product-image" className="product-image" />
      <div className="product-name">{product.name}</div>
      <div className="product-price">Rs.{product.price}</div>
      <div className="quantity-container">
        <button className="quantity-btn" onClick={()=> decreaseQuantityHandler()}>-</button>
            <div className="quantity">{quantity}</div>
        <button className="quantity-btn" onClick={()=> increaseQuantityHandler()}>+</button>
      </div>
    </div>
  );
};

export default Product;

