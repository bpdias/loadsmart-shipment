import React from 'react';
import IconTruckDryvan from '../../components/svgImages/icons/truck-dryvan';

export const EquipmentIcon = (equip) => {
  switch (equip) {
    case 'DRV':
      return (
        <IconTruckDryvan />
      );
    default:
      return false;
  }
};

export const EquipmentType = (equip) => {
  const map = ['Dry Van'];
  switch (equip) {
    case 'DRV':
      return map[0];
    default:
      return map[0];
  }
};
