//Reducers for any Deal changes i.e Tab1
const INITIAL_STATE = {
  dealValue: {}
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DEAL_CHANGED": {
      return { ...state, dealValue: action.value };
    }

    default:
      return state;
  }
};
