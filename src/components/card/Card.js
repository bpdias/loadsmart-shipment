import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClickedShipment } from '../../redux/actions/shipment.actions';
import IconTruckDryvan from '../svgImages/icons/truck-dryvan';

import './Card.scss';

class Card extends Component {
  render() {
    const { ...shipment } = this.props.shipment;
    return (
      <div className="Card" onClick={ this.props.onCardClicked } >
        <div className="Carrier">
          <div className="Vehicle">
            <IconTruckDryvan />
            <p>
              {`${shipment.equipmentType} ${shipment.equipmentSize}`}
            </p>
          </div>
          <div className="Price">
            <p>
              ${shipment.fare}
            </p>
          </div>
        </div>
        <div className="Information">
          <div className="Departure">
            <div className="City">
              {`${shipment.stops[0].city}, ${shipment.stops[0].state} ${shipment.stops[0].zipcode} `}
              <span className="pointer"> > </span>
            </div>
            <div className="Date">
              Wednesday, 01 August, 2015
            </div>
          </div>
          <div className="Arrival">
            <div className="City">
              {`${shipment.stops[1].city}, ${shipment.stops[1].state} ${shipment.stops[1].zipcode} `}
            </div>
            <div className="Date">
              Thurday, 14 July, 2015
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCardClicked: () => dispatch(fetchClickedShipment()),
  };
};

export default connect(null, mapDispatchToProps)(Card);
