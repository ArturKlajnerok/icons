import * as React from 'react';
import { BaseIconProps } from './types';

interface FontSizeIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const FontSizeIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: FontSizeIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.7823 2.21706C3.70729 2.14204 3.60555 2.0999 3.49946 2.0999C3.39338 2.0999 3.29164 2.14204 3.21662 2.21706L1.21664 4.21704C1.06043 4.37325 1.06043 4.62651 1.21664 4.78272C1.37284 4.93893 1.62611 4.93893 1.78232 4.78272L3.09947 3.46557L3.09946 11.5341L1.78232 10.217C1.62611 10.0608 1.37284 10.0608 1.21664 10.217C1.06043 10.3732 1.06043 10.6265 1.21664 10.7827L3.21662 12.7827C3.29164 12.8577 3.39338 12.8998 3.49946 12.8998C3.60555 12.8998 3.70729 12.8577 3.7823 12.7827L5.78229 10.7827C5.9385 10.6265 5.9385 10.3732 5.78229 10.217C5.62608 10.0608 5.37282 10.0608 5.21661 10.217L3.89946 11.5341L3.89946 3.46558L5.21661 4.78272C5.37282 4.93893 5.62608 4.93893 5.78229 4.78272C5.9385 4.62651 5.9385 4.37325 5.78229 4.21704L3.7823 2.21706ZM11.4999 2.74995C11.7106 2.74995 11.8988 2.88209 11.9702 3.08034L14.9702 11.3999C15.0639 11.6596 14.9292 11.9461 14.6695 12.0398C14.4097 12.1335 14.1232 11.9988 14.0295 11.7391L13.0476 9.01593H9.95221L8.97026 11.7391C8.87659 11.9988 8.59007 12.1335 8.3303 12.0398C8.07054 11.9461 7.93589 11.6596 8.02956 11.3999L11.0295 3.08034C11.101 2.88209 11.2891 2.74995 11.4999 2.74995ZM11.4999 4.72392L12.7411 8.16594H10.2587L11.4999 4.72392Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`FontSizeIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default FontSizeIcon;
