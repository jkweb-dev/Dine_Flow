"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load cart from localStorage when the app starts
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("dineflow-cart");

      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Failed to load cart:", error);
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Save cart to localStorage whenever cartItems changes
  useEffect(() => {
    if (loading) return;

    try {
      localStorage.setItem("dineflow-cart", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart:", error);
    }
  }, [cartItems, loading]);

  // Add a new item or increase quantity of an existing item
  const addToCart = (item) => {
    setCartItems((currentItems) => {
        
      const existingItemIndex = currentItems.findIndex((cartItem) => {

        if (item.type === "product") {
          return (
            cartItem.type === "product" &&
            cartItem.productId === item.productId &&
            cartItem.size === item.size
          );
        }

        if (item.type === "deal") {
          return (
            cartItem.type === "deal" &&
            cartItem.dealId === item.dealId
          );
        }

        return false;
      });

      if (existingItemIndex === -1) {
        return [...currentItems, item];
      }

      return currentItems.map((cartItem, index) =>
        index === existingItemIndex
          ? {
              ...cartItem,
              quantity: cartItem.quantity + item.quantity,
            }
          : cartItem
      );
    });
  };

  // Remove an item completely
  const removeFromCart = (item) => {
    setCartItems((currentItems) =>
      currentItems.filter((cartItem) => {
        if (item.type === "product") {
          return !(
            cartItem.type === "product" &&
            cartItem.productId === item.productId &&
            cartItem.size === item.size
          );
        }

        if (item.type === "deal") {
          return !(
            cartItem.type === "deal" &&
            cartItem.dealId === item.dealId
          );
        }

        return true;
      })
    );
  };

  // Increase quantity by 1
  const increaseQuantity = (item) => {
    setCartItems((currentItems) =>
      currentItems.map((cartItem) => {
        const isSameItem =
          item.type === "product"
            ? cartItem.type === "product" &&
              cartItem.productId === item.productId &&
              cartItem.size === item.size
            : cartItem.type === "deal" &&
              cartItem.dealId === item.dealId;

        return isSameItem
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
          : cartItem;
      })
    );
  };

  // Decrease quantity by 1
  const decreaseQuantity = (item) => {
    setCartItems((currentItems) =>
      currentItems
        .map((cartItem) => {
          const isSameItem =
            item.type === "product"
              ? cartItem.type === "product" &&
                cartItem.productId === item.productId &&
                cartItem.size === item.size
              : cartItem.type === "deal" &&
                cartItem.dealId === item.dealId;

          if (!isSameItem) {
            return cartItem;
          }

          return {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          };
        })
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  // Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Total number of items in the cart
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Total price of the cart
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartItemCount,
        cartTotal,
        loading,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
};