/* Core */
import styled from 'styled-components';

/* Components */
import {
    Overline, H1, H2, Body, ActionButton, media, center
} from '@/ui-kit';

/* Instruments */
import type { CategoryName } from '@/types';
import heroImg from './img/hero-img.png';

export const Hero = (props: HeroProps) => {
    return (
        <Layout $page = { props.page }>
            <section className = 'container'>
                <div className = 'content'>
                    {props.page === 'home' && (
                        <>
                            <div className = 'description'>
                                <Overline>NEW PRODUCT</Overline>
                                <H1>XX99 Mark II Headphones</H1>
                                <Body>
                                    Experience natural, lifelike audio and exceptional build quality
                                    made for the passionate music enthusiast.
                                </Body>
                                <ActionButton size = 'large'>SEE PRODUCT</ActionButton>
                            </div>

                            <div className = 'hero-img' />
                        </>
                    )}

                    {props.page === 'category' && <H2>{props.categoryName}</H2>}
                </div>
            </section>
        </Layout>
    );
};
Hero.defaultProps = {
    categoryName: null,
};

/* Styles */
const Layout = styled.article<SLayoutProps>`
    ${center};

    grid-area: hero;
    height: ${p => (p.$page === 'home' ? '630px' : '240px')};
    padding-bottom: ${p => (p.$page === 'home' ? '70px' : 0)};
    background-color: var(--color-2);
    color: var(--color-3);
    overflow: hidden;

    & .container {
        width: 100%;
        max-width: ${p => p.theme.viewports.desktopContent};
        margin: 0 auto;

        & .content {
            ${center}

            position: relative;
            align-items: ${p => (p.$page === 'home' ? 'start' : 'center')};

            ${Body} {
                max-width: 350px;
            }

            ${Overline} {
                color: var(--color-3);
                font-weight: 100;
            }

            & .description {
                ${center}

                align-items: start;
                gap: 24px;
                max-width: 400px;
                z-index: 2;
            }

            & .hero-img {
                position: absolute;
                height: 729px;
                width: 710px;
                background-image: url(${heroImg.src});
                background-size: cover;
                box-shadow: 0 0 50px 50px var(--color-2) inset;
                right: 0;
                top: -200px;
                z-index: 1;
            }
        }
    }

    ${media.lessThan('desktopContent')`
        ${Body} {
            text-align: center;
        }

        & .container {
            max-width: ${p => p.theme.viewports.tabletContent};

            & .content {
                align-items: center;
                max-width: ${p => p.theme.viewports.tabletContent};

                & .description {
                    align-items: center;
                }

                & .hero-img {
                    right: auto;
                }
            }
        }
    `}

    ${media.lessThan<SLayoutProps>('tablet')`
        ${p => p.$page === 'category' && 'height: 100px;'}

        ${H1} {
            font-size: 36px;
            line-height: 40px;
            text-align: center;
        }
    `}
`;

/* Types */
interface HeroProps {
    page: Page;
    categoryName?: CategoryName;
}

interface SLayoutProps {
    $page: Page;
}

type Page = 'home' | 'category';
