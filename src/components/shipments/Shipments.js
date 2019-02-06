import React, { Component } from 'react';
import Card from '../card';
import Spinner from '../spinner';
import Aux from '../../hocs/Aux';
import './Shipments.scss';

class Shipments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: 1,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.shipments && nextProps.shipments.length && this.activeCard === null) {
      this.setState({ activeCard: nextProps.shipments[0].id });
    }
  }

  setActiveCard = (id) => {
    this.setState({ activeCard: id });
  }

  render() {
    let cards = null;
    if (this.props.shipments) {
      cards = (
        <Aux>
          {this.props.shipments.map((shipment) => {
            return (
              <Card
                shipment={shipment}
                key={shipment.id}
                active={shipment.id === this.state.activeCard}
                setActiveCard={this.setActiveCard}
              />
            );
          })}
        </Aux>
      );
    } else {
      cards = (
        <Aux>
          <Spinner />
        </Aux>
      );
    }

    return (
      <div className="Shipments">
        {cards}
      </div>
    );
  }
}

export default Shipments;
