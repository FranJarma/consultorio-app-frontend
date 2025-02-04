import React from 'react';

interface LogoProps {
    width?: number;
    height?: number;
}

export const Logo: React.FC<LogoProps> = ({ width = 100, height = 50 }) => {
    return (
        <img src="./logo.png" alt="logo" width={width} height={height} />
    );
};
