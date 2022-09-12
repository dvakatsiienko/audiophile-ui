/* Core */
import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

/* Components */
import { Nav, LogoSvg } from '@/components';
import { CardNavModal } from './CardNavModal';

/* Instruments */
import { media, Tablet, FromTo } from '@/ui-kit';
import { ShoppingCartSvg, BurgerMenuSvg } from './svg';

export const Header = () => {
    const [ isOpened, setIsOpened ] = useState(false);

    return (
        <Layout $isOpened = { isOpened }>
            <section className = 'container'>
                <div className = 'content'>
                    <FromTo from = 'zero' to = 'tablet'>
                        <BurgerMenuSvg
                            className = 'burger-menu-svg'
                            data-testid = 'burger-menu-svg'
                            onPointerDown = { () => setIsOpened(prev => !prev) }
                        />
                    </FromTo>

                    <Link href = '/'>
                        <a>
                            <LogoSvg className = 'logo-svg' data-testid = 'logo-svg' />
                        </a>
                    </Link>

                    <Tablet>
                        <Nav />
                    </Tablet>

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

            {isOpened && <CardNavModal setIsOpened = { setIsOpened } />}
        </Layout>
    );
};

/* Styles */
const Layout = styled.header<SLayoutProps>`
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

    & .container {
        height: 100%;
        border-bottom: 1px solid #333333;
        max-width: ${p => p.theme.viewports.desktopContent};
        margin: 0 auto;

        & .content {
            display: grid;
            grid-auto-flow: row;
            grid-template-areas: 'logo nav cart';
            justify-self: center;
            justify-content: space-between;
            align-items: center;
            margin: auto;
            height: 100%;
            width: 100%;

            & svg {
                &.burger-menu-svg {
                    grid-area: burger;
                }
                &.logo-svg {
                    grid-area: logo;
                }
                &.shopping-cart-svg {
                    grid-area: cart;
                }
            }
        }
    }

    ${media.lessThan('desktopContent')`
        & .container {
            & .content {
                padding: 0 12px;
            }
        }
    `}

    ${media.lessThan('tablet')`
        & .container {
            max-width: ${p => p.theme.viewports.tabletContent};

            & .content {
                grid-template-areas: 'burger logo cart';
                padding: 0 40px;
            }
        }
    `}

    ${media.lessThan('tabletContent')`
        & .container {
            max-width: ${p => p.theme.viewports.tabletContent};

            & .content {
                padding: 0 24px;
            }
        }
    `}
`;

/* Types */
interface SLayoutProps {
    $isOpened: boolean;
}
