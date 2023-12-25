// CartContext.jsx
import React, { createContext, useContext, useReducer } from "react";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProduct = state.find((product) => product._id === action.payload._id);

      if (existingProduct) {
        return state.map((product) =>
          product._id === action.payload._id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case "REMOVE_FROM_CART":
      return state.filter((product) => product._id !== action.payload);

    case "SUBTRACT_QUANTITY":
      return state.map((product) =>
        product._id === action.payload && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );

    // Add more cases for other actions as needed
    default:
      return state;
  }
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  const subtractQuantity = (productId) => {
    dispatch({ type: "SUBTRACT_QUANTITY", payload: productId });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, subtractQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart, CartContext };
