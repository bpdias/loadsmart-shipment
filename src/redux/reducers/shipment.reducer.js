import {
  FECTH_SHIPMENTS_SUCCESS,
  FECTH_SHIPMENTS_IS_LOADING,
  FECTH_CLICKED_SHIPMENT_SUCCESS,
  FECTH_SHIPMENTS_ERROR,
} from '../constants/shipment.constants';

const defaultShipment = {
  shipments: null,
  isLoading: true,
  error: false,
};

const defaultClickedShipment = {
  clickedShipment: null,
  isLoading: false,
  error: false,
};

export const shipmentsIsLoading = (state = true, action) => {
  switch (action.type) {
    case FECTH_SHIPMENTS_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
};

export const shipments = (state = defaultShipment, action) => {
  switch (action.type) {
    case FECTH_SHIPMENTS_SUCCESS:
      return {
        ...state,
        shipments: action.shipments,
        error: false,
      };
    case FECTH_SHIPMENTS_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export const clickedShipment = (state = defaultClickedShipment, action) => {
  switch (action.type) {
    case FECTH_CLICKED_SHIPMENT_SUCCESS:
      return {
        ...state,
        shipment: action.clickedShipment,
        error: false,
      };
    case FECTH_SHIPMENTS_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
