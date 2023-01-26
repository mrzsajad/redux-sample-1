export const changeNumber = (state = 0, action) => {
  // if(action.type==="plus5"){
  //     return state+5;
  // } else if(action.type==="plus10"){
  //     return state+10;
  // } else if(action.type==="minus5"){
  //     return state-5;
  // }else if(action.type==="minus10"){
  //     return state-10;
  // }
  switch (action.type) {
    case "plus5":
      return state + 5;
    case "plus10":
      return state + 10;
    case "minus5":
      return state - 5;
    case "minus10":
      return state - 10;
    default:
      return state;
  }
  //   return state;
};
