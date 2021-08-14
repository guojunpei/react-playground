import React, { FC } from 'react';
import { ContainerNamesType } from '../types/types';

export const SVGContainer: FC<{ name: ContainerNamesType }> = ({
  name,
  children,
}) => {
  if (name === 'none') {
    return <>{children}</>;
  }

  return <div className={name}>{children}</div>;
};
