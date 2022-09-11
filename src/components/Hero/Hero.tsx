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
            <section className = 'content'>
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
    background-color: var(--color-2);
    color: var(--color-3);
    overflow: hidden;

    & .content {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: ${p => (p.$page === 'home' ? 'space-between' : 'center')};
        margin: auto;

        ${media.greaterThan('mobile')`width: 689px;`}
        ${media.lessThan('tablet')`justify-content: center;`}
        ${media.greaterThan('tablet')`width: 1110px;`}

        ${Body} {
            max-width: 350px;

            ${media.lessThan('tablet')`text-align: center;`}
        }

        ${Overline} {
            color: var(--color-3);
            font-weight: 100;
        }

        & .description {
            ${center}
            align-items: flex-start;
            gap: 24px;
            max-width: 400px;
            z-index: 2;

            ${media.lessThan('tablet')`align-items: center;`}
        }

        & .hero-img {
            position: absolute;
            height: 729px;
            width: 710px;
            background-image: url(${heroImg.src});
            background-size: cover;
            box-shadow: 0 0 50px 50px var(--color-2) inset;
            right: 0;
            top: -250px;
            z-index: 1;
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
