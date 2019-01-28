const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
  count: 0,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.count + 1,
    };
  }

  if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.count + action.payload,
    };
  }

  return state;
};

// Store
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log('[subscription]', store.getState());
});

// Dispatching Action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', payload: 10 });

console.log(store.getState());
// Subscription
