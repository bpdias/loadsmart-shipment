import INITIAL_STATE from '../constants/initial.constants';

const initialSate = () => ((dispatch) => {
  dispatch({
    type: INITIAL_STATE,
    payload: {},
  });
});

export default initialSate;
