import * as React from 'react';
import { BaseIconProps } from './types';

interface ProgressIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const ProgressIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ProgressIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M6.99933 1.12344H7.49933C9.18875 1.12344 10.7247 1.78059 11.8655 2.85323C11.8857 2.8722 11.9057 2.89129 11.9256 2.91052C13.1278 4.07015 13.8755 5.69775 13.8755 7.49998C13.8755 7.53104 13.8753 7.56205 13.8748 7.593V7.99935H13.8562C13.6015 11.2872 10.8531 13.8759 7.49999 13.8759C3.97888 13.8759 1.12451 11.0213 1.12451 7.49998C1.12451 4.1472 3.71224 1.39881 6.99933 1.14345V1.12344ZM6.99933 7.49935V2.14709C4.2653 2.39963 2.12451 4.69975 2.12451 7.49998C2.12451 10.469 4.53123 12.8759 7.49999 12.8759C10.3004 12.8759 12.6007 10.7343 12.8526 7.99935H7.49933H6.99933V7.49935Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ProgressIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ProgressIcon;
