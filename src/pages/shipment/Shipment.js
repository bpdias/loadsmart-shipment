import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShipments } from '../../redux/actions/shipment.actions';
import Shipements from '../../components/shipments';
import Details from '../../components/details';
import './Shipment.scss';

class Shipment extends Component {
  render() {
    return (
      <div className="Shipment">
        <Shipements />
        <Details />
      </div>
    );
  }
}

const mapStateToProps = state => ({ shipment: state });

const mapDispatchToProps = (dispatch) => {
  return {
    onInitialTest: () => dispatch(fetchShipments()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shipment);
