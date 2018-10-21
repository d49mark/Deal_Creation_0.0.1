export default (state = { warning: false }, action) => {
  switch (action.type) {
    case "SET_WARNING":
      return { ...state, warning: action.value };
    default:
      return state;
  }
};
