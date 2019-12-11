import * as React from 'react';
import { BaseIconProps } from './types';

interface BreakLinkIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const BreakLinkIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: BreakLinkIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M5.5 0a.5.5 0 01.5.5v2a.5.5 0 11-1 0v-2a.5.5 0 01.5-.5zm7 9a.5.5 0 000 1h2a.5.5 0 000-1h-2zm-1.354 2.146a.5.5 0 01.708 0l2 2a.5.5 0 01-.707.707l-2-2a.5.5 0 010-.707zM9.5 12a.5.5 0 01.5.5v2a.5.5 0 11-1 0v-2a.5.5 0 01.5-.5zM1.854 1.146a.5.5 0 00-.707.708l2 2a.5.5 0 10.707-.708l-2-2zM0 5.5A.5.5 0 01.5 5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm2.285 2.265l-.043.043c-.37.37-.606.606-.771.85-.675.993-.71 2.287-.06 3.277.158.241.39.472.74.824l.046.044.044.045c.352.351.583.582.824.74.99.651 2.284.616 3.278-.059.243-.165.48-.402.849-.771l.043-.043 1.325-1.326a.5.5 0 00-.707-.707l-1.325 1.326c-.427.427-.593.589-.747.694-.677.46-1.532.468-2.167.051-.144-.095-.298-.245-.71-.657-.412-.412-.563-.566-.657-.71-.418-.635-.409-1.49.05-2.167.106-.154.268-.32.695-.747l1.326-1.326a.5.5 0 10-.707-.707L2.285 7.765zm6.187-4.773c.427-.427.593-.589.747-.694.676-.46 1.531-.468 2.167-.051.144.095.298.245.71.657.412.412.562.566.657.71.417.635.408 1.49-.051 2.167-.105.154-.268.32-.694.747l-1.326 1.326a.5.5 0 00.707.707l1.326-1.326.043-.043c.37-.37.606-.606.77-.85.676-.993.71-2.287.06-3.277-.158-.241-.389-.472-.74-.824l-.045-.044-.045-.045c-.35-.351-.582-.582-.823-.741-.99-.65-2.284-.615-3.278.06-.243.165-.48.402-.85.771l-.042.043-1.326 1.326a.5.5 0 10.707.707l1.326-1.326z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`BreakLinkIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default BreakLinkIcon;
