import { BOOK_A_FLIGHT, DELETE_A_FLIGHT } from "./actions";

export const bookAFlight = (data) => {
  return {
    type: BOOK_A_FLIGHT,
    payload: data,
  };
};

export const deleteAFlight = (id) => {
  return {
    type: DELETE_A_FLIGHT,
    payload: id,
  };
};
