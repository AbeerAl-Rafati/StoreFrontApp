const initialState = [];

export default function cartReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      if (payload.available !== 0) {
        
        return [...state, payload];
      } else {
        return state;
      }
    default:
      return state;
  }
}
