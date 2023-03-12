import React, { FC } from 'react';
import { Server } from '../../servers/common';
import AppIcon from './AppIcon';
import Badge from './Badge';

type LinuxTrayIconProps = {
  badge?: Server['badge'];
};

const LinuxTrayIcon: FC<LinuxTrayIconProps> = ({ badge }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src="/stategyicon.svg" alt="Stategy Icon" style={{ marginRight: '8px' }} />
      <AppIcon color="#9EA2A8">{!!badge && <Badge value={badge} />}</AppIcon>
    </div>
  );
};

export default LinuxTrayIcon;
