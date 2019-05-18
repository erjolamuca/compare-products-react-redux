const INITIAL_STATE = [];

const AddReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      if (state.includes(action.payload)) return state;
      return [...state, action.payload];
    case "REMOVE_PRODUCT":
      const item = action.payload;
      return state.filter(product => product !== item);
    default:
      return state;
  }
};

export default AddReducer;
