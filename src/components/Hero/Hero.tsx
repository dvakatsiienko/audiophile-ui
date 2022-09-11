/* Core */
import styled from 'styled-components';

/* Components */
import {
    Overline, H1, H2, Body, ActionButton, media
} from '@/ui';

/* Instruments */
import { center } from '@/theme';
import heroImg from './img/hero-img.png';

export const Hero = (props: HeroProps) => {
    return (
        <Article $page = { props.page }>
            <section className = 'hero-container'>
                <div className = 'hero-content'>
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
        </Article>
    );
};
Hero.defaultProps = {
    categoryName: null,
};

/* Styles */
const Article = styled.article<SArticleProps>`
    ${center};

    grid-area: hero;
    height: ${p => (p.$page === 'home' ? '630px' : '240px')};
    padding-bottom: ${p => (p.$page === 'home' ? '70px' : 0)};
    background-color: var(--color-2);
    color: var(--color-3);
    overflow: hidden;

    ${p => p.$page === 'category' && media.lessThan('tabletContent')`height: 100px;`}

    & .hero-container {
        width: 100%;
        max-width: ${p => p.theme.viewports.desktopContent};
        margin: 0 auto;

        ${media.lessThan('desktopContent')`max-width: ${p => p.theme.viewports.tabletContent};`}

        & .hero-content {
            ${center}

            position: relative;
            align-items: start;

            ${media.lessThan('desktopContent')`
                    align-items: center;
                    max-width: ${p => p.theme.viewports.tabletContent};
            `}

            ${H1} {
                ${media.lessThan('tabletContent')`
                    font-size: 36px;
                    line-height: 40px;
                    text-align: center;
                `}
            }

            ${Body} {
                max-width: 350px;

                ${media.lessThan('desktopContent')`text-align: center;`}
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

                ${media.lessThan('desktopContent')`
                    align-items: center;
                `}
            }

            & .hero-img {
                position: absolute;
                height: 729px;
                width: 710px;
                background-image: url(${heroImg.src});
                background-size: cover;
                box-shadow: 0 0 50px 50px var(--color-2) inset;
                /* right: 0; */
                top: -200px;
                z-index: 1;

                ${media.lessThan('tabletContent')`
                /* left: 0 */
                    /* top: 0; */
                    /* right: 50%; */
                    /* bottom: 0; */
                    /* left: 50%; */
                `}
            }
        }
    }
`;

/* Types */
interface HeroProps {
    page: Page;
    categoryName?: CategoryName;
}

interface SArticleProps {
    $page: Page;
}

type Page = 'home' | 'category';
type CategoryName = 'headphones' | 'speakers' | 'earphones';
