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
  activeCategory: {},
};
function categoriesReducer(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ACTIVE_CAT":
      let activeCategory;
      state.Categories.map((book) => {
        if (book.bookType === payload) {
          activeCategory = book;
        }
      });

      return { ...state, activeCategory };

    default:
      return state;
  }
}

export default categoriesReducer;
