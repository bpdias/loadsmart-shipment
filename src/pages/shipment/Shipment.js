import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchShipment from '../../redux/actions/shipment.actions';
import Aux from '../../hocs/Aux';
import Shipements from '../../components/shipments';
import Details from '../../components/details';

class Shipment extends Component {
  render() {
    return (
      <Aux>
        <button type="button" onClick={this.props.onInitialTest}>test</button>
        <h1>{this.props.crt}</h1>
        <Shipements />
        <Details />
      </Aux>
    );
  }
}

const mapStateToProps = state => ({ shipment: state });

const mapDispatchToProps = (dispatch) => {
  return {
    onInitialTest: () => dispatch(fetchShipment()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shipment);
