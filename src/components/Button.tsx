/* Core */
import React from 'react';
import styled from 'styled-components';

export const Button = (props: ButtonProps) => {
    return (
        <SButton $variant = { props.variant } type = 'button' onClick = { props.onClick }>
            {props.children}
        </SButton>
    );
};
Button.defaultProps = {
    onClick:  () => void 0,
    children: 'Click',
    variant:  'primary',
};

/* Styles */
interface P {
    $variant: Variant;
}
const SButton = styled.button<P>`
    width: 160px;
    height: 40px;
    color: ${p => p.theme.palette[ 'color-3' ]};
    background-color: ${p => (p.$variant === 'primary' ? p.theme.palette[ 'color-6' ] : 'red')};
    outline: none;
    border: none;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${p => p.theme.palette[ 'color-7' ]};
    }
`;

/* Types */
interface ButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
    variant?: Variant;
}

type Variant = 'primary' | 'secondary' | 'inset';
