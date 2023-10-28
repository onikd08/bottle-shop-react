const getItems = () => {
  let cartItems = localStorage.getItem("cart");
  if (cartItems) {
    return JSON.parse(cartItems);
  }
  return [];
};

const addItem = (productId) => {
  const cartItems = getItems();
  cartItems.push(productId);
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

const removeItem = (productId) => {
  const cartItems = getItems();
  const productIndex = cartItems.indexOf(productId);
  if (productIndex > -1) {
    cartItems.splice(productIndex, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

export const LocalStorage = { getItems, addItem, removeItem };
