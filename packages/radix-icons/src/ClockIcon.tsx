import * as React from 'react';
import { BaseIconProps } from './types';

interface ClockIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const ClockIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ClockIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.5 1.127a6.373 6.373 0 100 12.746 6.373 6.373 0 000-12.746zM2.077 7.5a5.423 5.423 0 1110.846 0 5.423 5.423 0 01-10.846 0zM8 4.5a.5.5 0 00-1 0v3a.5.5 0 00.146.354l2 2a.5.5 0 00.708-.708L8 7.293V4.5z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M13.398 7.5a5.898 5.898 0 11-11.796 0 5.898 5.898 0 0111.796 0z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M7.5 1.127a6.373 6.373 0 100 12.746 6.373 6.373 0 000-12.746zM2.077 7.5a5.423 5.423 0 1110.846 0 5.423 5.423 0 01-10.846 0zM8 4.5a.5.5 0 00-1 0v3a.5.5 0 00.146.354l2 2a.5.5 0 00.708-.708L8 7.293V4.5z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ClockIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ClockIcon;
