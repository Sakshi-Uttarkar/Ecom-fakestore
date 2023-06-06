import {
  FETCH_DATA_REQUESTED,
  FETCH_DATA_FULFILLED,
  FETCH_DATA_REJECTED,
} from "./actionType";

export const setCheckoutData = (data) => async (dispatch) => {
  dispatch (fetchDataRequested)
  dispatch({
    type: "SET_CHECKOUT_DATA",
    payload: data,
  });
};
export const fetchDataRequested = () => ({
  type: FETCH_DATA_REQUESTED,
});

export const fetchDataFulfilled = (data) => ({
  type: FETCH_DATA_FULFILLED,

  payload: data,
});

export const fetchDataRejected = (error) => ({
  type: FETCH_DATA_REJECTED,

  payload: error,
});
