/* Core */
import Link from 'next/link';
import styled from 'styled-components';

/* Instruments */
import { LogoSvg, ShoppingCartSvg } from './img';

export const Header = () => {
    return (
        <SHeader>
            <section>
                <Link href = '/'>
                    <a>
                        <LogoSvg />
                    </a>
                </Link>

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

                <Link href = '/checkout'>
                    <a>
                        <ShoppingCartSvg />
                    </a>
                </Link>
            </section>
        </SHeader>
    );
};

/* Styles */
const SHeader = styled.header`
    grid-area: header;
    background-color: var(--color-2);
    color: white;
    height: 96px;

    & section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        height: 100%;
        border-bottom: 1px solid #333333;
        width: ${p => p.theme.viewports.desktop};

        & svg {
            cursor: pointer;

            &:hover {
                & path {
                    transition: fill 300ms ease;
                    fill: var(--color-6);
                }
            }
        }

        & nav {
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
