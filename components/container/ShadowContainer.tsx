const ShadowContainer = (
    {
    padding,
    children,
    shadowOffsetY,
    shadowBlur,
    shadowSpread,
    shadowColor,
    shadowOpacity,
    borderRadius,
    roundTopLeft,
    roundTopRight,
    roundBottomLeft,
    roundBottomRight,
}: {
    padding?: number;
    children?: React.ReactNode;
    shadowOffsetY?: number;
    shadowBlur?: number;
    shadowSpread?: number;
    shadowColor?: string;
    shadowOpacity?: number;
    borderRadius?: number;
    roundTopLeft?: number;
    roundTopRight?: number;
    roundBottomLeft?: number;
    roundBottomRight?: number;
}) => {

    const style = {
        padding: padding !== undefined ? `${padding}rem` : undefined,
        boxShadow: `0px ${shadowOffsetY ?? 10}px ${shadowBlur ?? 10}px ${shadowSpread ?? 0}px ${shadowColor ?? 'rgba(0, 0, 0, 0.5)'}`,
        opacity: shadowOpacity !== undefined ? shadowOpacity : 1,
        borderTopLeftRadius: roundTopLeft !== undefined ? `${roundTopLeft}rem` : undefined,
        borderTopRightRadius: roundTopRight !== undefined ? `${roundTopRight}rem` : undefined,
        borderBottomLeftRadius: roundBottomLeft !== undefined ? `${roundBottomLeft}rem` : undefined,
        borderBottomRightRadius: roundBottomRight !== undefined ? `${roundBottomRight}rem` : undefined,
        borderRadius: (roundTopLeft === undefined && roundTopRight === undefined && roundBottomLeft === undefined && roundBottomRight === undefined && borderRadius !== undefined) ? `${borderRadius}rem` : undefined,
        overflow: 'hidden', // Ensures the rounded corners apply without child overflow
    };
    

    return <div style={style}>{children}</div>;
};

export default ShadowContainer;
