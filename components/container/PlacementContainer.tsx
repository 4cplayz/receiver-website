import React from 'react';

const PlacementContainer = (
  {
    children,
    gap,
    marginAuto,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    padding,
    row,
    rowInverse,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent,
    bg,
    alignSelf,
    full,
    width,
    scrollableY,
    scrollableX,
    maxHeight, // New maxHeight prop
  }: {
    children?: React.ReactNode;
    gap?: number;
    marginAuto?: boolean;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    paddingTop?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    padding?: number;
    row?: boolean;
    rowInverse?: boolean;
    bg?: boolean;
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    full?: boolean;
    width?: string;
    scrollableY?: boolean;
    scrollableX?: boolean;
    maxHeight?: number; // Add maxHeight prop type, expecting px value
  }) => {
  
  const style: React.CSSProperties = {
    gap: gap !== undefined ? `${gap}rem` : undefined,
    margin: marginAuto ? 'auto' : undefined,
    marginTop: marginTop !== undefined ? `${marginTop}rem` : undefined,
    marginBottom: marginBottom !== undefined ? `${marginBottom}rem` : undefined,
    marginLeft: marginLeft !== undefined ? `${marginLeft}rem` : undefined,
    marginRight: marginRight !== undefined ? `${marginRight}rem` : undefined,
    paddingTop: paddingTop !== undefined ? `${paddingTop}rem` : undefined,
    paddingBottom: paddingBottom !== undefined ? `${paddingBottom}rem` : undefined,
    paddingLeft: paddingLeft !== undefined ? `${paddingLeft}rem` : undefined,
    paddingRight: paddingRight !== undefined ? `${paddingRight}rem` : undefined,
    padding: padding !== undefined ? `${padding}rem` : undefined,
    flexWrap: flexWrap ?? 'nowrap',
    justifyContent: justifyContent ?? 'flex-start',
    alignItems: alignItems ?? 'stretch',
    alignContent: alignContent ?? 'stretch',
    width: width !== undefined ? `${width}%` : undefined,
    height: full ? '100%' : undefined,
    overflowY: scrollableY ? 'scroll' : 'hidden',
    overflowX: scrollableX ? 'scroll' : 'hidden',
    maxHeight: maxHeight !== undefined ? `${maxHeight}px` : undefined, // Apply max-height in px
  };

  const flexClasses = [
    'flex',
    rowInverse ? 'flex-row-reverse' : row ? 'flex-row' : 'flex-col',
    bg ? 'bg-blue-200' : '',
    alignSelf ? `self-${alignSelf}` : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={flexClasses} style={style}>
      {children}
    </div>
  );
};

export default PlacementContainer;
