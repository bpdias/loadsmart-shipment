import { combineReducers } from 'redux';
import {
  shipments,
  shipmentsIsLoading,
  clickedShipment,
} from './shipment.reducer';

export default combineReducers({
  shipments,
  shipmentsIsLoading,
  clickedShipment,
});
