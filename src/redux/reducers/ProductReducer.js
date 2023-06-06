const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_DATA_SUCCESS": 
      return { ...state, loading: false, products: action.payload };
    case "FETCH_DATA_FALIURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
