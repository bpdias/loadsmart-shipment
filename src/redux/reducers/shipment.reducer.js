import {
  FECTH_SHIPMENTS_SUCCESS,
  FECTH_SHIPMENTS_IS_LOADING,
} from '../constants/shipment.constants';

const defaultShipment = {
  shipment: {},
  isLoading: false,
};

export const shipment = (state = defaultShipment, action) => {
  switch (action.type) {
    case FECTH_SHIPMENTS_SUCCESS:
      return {
        ...action.shipment,
      };
    default:
      return state;
  }
};

export const shipmentIsLoading = (state = false, action) => {
  switch (action.type) {
    case FECTH_SHIPMENTS_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
};
