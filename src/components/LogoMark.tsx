import React from 'react';

interface LogoMarkProps {
  className?: string;
}

export const LogoMark: React.FC<LogoMarkProps> = ({ className = '' }) => {
  return (
    <span
      role="img"
      aria-label="Logo PV"
      className={`logo-mark ${className}`}
    />
  );
};