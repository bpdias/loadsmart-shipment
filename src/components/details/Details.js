import React from 'react';
import './Details.scss';
import IconTruckDryvan from '../svgImages/icons/truck-dryvan';
import SvgAcessorialPalletJack from '../svgImages/icons/accessorial-pallet-jack';
import SvgAcessorialAirport from '../svgImages/icons/acessorial-airport';
import SvgAcessorialLiftGate from '../svgImages/icons/accessorial-lift-gate';
import SvgAcessorialLumper from '../svgImages/icons/accessorial-lumper';

const Details = () => (
  <div className="Details">
    <div className="Map">
      <img src={require('../../assets/images/maps.png')} alt="maps" />
    </div>
    <div className="details-wrapper">
      <div className="Info">
        <p>Jersey City, NJ  &emsp;&emsp;  Bernarda,NJ</p>
      </div>
      <div className="delivery-info">
        <div className="PickUp">
          <h1>PICK-UP</h1>
          <h2>
            <span className="bullet" />
            <span className="bullet-number">1</span>
            Jersey City, NJ 17011
          </h2>
          <h3>Thursday, 14 July, 2015 12:00 - 17:00</h3>
          <div className="delivery-icons">
            <SvgAcessorialPalletJack />
            <SvgAcessorialAirport />
          </div>
        </div>
        <div className="Delivery">
          <h1>DELIVERY</h1>
          <h2>
            <span className="bullet" />
            <span className="bullet-number">2</span>
              Bernarda, NJ 17993
          </h2>
          <h3>Thursday, 14 July, 2015 12:00 - 17:00</h3>
          <div className="delivery-icons">
            <SvgAcessorialLiftGate />
            <SvgAcessorialLumper />
          </div>
        </div>
      </div>
      <div className="Transport">
        <div className="type">
          <IconTruckDryvan />
          <p>Dry Van 53</p>
        </div>
        <div className="commodity">
          <h4>Commodity</h4>
          <p>Apples</p>
        </div>
        <div className="weight">
          <h4>weight</h4>
          <p>55.000lb</p>
        </div>
        <div className="rating">
          <h4>Shipper rating</h4>
          <p>star</p>
        </div>
      </div>
    </div>
  </div>
);

export default Details;
