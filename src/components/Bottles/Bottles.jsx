import { useEffect, useState } from "react";
import SingleBottle from "../SingleBottle/SingleBottle";

import "./Bottles.css";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handlePurchaseButton = (bottle) => {
    setCartItems([...cartItems, bottle]);
  };
  useEffect(() => {
    const loadBottles = async () => {
      const res = await fetch("bottles.json");
      const data = await res.json();
      setBottles(data);
    };
    loadBottles();
  }, []);
  return (
    <div>
      <h2>Total items in Cart: {cartItems.length}</h2>
      <section className="cart-container">
        {cartItems.map((item, idx) => (
          <Cart key={idx} cartItem={item}></Cart>
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
