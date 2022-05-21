const initialState = {
  items: [],
};

export const tickersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TICKERS':
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};
