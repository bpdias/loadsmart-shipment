import {
  FECTH_SHIPMENTS_SUCCESS,
  FECTH_SHIPMENTS_IS_LOADING,
  FECTH_CLICKED_SHIPMENT_SUCCESS,
} from '../constants/shipment.constants';

const defaultShipment = {
  shipments: {},
  isLoading: false,
};

const defaultClickedShipment = {
  clickedShipment: {},
  isLoading: false,
};

export const shipments = (state = defaultShipment, action) => {
  switch (action.type) {
    case FECTH_SHIPMENTS_SUCCESS:
      return {
        ...action.shipments,
      };
    default:
      return state;
  }
};

export const shipmentsIsLoading = (state = false, action) => {
  switch (action.type) {
    case FECTH_SHIPMENTS_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
};

export const clickedShipment = (state = defaultClickedShipment, action) => {
  switch (action.type) {
    case FECTH_CLICKED_SHIPMENT_SUCCESS:
      console.log(action.clickedShipment);
      return {
        ...action.clickedShipment,
      };
    default:
      return state;
  }
};
