const initialState = [];

export default function cartReducer(state = initialState, action) {
  const { type, payload } = action;
  // {
  //   console.log("from cart !!!!!!!!!! reducer", state);
  // }

  switch (type) {
    case "ADD_TO_CART":
      if (payload.available !== 0) {
        return [...state, payload];
      } else {
        return state;
      }

    case "REMOVE_FROM_CART":
      if (payload.available > 0) {
        let newItems = state.filter((item) => {
          return item.name !== payload.name;
        });

        return {
          items: newItems,
        };
      } else {
        return state;
      }

    default:
      return state;
  }
}
