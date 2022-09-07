/* Core */
import React from 'react';
import Image from 'next/future/image';
import styled, { css } from 'styled-components';

/* Instruments */
import chevronRight from './img/chevron-right.svg';

export const ActionButton = (props: ActionButtonProps) => {
    const dynamicProps: { type?: string; href?: string } = {};

    if (props.as === 'button') dynamicProps.type = props.type;
    if (props.as === 'a') dynamicProps.href = props.href;

    return (
        <Button
            { ...dynamicProps }
            $variant = { props.variant as Variant }
            as = { props.as }
            onClick = { props.onClick }
        >
            <span>{props.children}</span>
            {props.variant === 'inline' ? <Image alt = 'chevron' src = { chevronRight } /> : null}
        </Button>
    );
};
ActionButton.defaultProps = {
    onClick:  () => void 0,
    children: 'Click',
    variant:  'primary',
    type:     'button',
    as:       'button',
    href:     '',
};

/* Styles */
const variants = {
    primary: css`
        background-color: ${p => p.theme.palette[ 'color-6' ]};
        color: ${p => p.theme.palette[ 'color-3' ]};

        &:hover {
            background-color: ${p => p.theme.palette[ 'color-7' ]};
        }
    `,
    secondary: css`
        background-color: ${p => p.theme.palette[ 'color-5' ]};
        color: ${p => p.theme.palette[ 'color-1' ]};
        border: 1px solid black;

        &:hover {
            background-color: ${p => p.theme.palette[ 'color-1' ]};
            color: ${p => p.theme.palette[ 'color-5' ]};
        }
    `,
    inline: css`
        gap: 13px;
        background-color: transparent;
        color: ${p => p.theme.palette[ 'color-8' ]};

        &:hover {
            color: ${p => p.theme.palette[ 'color-6' ]};
        }
    `,
};

const Button = styled.button<SButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 40px;
    outline: none;
    transition: color 0.3s ease, background-color 0.3s ease;

    ${p => variants[ p.$variant as Variant ]}
`;

/* Types */
interface ActionButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
    variant?: Variant;
    type?: 'button' | 'submit' | 'reset';
    as?: As;
    href?: string;
}

type Variant = 'primary' | 'secondary' | 'inline';
type As = 'button' | 'a';

interface SButtonProps {
    $variant: Variant;
}
