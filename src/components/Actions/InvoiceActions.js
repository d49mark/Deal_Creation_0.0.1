//All the Invoie actions are invoked from  here
export const invoiceChanged = value => {
  return { type: "INVOICE_CHANGED", value: value };
};
export const showCard = value => {
  return { type: "SHOW_CARD", value: value };
};
