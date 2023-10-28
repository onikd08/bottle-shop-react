import PropTypes from "prop-types";

import "./Cart.css";
const Cart = ({ cartItem, handleRemoveButton }) => {
  return (
    <div className="cart-item">
      <img src={cartItem?.img} alt="" />
      <button onClick={() => handleRemoveButton(cartItem?.id)}>Remove</button>
    </div>
  );
};

Cart.propTypes = {
  cartItem: PropTypes.object.isRequired,
  handleRemoveButton: PropTypes.func.isRequired,
};

export default Cart;
