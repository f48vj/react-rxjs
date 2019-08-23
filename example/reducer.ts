export const rootReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'plus-one':
      return { ...state, count: state.count + 1 };
    case 'minus-one':
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};
