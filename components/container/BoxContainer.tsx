import React from 'react';

const BoxContainer = (
  {
    children,
    W,
    minW,
    maxW,
    H,
    minH,
    maxH,
    invert,
    borderRadius,
    borderWidth,
    borderColor,
    borderStyle,
    bgColor,
    padding,
    paddingX,
    margin,
    center,
    align,
    roundTopLeft,
    roundTopRight,
    roundBottomLeft,
    roundBottomRight,
  }: {
    children?: React.ReactNode,
    W?: number,
    minW?: number,
    maxW?: number,
    H?: number,
    minH?: number,
    maxH?: number,
    invert?: boolean,
    borderRadius?: number,
    borderWidth?: number,
    borderColor?: string,
    borderStyle?: string,
    bgColor?: string,
    padding?: number,
    margin?: number,
    center?: boolean,
    align?: boolean,
    paddingX?: number,
    roundTopLeft?: number,
    roundTopRight?: number,
    roundBottomLeft?: number,
    roundBottomRight?: number,
  }) => {

  const addPaddingX = (paddingX?: number) => {
    if (paddingX !== undefined) {
      return {
        paddingLeft: `${paddingX}rem`,
        paddingRight: `${paddingX}rem`,
      };
    }
    return {};
  }

  const centerClass = center ? 'justify-center' : '';
  const alignClass = align ? 'content-center' : '';

  const style = {
    backgroundColor: bgColor || (invert ? 'var(--primary-color)' : 'var(--secondary-color)'),
    margin: margin !== undefined ? `${margin}rem` : undefined,
    padding: padding !== undefined ? `${padding}rem` : undefined,
    borderRadius: borderRadius !== undefined ? `${borderRadius}rem` : undefined,
    borderTopLeftRadius: roundTopLeft !== undefined ? `${roundTopLeft}rem` : undefined,
    borderTopRightRadius: roundTopRight !== undefined ? `${roundTopRight}rem` : undefined,
    borderBottomLeftRadius: roundBottomLeft !== undefined ? `${roundBottomLeft}rem` : undefined,
    borderBottomRightRadius: roundBottomRight !== undefined ? `${roundBottomRight}rem` : undefined,
    borderWidth: borderWidth !== undefined ? `${borderWidth}px` : undefined,
    borderColor: borderColor || 'black',  // default border color is black
    borderStyle: borderStyle || 'solid',  // default border style is solid
    width: W !== undefined ? `${W}px` : undefined,
    maxWidth: maxW !== undefined ? `${maxW}px` : undefined,
    minWidth: minW !== undefined ? `${minW}px` : undefined,
    height: H !== undefined ? `${H}px` : undefined,
    maxHeight: maxH !== undefined ? `${maxH}px` : undefined,
    minHeight: minH !== undefined ? `${minH}px` : undefined,
    ...addPaddingX(paddingX),
  };

  return (
    <div className={`flex ${centerClass} ${alignClass}`} style={style}>
      {children}
    </div>
  );
}

export default BoxContainer;
