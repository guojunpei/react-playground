import React, { FC } from 'react';
import { SvgHeightValuesType } from '../types/types';
import { WaveConvexSvg } from '../wave-convex-svg';

export const SvgComponent: FC<{
  par: string;
  svgHeight: SvgHeightValuesType;
  svgWidth: SvgHeightValuesType;
}> = ({ par, svgHeight, svgWidth }) => {
  return (
    <>
      <h3>Preserve Aspect Rations: {par}</h3>
      <WaveConvexSvg
        preserveAspectRatio={par}
        color="#2e7d32"
        style={{
          height: svgHeight === 'none' ? '' : svgHeight,
          width: svgWidth === 'none' ? '' : svgWidth,
        }}
      />
    </>
  );
};
