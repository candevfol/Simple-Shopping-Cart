import { createContext, useState } from "react";

// Create Context
const CartProductContext = createContext({
  cartProducts: [],
  addProduct: () => {},
  removeProduct: () => {},
});

const CartProductProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addProduct = (product) => {
    setCartProducts((prev) => {
      const existingProduct = prev.find((p) => p.id === product.id);
      if (existingProduct) {
        return prev.map((p) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      } else {
        return [...prev, { ...product, quantity: 1 }]; // ensure quantity is 1
      }
    });
  };

  const removeProduct = (product) => {
    setCartProducts((prev) =>
      prev
        .map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0)
    );
  };

  return (
    <CartProductContext.Provider value={{ cartProducts, addProduct, removeProduct }}>
      {children}
    </CartProductContext.Provider>
  );
};

export { CartProductContext };
export default CartProductProvider;
