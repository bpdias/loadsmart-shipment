import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';
import ShipmentFixture from './fixture/shipment.json';

describe('components', () => {
  describe('Card', () => {
    it('display active card', () => {
      const wrapper = shallow(<Card
        shipment={ShipmentFixture}
        active
        setActiveCard={() => {}}
      />);
      expect(wrapper.find('div.Card').hasClass('Card')).toBe(true);
      expect(wrapper.find('div.Card').hasClass('active')).toBe(true);
    });

    it('display unactive card', () => {
      const wrapper = shallow(<Card
        shipment={ShipmentFixture}
        active={false}
        setActiveCard={() => {}}
      />);
      expect(wrapper.find('div.Card').hasClass('Card')).toBe(true);
      expect(wrapper.find('div.Card').hasClass('active')).toBe(false);
    });

    it('testing handleClick function receiving id 1', () => {
      const wrapper = shallow(<Card
        shipment={ShipmentFixture}
        active
        setActiveCard={(id) => {
          expect(id).toBe(1);
        }}
        _onCardClicked={(id) => {
          expect(id).toBe(1);
        }}
      />);
      wrapper.simulate('click');
    });

    it('display corrrect texts', () => {
      const wrapper = shallow(<Card
        shipment={ShipmentFixture}
        active
        setActiveCard={() => {}}
      />);

      expect(wrapper.find('div.Departure > div.City').text()).toBe('New York, NY 10013  > ');
      expect(wrapper.find('div.Departure > div.Date').text()).toBe('Saturday, March 26th, 2016');
      expect(wrapper.find('div.Arrival > div.City').text()).toBe('Miami, FL 33128 ');
      expect(wrapper.find('div.Arrival > div.Date').text()).toBe('Tuesday, March 29th, 2016');
    });
  });
});
