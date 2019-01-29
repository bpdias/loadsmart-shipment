import React, { Component } from 'react';
import { connect } from 'react-redux';
import initialState from '../../redux/actions/initial.actions';
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

const mapStateToProps = state => ({ crt: state.counter });

const mapDispatchToProps = (dispatch) => {
  return {
    onInitialTest: () => dispatch(initialState('teste')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shipment);
