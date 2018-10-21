const INITIAL_STATE = {
  selectedTab: 0,
  lockedTab: true
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SELECT_TAB":
      return { ...state, selectedTab: action.value };
    case "UNLOCK_TAB":
      return { ...state, lockedTab: action.value };
    default:
      return state;
  }
};
