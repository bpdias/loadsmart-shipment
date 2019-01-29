import INITIAL_STATE from '../constants/initial.constants';

const initialSate = payload => ((dispatch) => {
  console.log(payload);
  dispatch({
    type: INITIAL_STATE,
    payload: {},
  });
});

export default initialSate;
