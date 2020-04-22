import * as React from 'react';
import { BaseIconProps } from './types';

interface ArrowTopLeftIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const ArrowTopLeftIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: ArrowTopLeftIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6465L4.70711 4L9 4C9.27614 4 9.5 3.77614 9.5 3.5C9.5 3.22386 9.27614 3 9 3L3.5 3C3.36739 3 3.24021 3.05268 3.14645 3.14645C3.05268 3.24022 3 3.36739 3 3.5L3 9.00001C3 9.27615 3.22386 9.50001 3.5 9.50001C3.77614 9.50001 4 9.27615 4 9.00001V4.70711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ArrowTopLeftIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ArrowTopLeftIcon;
