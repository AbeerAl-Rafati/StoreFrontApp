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

};
function categoriesReducer(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ACTIVE_CAT":
      let categories;
      state.Categories.map((category) => {
        if (category.bookType === payload) {
          categories = category;
        }
      });

      return { ...state, categories };

    default:
      return state;
  }
}

export default categoriesReducer;
