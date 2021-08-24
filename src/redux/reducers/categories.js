const initState = {
  categories: [
    {
      bookType: "Historical Books",
      description: "Books contains history timeline and events",
    },
    {
      bookType: "Philosophy Books",
      description:
        "Help in developing critical thinking skills, encouraging  to understand the constraints operate within when making certain choices or even when decided which goals should pursue.",
    },
  ],
  activeCat: [],
};
function categoriesReducer(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ACTIVE_CAT":
      let activeCat;
      state.categories.map((category) => {
        if (category.bookType === payload) {
          activeCat = category;
        }
      });

      return { ...state, activeCat };

    default:
      return state;
  }
}

export default categoriesReducer;
