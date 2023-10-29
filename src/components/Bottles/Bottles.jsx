import { useEffect, useState } from "react";
import SingleBottle from "../SingleBottle/SingleBottle";

import "./Bottles.css";
import Cart from "../Cart/Cart";
import { LocalStorage } from "../../Utilities/localStorage";
import { calculateCartTotal } from "../../Utilities/calculateTotal";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handlePurchaseButton = (bottle) => {
    setCartItems([...cartItems, bottle]);
    LocalStorage.addItem(bottle.id);
  };

  const handleRemoveButton = (bottleId) => {
    const index = cartItems.findIndex((item) => item.id === bottleId);
    if (index > -1) {
      //making copy
      const currentCartItems = cartItems.slice();
      //remove 1 element starting from that index
      currentCartItems.splice(index, 1);
      setCartItems(currentCartItems);
      LocalStorage.removeItem(bottleId);
    }
  };
  useEffect(() => {
    const loadBottles = async () => {
      const res = await fetch("bottles.json");
      const data = await res.json();
      setBottles(data);
    };
    loadBottles();
  }, []);

  useEffect(() => {
    const loadCartItems = () => {
      const storedCart = LocalStorage.getItems();
      let currentCartItems = [];
      if (bottles.length > 0) {
        for (let i = 0; i < storedCart.length; i++) {
          const storedCartBottleId = storedCart[i];
          currentCartItems.push(
            bottles.find((item) => item.id === storedCartBottleId)
          );
        }
      }
      setCartItems(currentCartItems);
    };
    loadCartItems();
  }, [bottles]);

  return (
    <div>
      <h2>Total items in Cart: {cartItems.length}</h2>
      <p>Total Price: {calculateCartTotal(cartItems)}$</p>
      <section className="cart-container">
        {cartItems.map((item, idx) => (
          <Cart
            key={idx}
            cartItem={item}
            handleRemoveButton={handleRemoveButton}
          ></Cart>
        ))}
      </section>
      <h2>Available Bottles: {bottles.length}</h2>
      <section className="bottles-container">
        {bottles.map((bottle) => (
          <SingleBottle
            key={bottle.id}
            bottle={bottle}
            handlePurchaseButton={handlePurchaseButton}
          ></SingleBottle>
        ))}
      </section>
    </div>
  );
};

export default Bottles;
