export const calculateCartTotal = (cart) => {
  let cartTotal = 0;
  if (cart.length > 0) {
    for (const item of cart) {
      cartTotal += item.price;
    }
  }
  return cartTotal;
};
