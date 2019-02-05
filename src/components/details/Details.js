import React, { Component } from 'react';
import './Details.scss';
import CurrencyFormat from 'react-currency-format';
import { connect } from 'react-redux';
import { handleDate } from '../../helpers/javascripts/dateHelpers';
import returnIcon from '../../helpers/javascripts/inconsHelpers';
import Spinner from '../spinner';
import Aux from '../../hocs/Aux';
import {
  EquipmentType,
  EquipmentIcon,
} from '../../helpers/javascripts/equipmentTypeHelper';

class Details extends Component {
  render() {
    if (this.props.isLoading) {
      return (
        <Aux>
          <Spinner />
        </Aux>
      );
    }

    const { ...shipment } = (this.props.currentShipments)
      ? this.props.currentShipments
      : this.props.defaultShipment[0];
    console.log(shipment);
    return (
      <div className="Details">
        <div className="Map">
          <img src={require('../../assets/images/maps.png')} alt="maps" />
        </div>
        <div className="details-wrapper">
          <div className="Info">
            <p>
              {`${shipment.stops[0].city}, ${shipment.stops[0].state} `}
              &emsp;&emsp;
              {`${shipment.stops[1].city}, ${shipment.stops[1].state} `}
            </p>
          </div>
          <div className="delivery-info">
            <div className="PickUp">
              <h1>PICK-UP</h1>
              <h2>
                <span className="bullet" />
                <span className="bullet-number">1</span>
                {`${shipment.stops[0].city}, ${shipment.stops[0].state} ${shipment.stops[0].zipcode} `}
              </h2>
              <h3>
                {handleDate(shipment.stops[0].windowStart)}
              </h3>
              <div className="delivery-icons">
                {returnIcon(shipment.stops[0].accessorials)}
              </div>
            </div>
            <div className="Delivery">
              <h1>DELIVERY</h1>
              <h2>
                <span className="bullet" />
                <span className="bullet-number">2</span>
                {`${shipment.stops[1].city}, ${shipment.stops[1].state} ${shipment.stops[1].zipcode} `}
              </h2>
              <h3>{handleDate(shipment.stops[1].windowEnd)}</h3>
              <div className="delivery-icons">
                {returnIcon(shipment.stops[1].accessorials)}
              </div>
            </div>
          </div>
          <div className="Transport">
            <div className="type">
              {EquipmentIcon(shipment.equipmentType)}
              <p>{EquipmentType(shipment.equipmentType)}</p>
            </div>
            <div className="commodity">
              <h4>Commodity</h4>
              <p>{shipment.commodity}</p>
            </div>
            <div className="weight">
              <h4>weight</h4>
              <p>
                <CurrencyFormat
                  value={shipment.weight}
                  decimalScale={2}
                  displayType="text"
                  thousandSeparator
                />
                lb
              </p>
            </div>
            <div className="rating">
              <h4>Shipper rating</h4>
              <p>{shipment.shipperRatingScore}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    defaultShipment: state.shipments.shipments,
    currentShipments: state.clickedShipment.shipment,
    isLoading: state.shipmentsIsLoading,
  };
};

export default connect(mapStateToProps, null)(Details);
