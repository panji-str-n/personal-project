const initialState = {
  userData: []
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        userData: [...state.userData, action.payload]
      };
    default:
      return state;
  }
};

export default formReducer;