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
  if (accessorials) {
    const teste = accessorials.map((accessorial) => {
      switch (snakeToCamel(accessorial)) {
        case 'PalletJack':
          return <PalletJack key={accessorial} />;
        case 'Airport':
          return <Airport key={accessorial} />;
        case 'LiftGate':
          return <LiftGate key={accessorial} />;
        case 'Lumper':
          return <Lumper key={accessorial} />;
        default:
          break;
      }
    });
    return teste;
  }
};


export default returnIcon;
