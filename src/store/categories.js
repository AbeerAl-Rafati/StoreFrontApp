

const initState = {
  categories :[{name: 'Historical Books' , description: 'Books contains history timeline and events'}, {name:'Philosophy Books',description: 'Help in developing critical thinking skills, encouraging  to understand the constraints operate within when making certain choices or even when decided which goals should pursue.' }]
}
function categoriesReducer(state= initState,action){
   const{type, payload} = action;

   switch(type){

   }

  return state;
}

export default categoriesReducer;