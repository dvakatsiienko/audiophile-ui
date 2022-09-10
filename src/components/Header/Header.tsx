/* Core */
import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

/* Components */
import { MobileNavModal } from './MobileNavModal';

/* Instruments */
import { media, Tablet, Desktop } from '@/ui';
import { LogoSvg, ShoppingCartSvg, BurgerMenuSvg } from './svg';

export const Header = () => {
    const [ isOpened, setIsOpened ] = useState(true);

    return (
        <SHeader $isOpened = { isOpened }>
            <section className = 'header-section'>
                <Tablet>
                    <BurgerMenuSvg
                        data-testid = 'burger-menu-svg'
                        onPointerDown = { () => setIsOpened(prev => !prev) }
                    />
                </Tablet>

                <Link href = '/'>
                    <a>
                        <LogoSvg />
                    </a>
                </Link>

                <Desktop>
                    <nav>
                        <ul>
                            <li>
                                <Link href = '/'>
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href = '/headphones'>
                                    <a>Headphones</a>
                                </Link>
                            </li>
                            <li>
                                <Link href = '/speakers'>
                                    <a>Speakres</a>
                                </Link>
                            </li>
                            <li>
                                <Link href = '/earphones'>
                                    <a>Earphones</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </Desktop>

                <Link href = '/checkout'>
                    <a>
                        <ShoppingCartSvg />
                    </a>
                </Link>
            </section>

            {isOpened && <MobileNavModal setIsOpened = { setIsOpened } />}
        </SHeader>
    );
};

/* Styles */
const SHeader = styled.header<SSectionProps>`
    --header-height: 90px;

    position: sticky;
    top: 0;
    grid-area: header;
    height: var(--header-height);
    background-color: var(--color-2);
    color: white;

    /* Overlay */
    &:before {
        position: fixed;
        display: ${p => (p.$isOpened ? 'block' : 'none')};
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${p => (p.$isOpened ? 'rgba(0, 0, 0, 0.6)' : 'transparent')};
        z-index: -1;
    }

    & .header-section {
        display: grid;
        grid-auto-flow: row;
        grid-template-columns: auto auto auto;
        padding: 0 40px;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        height: 100%;
        border-bottom: 1px solid #333333;
        max-width: 100%;

        ${media.lessThan('tablet')`
            padding: 0 24px;
        `}

        ${media.greaterThan('mobile')`
            max-width: 689px;
        `}

        ${media.greaterThan('tablet')`
            max-width: 1110px;
        `}

        & svg {
            cursor: pointer;

            &:hover {
                & path,
                & rect {
                    transition: fill 300ms ease;
                    fill: var(--color-6);
                }
            }
        }

        & nav {
            grid-area: nav;

            & ul {
                display: flex;
                gap: 34px;

                & li {
                    & a {
                        font-size: 13px;
                        font-weight: 700;
                        line-height: 25px;
                        letter-spacing: 2px;
                        transition: color 300ms ease;

                        &:hover {
                            color: var(--color-6);
                        }
                    }
                }
            }
        }
    }
`;

/* Types */
interface SSectionProps {
    $isOpened: boolean;
}
