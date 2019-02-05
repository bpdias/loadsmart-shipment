import React from 'react';
import PalletJack from '../../components/svgImages/icons/accessorial-pallet-jack';
import Airport from '../../components/svgImages/icons/acessorial-airport';
import LiftGate from '../../components/svgImages/icons/accessorial-lift-gate';
import Lumper from '../../components/svgImages/icons/accessorial-lumper';


const snakeToCamel = (s) => {
  const string = s.replace(/(_\w)/g, (m) => { return m[1].toUpperCase(); });
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const returnIcon = (accessorials) => {
  let icons = [];
  if (accessorials) {
    accessorials.map((accessorial, index) => {
      switch (snakeToCamel(accessorial)) {
        case 'PalletJack':
          icons.push(<PalletJack key={index} />);
          return true;
        case 'Airport':
          icons.push(<Airport key={index} />);
          return true;
        case 'LiftGate':
          icons.push(<LiftGate key={index} />);
          return <LiftGate />;
        case 'Lumper':
          icons.push(<Lumper key={index} />);
          return true;
        default:
          break;
      }
    });
    return icons;
  }
};


export default returnIcon;
