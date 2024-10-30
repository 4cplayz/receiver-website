import React from 'react';

const TextBoxContainer = (
  {
  children,
  W,
  minW,
  maxW,
  H,
  minH,
  maxH,
  padding,
  paddingX,
  paddingY,
  margin,
  borderRadius,
  roundTopLeft,
  roundTopRight,
  roundBottomLeft,
  roundBottomRight,
  borderWidth,
  borderStyle,
  borderColor,
  boxShadow,
  center,
  align,
  row,
}: {
  children?: React.ReactNode,
  W?: number,
  minW?: number,
  maxW?: number,
  H?: number,
  minH?: number,
  maxH?: number,
  padding?: number,
  paddingX?: number,
  paddingY?: number,
  margin?: number,
  borderRadius?: number,
  roundTopLeft?: number,
  roundTopRight?: number,
  roundBottomLeft?: number,
  roundBottomRight?: number,
  borderWidth?: number,
  borderStyle?: string,
  borderColor?: string,
  boxShadow?: string,
  center?: boolean,
  align?: boolean,
  row?: boolean,
}) => {
  const addPaddingX = (paddingX?: number) => {
    if (paddingX !== undefined) {
      return {
        paddingLeft: `${paddingX}rem`,
        paddingRight: `${paddingX}rem`,
      };
    }
    return {};
  };

  const addPaddingY = (paddingY?: number) => {
    if (paddingY !== undefined) {
      return {
        paddingTop: `${paddingY}rem`,
        paddingBottom: `${paddingY}rem`,
      };
    }
    return {};
  };

  const centerClass = center ? 'justify-center' : '';
  const alignClass = align ? 'items-center' : '';
  const directionClass = row ? 'flex-row' : 'flex-col';

  const style = {
    width: W !== undefined ? `${W}px` : '100%',
    minWidth: minW !== undefined ? `${minW}px` : undefined,
    maxWidth: maxW !== undefined ? `${maxW}px` : undefined,
    height: H !== undefined ? `${H}px` : undefined,
    minHeight: minH !== undefined ? `${minH}px` : undefined,
    maxHeight: maxH !== undefined ? `${maxH}px` : undefined,
    padding: padding !== undefined ? `${padding}rem` : undefined,
    margin: margin !== undefined ? `${margin}rem` : undefined,
    borderRadius: borderRadius !== undefined ? `${borderRadius}rem` : undefined,
    borderTopLeftRadius: roundTopLeft !== undefined ? `${roundTopLeft}rem` : undefined,
    borderTopRightRadius: roundTopRight !== undefined ? `${roundTopRight}rem` : undefined,
    borderBottomLeftRadius: roundBottomLeft !== undefined ? `${roundBottomLeft}rem` : undefined,
    borderBottomRightRadius: roundBottomRight !== undefined ? `${roundBottomRight}rem` : undefined,
    borderWidth: borderWidth !== undefined ? `${borderWidth}px` : '2px',
    borderStyle: borderStyle !== undefined ? borderStyle : 'solid',
    borderColor: borderColor !== undefined ? borderColor : 'var(--primary-color)',
    boxShadow: boxShadow !== undefined ? boxShadow : undefined,
    ...addPaddingX(paddingX),
    ...addPaddingY(paddingY),
  };

  return (
    <div className={`flex ${directionClass} ${centerClass} ${alignClass}`} style={style}>
      {children}
    </div>
  );
};

export default TextBoxContainer;
