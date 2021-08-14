import { svgAlignment } from './responsive-svg-constants';

export const getPreserveAspectRatios = () => {
  const preserveAspectRatios = ['none'];

  svgAlignment.meetOrSlice.forEach((ms) => {
    svgAlignment.aligns.forEach((o) => {
      svgAlignment.aligns.forEach((p) => {
        preserveAspectRatios.push(`x${o}Y${p} ${ms}`);
      });
    });
  });

  return preserveAspectRatios;
};
