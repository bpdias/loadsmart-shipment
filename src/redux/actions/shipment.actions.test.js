import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  fetchClickedShipment,
  fetchShipments
} from './shipment.actions';
import * as actionTypes from '../constants/shipment.constants';
import * as ajaxHelpers from '../../helpers/javascripts/ajaxHelpers';
import Shipment from './fixtures/shipment.json';
import Shipments from './fixtures/shipments.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('action creators', () => {
  describe('clickedShipment', () => {
    it('calls get function from ajaxHelpers and dispatches the right actions on success', () => {
      const getMock = jest.spyOn(ajaxHelpers, 'get');
      getMock.mockImplementation(() => {
          return Promise.resolve(Shipment);
      });

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

    describe('shipments', () => {
        it('calls get function from ajaxHelpers and dispatches the right actions on success', () => {
          const getMock = jest.spyOn(ajaxHelpers, 'get');
          getMock.mockImplementation((url) => {
            if (url.search('-1.json') >= 0) {
                return Promise.resolve(Shipment);
            }
            return Promise.resolve(Shipments)
          });

          const expectedActions = [
            { type: actionTypes.FECTH_SHIPMENTS_IS_LOADING, isLoading: true },
            { type: actionTypes.FECTH_SHIPMENTS_SUCCESS, shipments: Shipments },
            { type: actionTypes.FECTH_SHIPMENTS_IS_LOADING, isLoading: true },
            { type: actionTypes.FECTH_SHIPMENTS_IS_LOADING, isLoading: false },
            { type: actionTypes.FECTH_CLICKED_SHIPMENT_SUCCESS, clickedShipment: Shipment },
            { type: actionTypes.FECTH_SHIPMENTS_IS_LOADING, isLoading: false },
          ];
    
          const store = mockStore({
            isLoading: true,
            error: false,
            active: false,
          });
    
          return store.dispatch(fetchShipments()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
    
            getMock.mockRestore();
          });
        });
    });
  });  
});
