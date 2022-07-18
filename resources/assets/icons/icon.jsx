import React from "react";

import {
  ArrowDown,
} from './index';

const iconTypes = {
  arrowDown: ArrowDown,
};

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
