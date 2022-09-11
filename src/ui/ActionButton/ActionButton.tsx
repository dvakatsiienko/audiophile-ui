/* Core */
import React from 'react';
import Image from 'next/future/image';
import styled, { css } from 'styled-components';

/* Instruments */
import chevronRight from './img/chevron-right.svg';
import type { Route } from '@/types';

export const ActionButton = (props: ActionButtonProps) => {
    const dynamicProps: { type?: string; href?: string } = {};

    if (props.as === 'button') dynamicProps.type = props.type;
    if (props.as === 'a') dynamicProps.href = props.href;

    const handlePointerUp = () => {
        if (props.onPointerUp) {
            props.onPointerUp();
            return null;
        }
    };

    return (
        <Button
            { ...dynamicProps }
            $size = { props.size as Size }
            $variant = { props.variant as Variant }
            as = { props.as }
            data-testid = { props[ 'data-testid' ] }
            onPointerUp = { handlePointerUp }
        >
            <span>{props.children}</span>
            {props.variant === 'inline' ? <Image alt = 'chevron' src = { chevronRight } /> : null}
        </Button>
    );
};
ActionButton.defaultProps = {
    onPointerUp:   () => null,
    children:      'Click',
    variant:       'primary',
    type:          'button',
    as:            'button',
    href:          '/',
    size:          'medium',
    'data-testid': null,
};

/* Styles */
const variants = {
    primary: css`
        background-color: var(--color-6);
        color: var(--color-3);

        &:hover {
            background-color: var(--color-7);
        }
    `,
    secondary: css`
        background-color: var(--color-5);
        color: var(--color-1);
        border: 1px solid black;

        &:hover {
            background-color: var(--color-1);
            color: var(--color-5);
        }
    `,
    inline: css`
        gap: 13px;
        background-color: transparent;
        color: var(--color-8);

        &:hover {
            color: var(--color-6);
        }
    `,
};

const heights: Record<Size, string> = {
    small:  '20px',
    medium: '40px',
    large:  '48px',
};

const Button = styled.button<SButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: ${p => heights[ p.$size ]};
    outline: none;
    transition: color 0.3s ease, background-color 0.3s ease;
    border: none;
    user-select: none;

    ${p => variants[ p.$variant as Variant ]}
`;

/* Types */
interface ActionButtonProps {
    onPointerUp?: () => void;
    children?: React.ReactNode;
    variant?: Variant;
    type?: 'button' | 'submit' | 'reset';
    as?: As;
    href?: Route;
    size?: Size;
    ['data-testid']?: string;
}

type Variant = 'primary' | 'secondary' | 'inline';
type As = 'button' | 'a';
type Size = 'small' | 'medium' | 'large';

interface SButtonProps {
    $variant: Variant;
    $size: Size;
}
