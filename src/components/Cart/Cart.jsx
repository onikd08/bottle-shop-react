import PropTypes from "prop-types";
const Cart = ({ cartItem }) => {
  return (
    <div>
      <img src={cartItem.img} alt="" />
    </div>
  );
};

Cart.propTypes = {
  cartItem: PropTypes.object.isRequired,
};

export default Cart;
