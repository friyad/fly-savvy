import { BOOK_A_FLIGHT, DELETE_A_FLIGHT } from "./actions";

const initialState = [];

const bookingReducer = (state = initialState, action) => {
  const updatedState = [...state];

  switch (action.type) {
    case BOOK_A_FLIGHT:
      console.log();
      const newFlight = action.payload;
      updatedState.push(newFlight);
      return updatedState;

    case DELETE_A_FLIGHT:
      const withOutDeletedFlight = updatedState.filter(
        (flight) => flight.id !== action.payload
      );
      return withOutDeletedFlight;

    default:
      return state;
  }
};

export default bookingReducer;
