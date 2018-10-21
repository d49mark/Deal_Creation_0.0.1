//Reducers for any Invoice changes i.e Tab2 and also for dipalygin info on Tab1 from Tab 2
const INITIAL_STATE = {
  invoiceValue: {},
  showCard: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INVOICE_CHANGED": {
      return {
        ...state,
        invoiceValue: action.value
      };
    }
    case "SHOW_CARD":
      return { ...state, showCard: action.value };
    default:
      return state;
  }
};
