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
    const [ isOpened, setIsOpened ] = useState(false);

    return (
        <SHeader $isOpened = { isOpened }>
            <section className = 'header-container'>
                <div className = 'header-content'>
                    <Tablet>
                        <BurgerMenuSvg
                            className = 'burger-menu-svg'
                            data-testid = 'burger-menu-svg'
                            onPointerDown = { () => setIsOpened(prev => !prev) }
                        />
                    </Tablet>

                    <Link href = '/'>
                        <a>
                            <LogoSvg className = 'logo-svg' data-testid = 'logo-svg' />
                        </a>
                    </Link>

                    <Desktop>
                        <nav className = 'nav'>
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
                            <ShoppingCartSvg
                                className = 'shopping-cart-svg'
                                data-testid = 'shopping-cart-svg'
                            />
                        </a>
                    </Link>
                </div>
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
    z-index: 3;

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

    & .header-container {
        height: 100%;
        border-bottom: 1px solid #333333;
        max-width: ${p => p.theme.viewports.desktopContent};
        margin: 0 auto;

        ${media.lessThan('desktopContent')`max-width: ${p => p.theme.viewports.tabletContent};`}

        & .header-content {
            display: grid;
            grid-auto-flow: row;
            grid-template-areas: 'logo nav cart';
            justify-self: center;
            justify-content: space-between;
            align-items: center;
            margin: auto;
            height: 100%;
            width: 100%;

            ${media.lessThan('desktopContent')`padding: 0 40px;`}
            ${media.lessThan('tablet')`grid-template-areas: 'burger logo cart';`}
            ${media.lessThan('tabletContent')`padding: 0 24px;`}

            & svg {
                cursor: pointer;

                &.burger-menu-svg {
                    grid-area: burger;
                }
                &.logo-svg {
                    grid-area: logo;
                }
                &.shopping-cart-svg {
                    grid-area: cart;
                }

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
    }
`;

/* Types */
interface SSectionProps {
    $isOpened: boolean;
}
