import { combineReducers } from 'redux';
import initialReducer from './initial.reducer';
import {
  shipment,
  shipmentIsLoading,
} from './shipment.reducer';

export default combineReducers({
  initialReducer,
  shipment,
  shipmentIsLoading,
});
