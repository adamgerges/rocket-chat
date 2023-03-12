import React, { FC } from 'react';
import { Server } from '../../servers/common';

type BadgeProps = {
  value: Server['badge'];
  backgroundColor?: string;
};

const Badge: FC<BadgeProps> = ({ value, backgroundColor = '#F5455C' }) => {
  return (
    <div style={{ backgroundColor }}>
      <img src="/stategyicon.svg" alt="Stategy Icon" />
      <span style={{ color: '#FFFFFF' }}>{value}</span>
    </div>
  );
};

export default Badge;
