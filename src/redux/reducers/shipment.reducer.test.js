import * as shipmentReducer from './shipment.reducer';
import * as actionTypes from '../constants/shipment.constants';
import Shipments from './fixture/shipments.json';
import Shipment from './fixture/shipment.json';

describe('reducers', () => {
  describe('shipments', () => {
    it('shipment should return the initial state', () => {
      expect(shipmentReducer.shipments(undefined, {})).toEqual({
        isLoading: true,
        error: false,
        active: false,
      });
    });

    it('shipments should handle FETCH_BAG_SUCCESS', () => {
      expect(shipmentReducer.shipments(Shipments, {
        type: actionTypes.FECTH_SHIPMENTS_SUCCESS,
        Shipments,
      })).toEqual(Shipments);
    });
  });

  describe('clickedShipments', () => {
    it('clickedShipments should return the initial state', () => {
      expect(shipmentReducer.clickedShipment(undefined, {})).toEqual({
        clickedShipment: null,
        isLoading: false,
        error: false,
        active: true,
      });
    });

    it('shipments should handle FETCH_BAG_SUCCESS', () => {
      expect(shipmentReducer.clickedShipment(Shipment, {
        type: actionTypes.FECTH_SHIPMENTS_SUCCESS,
        Shipment,
      })).toEqual(Shipment);
    });
  });
});
