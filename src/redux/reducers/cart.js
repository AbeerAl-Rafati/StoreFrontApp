const initialState = [];

export default function cartReducer(state = initialState, action) {
  const { type, payload } = action;

  {
    console.log("from cart !!!!!!!!!!", state);
  }
  switch (type) {
    case "ADD_TO_CART":
      if (payload.available !== 0) {
        return [...state, payload];
      } else {
        return state;
      }

    // case "REMOVE_FROM_CART":
    //   payload.available++;

    //   let newCart = state.filter((item) => item !== payload);

    //   return { cart: newCart };

    default:
      return state;
  }
}
