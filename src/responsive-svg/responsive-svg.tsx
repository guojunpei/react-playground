import React, { useState, FC, Fragment } from 'react';
import './responsive-svg.scss';
import { ContainerNamesType, SvgHeightValuesType } from './types/types';
import { containerNames, svgHeightValues } from './responsive-svg-constants';
import { getPreserveAspectRatios } from './responsive-svg-utils';
import { SVGContainer } from './components/svg-container';
import { SvgComponent } from './components/svg-component';

export const ResponsiveSvg: FC = () => {
  const pars = getPreserveAspectRatios();
  const [par, setPar] = useState(pars[0]);
  const [container, setContainer] = useState<ContainerNamesType>(
    containerNames[0],
  );
  const [svgHeight, setSvgHeight] = useState<SvgHeightValuesType>('100%');
  const [svgWidth, setSvgWidth] = useState<SvgHeightValuesType>('100%');

  return (
    <div className="responsive-svg">
      <div className="top-section">
        <h1>Responsive SVG</h1>
        {containerNames.map((name) => (
          <button
            type="button"
            key={name}
            className={name === container ? 'active' : ''}
            onClick={() => setContainer(name)}
          >
            {name}
          </button>
        ))}
        <p>
          SVG <small>container:</small>
          {container}
        </p>
        {svgHeightValues.map((v) => (
          <Fragment key={v}>
            <button
              type="button"
              className={v === svgHeight ? 'active' : ''}
              onClick={() => setSvgHeight(v)}
            >
              height: {v}
            </button>
            <button
              type="button"
              className={v === svgWidth ? 'active' : ''}
              onClick={() => setSvgWidth(v)}
            >
              width: {v}
            </button>
          </Fragment>
        ))}
        <p>
          SVG <small>height:</small>
          {svgHeight}; <small>width:</small>
          {svgWidth}
        </p>
        {pars.map((p) => (
          <button
            type="button"
            key={p.replace(' ', '')}
            className={p === par ? 'active' : ''}
            onClick={() => setPar(p)}
          >
            {p}
          </button>
        ))}
      </div>

      <SVGContainer name={container}>
        <SvgComponent par={par} svgHeight={svgHeight} svgWidth={svgWidth} />
      </SVGContainer>
      <div className="bottom-section">
        <p>contents height: 100%</p>
        <h4>SVG preserveAspectRations:</h4>
        <p>
          {pars
            .filter((p) => !p.includes('meet'))
            .map((p) => p.replace(' slice', ''))
            .join(', ')}
        </p>
      </div>
    </div>
  );
};
