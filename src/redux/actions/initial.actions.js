import INITIAL_STATE from '../constants/initial.constants';

const fetchInitialState = () => ((dispatch) => {
  dispatch({ type: INITIAL_STATE });
});

export default fetchInitialState;
