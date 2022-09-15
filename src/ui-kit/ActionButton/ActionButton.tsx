/* Core */
import Image from 'next/future/image';
import NextLink from 'next/link';
import styled, { css } from 'styled-components';

/* Instruments */
import { center } from '@/ui-kit';
import type { Route } from '@/types';
import chevronRight from './img/chevron-right.svg';

export const ActionButton = (props: ActionButtonProps) => {
    const children = (
        <span>
            <span>{props.children}</span>
            {props.variant === 'inline' ? <Image alt = 'chevron' src = { chevronRight } /> : null}
        </span>
    );

    const handlePointerUp = () => {
        if (props.onPointerUp) {
            props.onPointerUp();
            return null;
        }
    };

    if (props.as === 'a') {
        return (
            <NextLink href = { props.href as unknown as URL }>
                <Link
                    $size = { props.size as Size }
                    $variant = { props.variant as Variant }
                    href = { props.href }
                >
                    {children}
                </Link>
            </NextLink>
        );
    }

    return (
        <Button
            $size = { props.size as Size }
            $variant = { props.variant as Variant }
            data-testid = { props[ 'data-testid' ] }
            type = { props.type }
            onPointerUp = { handlePointerUp }
        >
            {children}
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
const heights: Record<Size, string> = {
    small:  '20px',
    medium: '40px',
    large:  '48px',
};

const styles = css<SButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 160px;
    height: ${p => heights[ p.$size ]};
    outline: none;
    border: none;
    transition: color 0.3s ease, background-color 0.3s ease;
    font-weight: 700;
    font-size: 13px;
    line-height: 17px;
    text-transform: uppercase;
    user-select: none;

    ${p => variants[ p.$variant as Variant ]}
`;

const Button = styled.button<SButtonProps>`
    ${styles}
`;
const Link = styled.a<SButtonProps>`
    ${styles}
`;

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
        background-color: transparent;
        color: var(--color-8);

        &:hover {
            color: var(--color-6);
        }

        & > span {
            ${center};
            flex-direction: row;

            display: flex;
            gap: 13px;
        }
    `,
};

/* Types */
type ActionButtonProps = React.PropsWithChildren<{
    onPointerUp?: () => void;
    variant?: Variant;
    // type?: string;
    type?: ButtonType;
    as?: As;
    href?: Route;
    size?: Size;
    ['data-testid']?: string;
}>;

type Variant = 'primary' | 'secondary' | 'inline';
type As = 'button' | 'a';
type Size = 'small' | 'medium' | 'large';
type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>['type'];

interface SButtonProps {
    $variant: Variant;
    $size: Size;
}
