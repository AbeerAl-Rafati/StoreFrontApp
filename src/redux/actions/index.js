export function decreaseStock(product) {
  return {
    type: "DECREASE_STOCK",
    payload: product,
  };
}

export function categorizedBooks(name) {
  return {
    type: "CHANGE_ACTIVE",
    payload: name,
  };
}

export function addToCart(product) {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
}
