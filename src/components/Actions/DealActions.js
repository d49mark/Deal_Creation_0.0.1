//All the deal actions are invoked from here
export const dealChanged = value => {
  return { type: "DEAL_CHANGED", value: value };
};
