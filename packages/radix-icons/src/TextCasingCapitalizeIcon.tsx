import * as React from 'react';
import { BaseIconProps } from './types';

interface TextCasingCapitalizeIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const TextCasingCapitalizeIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: TextCasingCapitalizeIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.905 2.505a.5.5 0 01.464.316l3.378 8.507a.5.5 0 01-.93.369L5.771 9.06H2.038L.992 11.697a.5.5 0 01-.93-.37L3.44 2.822a.5.5 0 01.465-.316zm0 1.855l1.508 3.8H2.396l1.509-3.8zm7.194.847c.761 0 1.452.361 1.955.947v-.497a.45.45 0 11.9 0v5.73a.45.45 0 01-.9 0v-.522c-.503.586-1.194.947-1.955.947-1.54 0-2.79-1.478-2.79-3.302s1.25-3.303 2.79-3.303zm.188 1.05c.781 0 1.456.53 1.767 1.296v1.913c-.311.765-.986 1.296-1.767 1.296-1.078 0-1.952-1.009-1.952-2.252 0-1.244.874-2.252 1.952-2.252z"
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
          d="M3.905 2.505a.5.5 0 01.464.316l3.378 8.507a.5.5 0 01-.93.369L5.771 9.06H2.038L.992 11.697a.5.5 0 01-.93-.37L3.44 2.822a.5.5 0 01.465-.316zm0 1.855l1.508 3.8H2.396l1.509-3.8zm7.194.847c.761 0 1.452.361 1.955.947v-.497a.45.45 0 11.9 0v5.73a.45.45 0 01-.9 0v-.522c-.503.586-1.194.947-1.955.947-1.54 0-2.79-1.478-2.79-3.302s1.25-3.303 2.79-3.303zm.188 1.05c.781 0 1.456.53 1.767 1.296v1.913c-.311.765-.986 1.296-1.767 1.296-1.078 0-1.952-1.009-1.952-2.252 0-1.244.874-2.252 1.952-2.252z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`TextCasingCapitalizeIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TextCasingCapitalizeIcon;
