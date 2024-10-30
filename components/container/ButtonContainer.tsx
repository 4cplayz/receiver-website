import React, { CSSProperties } from 'react';

const ButtonContainer = (
  {
    children,
    padding,
    margin,
    borderRadius,
    backgroundColor,
    textColor,
    width,
    height,
    onClick,
    center, // New prop to enable centering
  }: {
    children?: React.ReactNode,
    padding?: number,
    margin?: number,
    borderRadius?: number,
    backgroundColor?: string,
    textColor?: string,
    width?: number | string,
    height?: number | string,
    onClick?: () => void,
    center?: boolean, // New prop type for centering
  }) => {

  const style: CSSProperties = {
    display: center ? 'flex' : 'inline-block', // Use flexbox if centering
    justifyContent: center ? 'center' : undefined,
    alignItems: center ? 'center' : undefined,
    padding: padding !== undefined ? `${padding}rem` : '1rem',
    margin: margin !== undefined ? `${margin}rem` : undefined,
    borderRadius: borderRadius !== undefined ? `${borderRadius}rem` : '15px',
    backgroundColor: backgroundColor ?? '#45B6B0',
    color: textColor ?? 'white',
    cursor: 'pointer',
    border: 'none',
    textAlign: 'center' as CSSProperties['textAlign'],
    width: width !== undefined ? (typeof width === 'number' ? `${width}px` : width) : undefined,
    height: height !== undefined ? (typeof height === 'number' ? `${height}px` : height) : undefined,
  };

  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonContainer;
