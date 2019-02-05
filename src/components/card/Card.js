import React, { Component } from 'react';
import './Card.scss';
import CurrencyFormat from 'react-currency-format';
import { connect } from 'react-redux';
import { fetchClickedShipment } from '../../redux/actions/shipment.actions';
import { handleDateWithoutHours } from '../../helpers/javascripts/dateHelpers';
import {
  EquipmentType,
  EquipmentIcon,
} from '../../helpers/javascripts/equipmentTypeHelper';

class Card extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { id } = this.props.shipment;
    this.props._onCardClicked(id);
  }

  render() {
    const { ...shipment } = this.props.shipment;
    const { handleClick } = this;
    return (
      <div className="Card" onClick={ handleClick }>
        <div className="Carrier">
          <div className="Vehicle">
            { EquipmentIcon(shipment.equipmentType) }
            <p>
              {`${EquipmentType(shipment.equipmentType)} ${shipment.equipmentSize}"`}
            </p>
          </div>
          <div className="Price">
            <p>
              <CurrencyFormat
                value={shipment.fare}
                decimalScale={2}
                displayType="text"
                thousandSeparator
                prefix="$"
              />
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
              {handleDateWithoutHours(shipment.stops[0].windowStart)}
            </div>
          </div>
          <div className="Arrival">
            <div className="City">
              {`${shipment.stops[1].city}, ${shipment.stops[1].state} ${shipment.stops[1].zipcode} `}
            </div>
            <div className="Date">
              {handleDateWithoutHours(shipment.stops[1].windowEnd)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    _onCardClicked: id => dispatch(fetchClickedShipment(id)),
  };
};

export default connect(null, mapDispatchToProps)(Card);
