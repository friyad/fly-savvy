import { combineReducers } from "redux";
import bookingReducer from "./Booking/bookingReducer";

const rootReducer = combineReducers({
  booking: bookingReducer,
});

export default rootReducer;
