export const selectedCategory = (name) => {
  return {
    type: 'ACTIVE_CAT',
    payload: name,
  };
};


export const selectedCategoryItems = (name) => {
 ;
  return {
    type: 'SELECTED_CAT',
    payload: name,
  };
};