import React from "react";

interface CarlaIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CarlaIcon = ({ size = 24, className = '', style, ...props }: CarlaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 24 24"
    className={className}
    style={style}
    {...props}
  >
    {/* Custom "C" for CARLA */}
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.5 0 4.8-.92 6.58-2.44l-1.42-1.42C15.8 19.36 14 20 12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8c2 0 3.8.64 5.16 1.86l1.42-1.42C16.8 2.92 14.5 2 12 2z"/>
    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c1.5 0 2.87-.55 3.91-1.46l-1.42-1.42C13.87 15.64 12.99 16 12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4c.99 0 1.87.36 2.49.88l1.42-1.42C14.87 6.55 13.5 6 12 6z"/>
  </svg>
);

export default CarlaIcon; 