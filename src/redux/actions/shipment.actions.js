import * as Endpoints from '../../config/Endpoints';
import get from '../../helpers/ajaxHelpers';
import {
  FECTH_SHIPMENTS_SUCCESS,
  FECTH_SHIPMENTS_IS_LOADING,
  FECTH_SHIPMENTS_ERROR,
} from '../constants/shipment.constants';

const fetchShipmentSuccess = shipment => ({
  type: FECTH_SHIPMENTS_SUCCESS,
  shipment,
});

const fetchShipmentIsLoading = isLoading => ({
  type: FECTH_SHIPMENTS_IS_LOADING,
  isLoading,
});

const fetchShipmentError = () => ({
  type: FECTH_SHIPMENTS_ERROR,
});

const fetchShipment = () => ((dispatch) => {
  dispatch(fetchShipmentIsLoading(true));

  return get(Endpoints.SHIPMENTS)
    .then((response) => {
      dispatch(fetchShipmentSuccess(response));
      dispatch(fetchShipmentIsLoading(false));
    })
    .catch(() => {
      dispatch(fetchShipmentError());
      dispatch(fetchShipmentIsLoading(false));
    });
});

export default fetchShipment;
