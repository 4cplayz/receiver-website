"use client";

import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import { Roboto } from "next/font/google";

// Initialize Roboto font outside the component
const robotoFont = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

const TextContainer = (
  {
    marginTop,
    children,
    padding,
    justify,
    margin,
    Weight,
    center,
    invert,
    right,
    align,
    content,
    items,
    left,
    Size,
    bg,
    lineHeight,
    upperCase,
    hoverUnderline,
    href, // New prop for linking to another page
    hoverGrow, // New prop for hover grow effect
    width, // New prop for setting width as percentage
  }: {
    children?: React.ReactNode,
    marginTop?: number,
    justify?: boolean,
    center?: boolean,
    padding?: number,
    invert?: boolean,
    align?: boolean,
    items?: boolean,
    right?: boolean,
    Weight?: number,
    margin?: number,
    left?: boolean,
    Size?: number,
    bg?: boolean,
    content?: boolean,
    lineHeight?: number,
    upperCase?: boolean,
    hoverUnderline?: boolean,
    href?: string, // New prop for link URL
    hoverGrow?: boolean, // New prop for hover grow effect
    width?: number, // New prop for setting width as percentage
  }) => {
  
  // Use Roboto font class
  const fontClass = robotoFont.className;

  // Text alignment classes
  const centerClass = center ? 'text-center' : '';
  const justifyClass = justify ? 'text-justify' : '';
  const leftClass = left ? 'text-left' : '';
  const rightClass = right ? 'text-right' : '';

  // Optional classes
  const bgClass = bg ? 'bg-blue-300' : '';
  const upperCaseClass = upperCase ? 'uppercase' : '';
  const hoverUnderlineClass = hoverUnderline ? 'hover-underline' : '';

  const style = {
    alignContent: content ? "center" : undefined,
    marginTop: marginTop !== undefined ? `${marginTop}rem` : undefined,
    color: invert ? 'var(--secondary-color)' : 'var(--primary-color)',
    fontSize: Size ? `${Size}rem` : undefined,
    fontWeight: Weight ? Weight : undefined,
    margin: margin !== undefined ? `${margin}rem` : undefined,
    padding: padding !== undefined ? `${padding}rem` : undefined,
    lineHeight: lineHeight ? `${lineHeight}` : undefined,
    width: width !== undefined ? `${width}%` : undefined, // Apply width if provided
    transition: hoverGrow ? 'transform 0.3s ease' : undefined, // Apply transition if hoverGrow is true
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (hoverGrow) {
      (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (hoverGrow) {
      (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
    }
  };

  return href ? (
    <Link href={href}
          className={`${leftClass} ${rightClass} ${fontClass} ${bgClass} ${centerClass} ${justifyClass} ${upperCaseClass} ${hoverUnderlineClass}`}
          style={style}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
      {children}
    </Link>
  ) : (
    <p className={`${leftClass} ${rightClass} ${fontClass} ${bgClass} ${centerClass} ${justifyClass} ${upperCaseClass} ${hoverUnderlineClass}`}
       style={style}
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}>
      {children}
    </p>
  );
}

export default TextContainer;
