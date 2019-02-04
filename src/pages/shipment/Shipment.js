import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShipments } from '../../redux/actions/shipment.actions';
import Shipments from '../../components/shipments';
import Details from '../../components/details';
import Spinner from '../../components/spinner';
import Aux from '../../hocs/Aux';

import './Shipment.scss';

class Shipment extends Component {
  componentDidMount() {
    this.props.onInitShipments();
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
    onInitShipments: () => dispatch(fetchShipments()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shipment);
