import React from 'react';
import { shallow } from 'enzyme';
import { Details } from './Details';
import Shipment from './fixture/shipment.json';

describe('components', () => {
  describe('Details', () => {
    it('display corrrect texts', () => {
      const wrapper = shallow(<Details
        shipment={Shipment}
        defaultShipment={Shipment}
        currentShipments={Shipment}
      />);

      expect(wrapper.find('img').prop('src')).toBe('maps.png');
      expect(wrapper.find('div.Info p').text()).toBe('New York, NY   Miami, FL ');
      expect(wrapper.find('div.PickUp h2').text()).toBe('1New York, NY 10013 ');
      expect(wrapper.find('div.Delivery h2').text()).toBe('2Miami, FL 33128 ');
    });
  });
});
