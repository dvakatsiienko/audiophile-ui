/* Core */
import React from 'react';
import Image from 'next/future/image';
import styled, { type ThemedStyledProps, type Theme } from 'styled-components';

/* Instruments */
import chevronRight from './img/chevron-right.svg';

export const ActionButton = (props: ButtonProps) => {
    return (
        <Button $variant = { props.variant } type = 'button' onClick = { props.onClick }>
            <span>{props.children}</span>
            {props.variant === 'action' ? <Image alt = 'chevron' src = { chevronRight } /> : null}
        </Button>
    );
};
ActionButton.defaultProps = {
    onClick:  () => void 0,
    children: 'Click',
    variant:  'primary',
};

/* Styles */
const Button = styled.button<SButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${p => (p.$variant === 'action' ? '13px' : '0')};
    width: 160px;
    height: 40px;
    background-color: ${getBgColor};
    outline: none;
    border: ${p => (p.$variant === 'secondary' ? '1px solid black' : 'none')};
    transition: color 0.3s ease, background-color 0.3s ease;
    color: ${getColor};

    &:hover {
        background-color: ${getBgColorHover};
        color: ${getColorHover};
    }
`;

/* Helpers */
function getBgColor(props: SProps) {
    if (props.$variant === 'primary') return props.theme.palette[ 'color-6' ];
    if (props.$variant === 'secondary') return props.theme.palette[ 'color-5' ];
    if (props.$variant === 'action') return 'transparent';

    return 'red';
}

function getBgColorHover(props: SProps) {
    if (props.$variant === 'primary') return props.theme.palette[ 'color-7' ];
    if (props.$variant === 'secondary') return props.theme.palette[ 'color-1' ];
    if (props.$variant === 'action') return 'transparent';

    return 'blue';
}

function getColor(props: SProps) {
    if (props.$variant === 'primary') return props.theme.palette[ 'color-3' ];
    if (props.$variant === 'secondary') return props.theme.palette[ 'color-1' ];
    if (props.$variant === 'action') return props.theme.palette[ 'color-8' ];

    return 'black';
}

function getColorHover(props: SProps) {
    if (props.$variant === 'primary') return props.theme.palette[ 'color-3' ];
    if (props.$variant === 'secondary') return props.theme.palette[ 'color-5' ];
    if (props.$variant === 'action') return props.theme.palette[ 'color-6' ];

    return 'black';
}

/* Types */
interface ButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
    variant?: Variant;
}

type Variant = 'primary' | 'secondary' | 'action';

interface SButtonProps {
    $variant: Variant | undefined; // ? undefined added because TypeScript does't considers defaultProps
}

type SProps = ThemedStyledProps<
    Pick<
        React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
        'key' | keyof React.ButtonHTMLAttributes<HTMLButtonElement>
    > &
        SButtonProps,
    Theme
>;
