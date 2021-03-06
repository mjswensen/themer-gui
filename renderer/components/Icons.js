import React from 'react';

export const Expand = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <g stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="square">
      <path d="M5.5 10.5l-4 4M10.5 5.5l4-4" strokeWidth="2"/>
      <path d="M2.5 2.5v6M8.5 2.5h-6M7.5 13.5h6M13.5 7.5v6M15.5.5v3M.5 15.5v-3M3.5 15.5h-3M12.5.5h3"/>
    </g>
  </svg>
);

export const Contract = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <g stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="square">
      <path d="M5.5 10.5l-4 4M10.5 5.5l4-4" strokeWidth="2"/>
      <path d="M.5.5v10M10.5.5H.5M5.5 15.5h10M15.5 5.5v10M6.5 12.5v-3M6.5 9.5h-3M9.5 3.5v3M9.5 6.5h3"/>
    </g>
  </svg>
);

export const Droplet = ({ style }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={ style }>
    <path d="M8 3.004c.25.386.525.772.827 1.172.297.395 1.308 1.664 1.495 1.91C11.522 7.663 12 8.802 12 10.5c0 2.002-1.613 3.5-4 3.5s-4-1.498-4-3.5c0-1.698.48-2.837 1.678-4.414.187-.246 1.198-1.515 1.495-1.91.302-.4.576-.786.827-1.172z" stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd"/>
  </svg>
);

export const Check = ({ backgroundColor, outlineColor, checkColor }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor, boxShadow: `inset 0 0 0 1px ${outlineColor}`, borderRadius: '2px' }}>
    <path d="M4 9l2 2M6 11l6-6" stroke={ checkColor } strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="square"/>
  </svg>
);

export const External = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'bottom', marginLeft: '1ex' }}>
    <g stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="square">
      <path d="M7.5 8.5l6-6" strokeWidth="2"/>
      <path d="M1.5 2.5v12M1.5 2.5h6M1.5 14.5h12M13.5 8.5v6M14.5 1.5v3M11.5 1.5h3"/>
    </g>
  </svg>
);

export const Radio = ({ selected }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <circle stroke="currentColor" cx="8" cy="8" r="7.5"/>
      <circle fill={ selected ? 'currentColor' : 'transparent' } cx="8" cy="8" r="4"/>
    </g>
  </svg>
);
