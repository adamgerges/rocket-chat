import React, { FC } from 'react';

type AppIconProps = {
  color?: string;
};

const AppIcon: FC<AppIconProps> = ({ children, color = '#f2f2f2' }) => {
  const Icon = require('./stategyicon.svg').default;

  return (
    <svg width='100%' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
      <g fill={color} mask={children ? 'url(#cut)' : undefined}>
        <Icon />
      </g>
      {!!children && (
        <>
          <g transform='translate(256 256)'>
            <g transform='translate(128 128)'>
              <g transform='scale(0.4)'>
                <g transform='translate(-256 -256)'>{children}</g>
              </g>
            </g>
          </g>
          <defs>
            <mask id='cut'>
              <rect x='0' y='0' width='512' height='512' fill='white' />
              <g filter='url(#blackout)'>
                <g transform='translate(256 256)'>
                  <g transform='translate(128 128)'>
                    <g transform='scale(0.5)'>
                      <g transform='translate(-256 -256)'>{children}</g>
                    </g>
                  </g>
                </g>
              </g>
            </mask>
            <filter id='blackout'>
              <feColorMatrix
                type='matrix'
                values='
              0 0 0 0 0
              0 0 0 0 0
              0 0 0 0 0
              0 0 0 1 0
            '
                in='SourceGraphic'
              />
            </filter>
          </defs>
        </>
      )}
    </svg>
  );
};

export default AppIcon;
