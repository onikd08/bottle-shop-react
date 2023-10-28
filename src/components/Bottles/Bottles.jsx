import { useEffect, useState } from "react";
import SingleBottle from "../SingleBottle/SingleBottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

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
      <h2>Total Bottles: {bottles.length}</h2>
      {bottles.map((bottle) => (
        <SingleBottle key={bottle.id} bottle={bottle}></SingleBottle>
      ))}
    </div>
  );
};

export default Bottles;
