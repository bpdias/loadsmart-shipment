import React, { Component } from 'react';
import { connect } from 'react-redux';
import Shipments from '../../components/shipments';
import Details from '../../components/details';
import './Shipment.scss';
import {
  fetchShipments,
  fetchClickedShipment,
} from '../../redux/actions/shipment.actions';

class Shipment extends Component {
  componentDidMount() {
    this.props._onInitShipments();
  }

  render() {
    return (
      <div className="Shipment">
        <Shipments shipments={this.props.shipments} />
        <Details />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shipments: state.shipments.shipments,
    isLoading: state.shipmentsIsLoading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    _onInitShipments: () => dispatch(fetchShipments()),
    _setDefaultShipment: id => dispatch(fetchClickedShipment(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shipment);
