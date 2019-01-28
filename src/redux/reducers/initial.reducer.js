import INITIAL_STATE from '../constants/initial.constants';

const initialState = {
  counter: 0,
};

const initialReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_STATE:
      return {
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};

export default initialReducer;
