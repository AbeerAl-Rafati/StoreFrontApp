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
  const { type,payload } = action;

  switch (type) {
    case "CHANGE_ACTIVE":
      let modified = {};

      state.categories.forEach((item) => {
        if (item.bookType === payload) {
          modified = item;
        }
      });
      return {
        categories: state.categories,
        activeCategory: modified,
      };
    default:
      return state;
  }
}

export default categoriesReducer;
