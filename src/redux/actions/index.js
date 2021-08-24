export const selectedCategory = (name) => {
  return {
    type: 'SELECT_ACTIVE',
    payload: name,
  };
};