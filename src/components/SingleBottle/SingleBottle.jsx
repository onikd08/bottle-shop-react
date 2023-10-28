import PropTypes from "prop-types";

import "./SingleBottle.css";

const SingleBottle = ({ bottle, handlePurchaseButton }) => {
  const { name, price, img } = bottle;
  return (
    <div className="bottle-card">
      <h3>Bottle: {name}</h3>
      <img src={img} alt="" />
      <p>Price: {price}$</p>
      <button onClick={() => handlePurchaseButton(bottle)}>Purchase</button>
    </div>
  );
};

SingleBottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handlePurchaseButton: PropTypes.func.isRequired,
};
export default SingleBottle;
