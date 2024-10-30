import Image from 'next/image';
import React from 'react';

export const ImageContainer = (
  {
  borderRadius,
  children,
  padding,
  margin,
  source,
  height = 800,
  width = 800,
  alt,
}: {
  children?: React.ReactNode;
  borderRadius?: number;
  padding?: number;
  margin?: number;
  height?: number;
  source: string;
  width?: number;
  basis?: number;
  alt: string;
}) => {
  const style = {
    margin: margin !== undefined ? `${margin}rem` : undefined,
    padding: padding !== undefined ? `${padding}rem` : undefined,
    borderRadius: borderRadius !== undefined ? `${borderRadius}rem` : `0.375rem`,
    overflow: 'hidden', // Ensures the image stays within the borderRadius
  };

  return (
    <div className="flex items-center justify-center" style={style}>
      <div style={{ borderRadius: style.borderRadius, overflow: 'hidden' }}>
        <Image src={source} alt={alt} height={height} width={width} />
      </div>
      {children}
    </div>
  );
};
