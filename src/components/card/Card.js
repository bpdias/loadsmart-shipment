import React from 'react';
import './Card.scss';

const Card = () => (
  <div className="Card">
    <div className="Carrier">
      <div className="Vehicle">
        @@ Dry Van 53
      </div>
      <div className="Price">
        $1,240
      </div>
    </div>
    <div className="Information">
      <div className="Departure">
        <div className="City">
          New York, NY 10011
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
