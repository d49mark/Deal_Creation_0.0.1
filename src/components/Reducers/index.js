import { combineReducers } from "redux";
import DealReducer from "./DealReducer";
import InvoiceReducer from "./InvoiceReducer";
import TabSelection from "./TabSelection";
import SetWarningReducer from "./SetWarningReducer";

//Combine all reducers here
export default combineReducers({
  deal: DealReducer, //Reducer for deal creation sending as deal
  invoice: InvoiceReducer, //Reducer for invoicecreation sending as invoice
  tabSelect: TabSelection, //Reducer for selecting tab based on validaton
  warningSet: SetWarningReducer //Reducer for setting listing date warning
});
