import PropTypes from "prop-types";

import "./Cart.css";
const Cart = ({ cartItem }) => {
  return (
    <div className="cart-item">
      <img src={cartItem.img} alt="" />
      <button>Remove</button>
    </div>
  );
};

Cart.propTypes = {
  cartItem: PropTypes.object.isRequired,
};

export default Cart;
