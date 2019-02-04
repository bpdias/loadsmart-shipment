import React from 'react';
import Card from '../card';
import Spinner from '../spinner';
import Aux from '../../hocs/Aux';
import './Shipments.scss';

const Shipments = (props) => {
  let cards = null;
  if (props.shipments) {
    cards = (
      <div>
        {props.shipments.map((shipment) => {
          return <Card shipment={shipment} key={shipment.id} />;
        })}
      </div>
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
};

export default Shipments;
