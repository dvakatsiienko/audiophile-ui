/* Core */
import Link from 'next/link';
import styled, { type ThemeProps, type DefaultTheme } from 'styled-components';

/* Components */
import { Nav, LogoSvg } from '@/components';
import { Body, media } from '@/ui-kit';
import { FacebookSvg, TwitterSvg, InstagramSvg } from './svg';

export const Footer = () => {
    return (
        <Layout>
            <section className = 'footer-container'>
                <section className = 'footer-logo-nav'>
                    <Link href = '/'>
                        <a>
                            <LogoSvg className = 'footer-logo' />
                        </a>
                    </Link>
                    <Nav className = 'footer-nav' />
                </section>

                <Body>
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team
                    of music lovers and sound specialists who are devoted to helping you get the
                    most out of personal audio. Come and visit our demo facility - we’re open 7 days
                    a week.
                </Body>

                <section className = 'copyright-social'>
                    <Body className = 'copyright'>
                        Copyright {new Date().getFullYear()}. All Rights Reserved
                    </Body>

                    <div className = 'social'>
                        <a
                            href = 'https://www.facebook.com'
                            rel = 'noreferrer noopener'
                            target = '_blank'
                        >
                            <FacebookSvg />
                        </a>

                        <a href = 'https://www.twitter.com' rel = 'noreferrer noopener' target = '_blank'>
                            <TwitterSvg />
                        </a>

                        <a
                            href = 'https://www.instagram.com'
                            rel = 'noreferrer noopener'
                            target = '_blank'
                        >
                            <InstagramSvg />
                        </a>
                    </div>
                </section>

                <div className = 'line' />
            </section>
        </Layout>
    );
};

/* Styles */
const Layout = styled.footer`
    grid-area: footer;
    height: 400px;
    background-color: ${p => p.theme.palette[ 'color-2' ]};
    color: white;

    ${Body} {
        max-width: 540px;
        color: #878787;
    }

    & .footer-container {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 36px;
        height: 100%;
        padding: 75px var(--padding-x) 40px;
        max-width: ${p => p.theme.viewports.desktopContent};
        margin: 0 auto;

        & .footer-logo-nav {
            display: flex;
            justify-content: space-between;
        }

        & .copyright-social {
            display: flex;
            justify-content: space-between;

            & .social {
                display: flex;
                align-items: center;
                gap: 16px;
            }
        }

        & .line {
            position: absolute;
            top: 0;
            left: 0;
            width: 100px;
            height: 4px;
            background-color: var(--color-6);
        }
    }

    ${media.lessThan('desktopContent')`
        & .footer-container {
            & .line {
                left: var(--padding-x-tablet);
            }
        }
    `}

    ${media.lessThan('tablet')`
        & .footer-container {
            max-width: ${(p: ThemeProps<DefaultTheme>) => p.theme.viewports.tabletContent};

            & .line {
                left: var(--padding-x-tablet-content);
            }
        }
    `}
    ${media.lessThan('tabletContent')`
        ${Body} {
            text-align: center;
        }

        height: 650px;

        & .footer-container {
            align-items: center;
            gap: 48px;
            padding: 50px var(--padding-x) 40px;

            & .footer-logo-nav {
                flex-direction: column;
                align-items: center;
                gap: 48px;

                & .footer-nav {
                    & ul {
                        flex-direction: column;
                        gap: 16px;

                        & li {
                            text-align: center;
                        }
                    }
                }
            }

            & .copyright-social {
                flex-direction: column;
                align-items: center;
                gap: 48px;
            }

            & .line {
                left: 0;
                right: 0;
                margin: auto;
            }
        }
    `}
`;
