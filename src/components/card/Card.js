import React from 'react';
import IconTruckDryvan from '../svgImages/icons/truck-dryvan';
import './Card.scss';

const Card = () => (
  <div className="Card">
    <div className="Carrier">
      <div className="Vehicle">
        <IconTruckDryvan />
        <p>Dry Van 53</p>
      </div>
      <div className="Price">
        <p>$1,240</p>
      </div>
    </div>
    <div className="Information">
      <div className="Departure">
        <div className="City">
          New York, NY 10011
          <span className="pointer"> > </span>
        </div>
        <div className="Date">
          Wednesday, 01 August, 2015
        </div>
      </div>
      <div className="Arrival">
        <div className="City">
          Miami, FL 24818
        </div>
        <div className="Date">
          Thurday, 14 July, 2015
        </div>
      </div>
    </div>
  </div>
);

export default Card;
