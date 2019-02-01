import { combineReducers } from 'redux';
import initialReducer from './initial.reducer';
import {
  shipments,
  shipmentsIsLoading,
  clickedShipment,
} from './shipment.reducer';

export default combineReducers({
  initialReducer,
  shipments,
  shipmentsIsLoading,
  clickedShipment,
});
