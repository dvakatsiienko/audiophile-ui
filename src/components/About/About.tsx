/* Core */
import Image from 'next/future/image';
import styled from 'styled-components';

/* Components */
import {
    H2, H4, Body, media, FromTo, useFromToMQ
} from '@/ui-kit';

/* Instruments */
import aboutImgDesktop from './img/about-img-desktop.png';
import aboutImgTablet from './img/about-img-tablet.png';
import aboutImgMobile from './img/about-img-mobile.png';

export const About = () => {
    const headingText = (
        <>
            Bringing you the <strong>best</strong> audio gear
        </>
    );

    const isMobile = useFromToMQ({ from: 'MIN', to: 'tablet' });
    const isTablet = useFromToMQ({ from: 'tablet', to: 'desktopContent' });

    let img = aboutImgDesktop;
    if (isMobile) img = aboutImgMobile;
    if (isTablet) img = aboutImgTablet;

    return (
        <Layout>
            <section className = 'content'>
                <section>
                    <FromTo from = 'MIN' to = 'tabletContent'>
                        <H4>{headingText}</H4>
                    </FromTo>
                    <FromTo from = 'tabletContent'>
                        <H2>{headingText}</H2>
                    </FromTo>

                    <Body>
                        Located at the heart of New York City, Audiophile is the premier store for
                        high end headphones, earphones, speakers, and audio accessories. We have a
                        large showroom and luxury demonstration rooms available for you to browse
                        and experience a wide range of our products. Stop by our store to meet some
                        of the fantastic people who make Audiophile the best place to buy your
                        portable audio equipment.
                    </Body>
                </section>

                <Image alt = 'about image' placeholder = 'blur' quality = { 100 } src = { img } />
            </section>
        </Layout>
    );
};

/* Styles */
const Layout = styled.article`
    ${Body} {
        color: var(--color-8);
    }

    & .content {
        display: grid;
        grid-auto-flow: column;
        grid-template-areas: 'content image';
        gap: 125px;
        padding: 0 var(--padding-x);

        & section {
            position: relative;

            grid-area: content;
            display: flex;
            flex-direction: column;
            gap: 32px;

            & h2,
            & h4 {
                & strong {
                    color: var(--color-6);
                }
            }
        }

        & img {
            grid-area: image;
        }
    }

    ${media.lessThan('desktopContent')`
        ${Body}, ${H2}, ${H4} {
            text-align: center;
        }

        & .content {
            grid-auto-flow: row;
            grid-template-areas:
            'image'
            'content';
            gap: 60px;

            & img {
                justify-self: center;

                --width: 682px;
                --height: 293px;

                max-width: var(--width);
                height: var(--height);
                aspect-ratio: auto var(--width) / var(--height);
            }
        }
    `}

    ${media.lessThan('tabletContent')`
        & .content {
            & img {
                --width: 320px;
                --height: 293px;

                width: var(--width);
                height: var(--height);
                aspect-ratio: auto var(--width) / var(--height);
            }
        }
    `}
`;
