import * as Endpoints from '../../config/Endpoints';
import { get } from '../../helpers/javascripts/ajaxHelpers';
import {
  FECTH_SHIPMENTS_SUCCESS,
  FECTH_SHIPMENTS_IS_LOADING,
  FECTH_SHIPMENTS_ERROR,
  FECTH_CLICKED_SHIPMENT_SUCCESS,
  FECTH_CLICKED_SHIPMENT_ERROR,
} from '../constants/shipment.constants';

const fetchShipmentSuccess = shipments => ({
  type: FECTH_SHIPMENTS_SUCCESS,
  shipments,
});

const fetchShipmentIsLoading = isLoading => ({
  type: FECTH_SHIPMENTS_IS_LOADING,
  isLoading,
});

const fetchShipmentError = () => ({
  type: FECTH_SHIPMENTS_ERROR,
});

const fetchclickedShipmentSuccess = clickedShipment => ({
  type: FECTH_CLICKED_SHIPMENT_SUCCESS,
  clickedShipment,
});

const fetchClickedShipmentError = () => ({
  type: FECTH_CLICKED_SHIPMENT_ERROR,
});

export const fetchClickedShipment = id => ((dispatch) => {
  dispatch(fetchShipmentIsLoading(true));

  return get(`${Endpoints.SHIPMENT}${id}.json`)
    .then((response) => {
      dispatch(fetchclickedShipmentSuccess(response));
      dispatch(fetchShipmentIsLoading(false));
    })
    .catch(() => {
      dispatch(fetchClickedShipmentError());
      dispatch(fetchShipmentIsLoading(false));
    });
});

export const fetchShipments = () => ((dispatch) => {
  dispatch(fetchShipmentIsLoading(true));

  return get(Endpoints.SHIPMENTS)
    .then((response) => {
      dispatch(fetchShipmentSuccess(response));
      dispatch(fetchClickedShipment(response[0].id));
      dispatch(fetchShipmentIsLoading(false));
    })
    .catch(() => {
      dispatch(fetchShipmentError());
      dispatch(fetchShipmentIsLoading(false));
    });
});
