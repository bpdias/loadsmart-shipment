import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  fetchClickedShipment,
} from './shipment.actions';
import * as actionTypes from '../constants/shipment.constants';
import * as ajaxHelpers from '../../helpers/javascripts/ajaxHelpers';
import Shipment from './fixtures/shipment.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('action creators', () => {
  describe('clickedShipment', () => {
    it('calls get function from ajaxHelpers and dispatches the right actions on success', () => {
      const getMock = jest.spyOn(ajaxHelpers, 'get');
      getMock.mockImplementation(() => Promise.resolve(Shipment));

      const expectedActions = [
        { type: actionTypes.FECTH_SHIPMENTS_IS_LOADING, isLoading: true },
        { type: actionTypes.FECTH_CLICKED_SHIPMENT_SUCCESS, clickedShipment: Shipment },
        { type: actionTypes.FECTH_SHIPMENTS_IS_LOADING, isLoading: false },
      ];

      const store = mockStore({
        clickedShipment: null,
        isLoading: false,
        error: false,
        active: true,
      });

      return store.dispatch(fetchClickedShipment(1)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);

        getMock.mockRestore();
      });
    });
  });  
});
