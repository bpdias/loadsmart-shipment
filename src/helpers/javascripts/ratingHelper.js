import React from 'react';
import Star from '../../components/svgImages/icons/star';
import StarGray from '../../components/svgImages/icons/starGray';

export const rating = (rate) => {
  switch (Math.floor(rate)) {
    case 1:
      return (
        [
          <Star key="1" />,
          <StarGray key="2" />,
          <StarGray key="3" />,
          <StarGray key="4" />,
          <StarGray key="5" />,
        ]
      );
    case 2:
      return (
        [
          <Star key="1" />,
          <Star key="2" />,
          <StarGray key="3" />,
          <StarGray key="4" />,
          <StarGray key="5" />,
        ]
      );
    case 3:
      return (
        [
          <Star key="1" />,
          <Star key="2" />,
          <Star key="3" />,
          <StarGray key="4" />,
          <StarGray key="5" />,
        ]
      );
    case 4:
      return (
        [
          <Star key="1" />,
          <Star key="2" />,
          <Star key="3" />,
          <Star key="4" />,
          <StarGray key="5" />,
        ]
      );
    case 5:
      return (
        [
          <Star key="1" />,
          <Star key="2" />,
          <Star key="3" />,
          <Star key="4" />,
          <Star key="5" />,
        ]
      );
    default:
      return false;
  }
};

export default rating;
