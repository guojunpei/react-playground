import React, { FC, SVGProps } from 'react';

export const WaveConvexSvg: FC<
  SVGProps<SVGSVGElement> & {
    color?: string;
    preserveAspectRatio?: string;
  }
> = ({ color = '#D8E9F2', preserveAspectRatio, ...props }) => {
  return (
    <svg
      viewBox="0 0 375 42"
      preserveAspectRatio={preserveAspectRatio}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 42h375v-7.22C217.14 55.862 180.71 17.934 0 0v42z"
        fill={color}
      />
    </svg>
  );
};
