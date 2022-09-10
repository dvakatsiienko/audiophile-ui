import React from 'react';

export const BurgerMenuSvg = (props: BurgerMenuSvgProps) => {
    return (
        <svg
            fill = 'none'
            height = '15'
            viewBox = '0 0 16 15'
            width = '16'
            xmlns = 'http://www.w3.org/2000/svg'
            { ...props }
        >
            <rect fill = '#fff' height = '3' width = '16' />
            <rect fill = '#fff' height = '3' width = '16' y = '6' />
            <rect fill = '#fff' height = '3' width = '16' y = '12' />
        </svg>
    );
};

/* Types */
export type BurgerMenuSvgProps = React.SVGProps<SVGSVGElement>;
