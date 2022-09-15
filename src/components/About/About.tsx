/* Core */
import Image from 'next/future/image';
import styled from 'styled-components';
import path from 'path';

/* Components */
import {
    H2,
    H4,
    Body,
    center,
    media,
    TabletContent,
    FromTo,
    useDesktopContentMQ,
    useTabletContentMQ,
    useFromToMQ
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

    const isMobile = useFromToMQ({ from: 'zero', to: 'tablet' });
    const isTablet = useFromToMQ({ from: 'tablet', to: 'desktopContent' });
    const isDC = useDesktopContentMQ();

    let img = aboutImgDesktop;
    if (isMobile) img = aboutImgMobile;
    if (isTablet) img = aboutImgTablet;

    console.log('🚀 ~ About ~ isMobile, isTablet, isDC ', isMobile, isTablet, isDC);

    return (
        <Layout>
            <section className = 'content'>
                <section>
                    <FromTo from = 'zero' to = 'tabletContent'>
                        <H4>{headingText}</H4>
                    </FromTo>
                    <TabletContent>
                        <H2>{headingText}</H2>
                    </TabletContent>

                    <Body>
                        Located at the heart of New York City, Audiophile is the premier store for
                        high end headphones, earphones, speakers, and audio accessories. We have a
                        large showroom and luxury demonstration rooms available for you to browse
                        and experience a wide range of our products. Stop by our store to meet some
                        of the fantastic people who make Audiophile the best place to buy your
                        portable audio equipment.
                    </Body>
                </section>

                <Image alt = 'about image' src = { img } />
            </section>
        </Layout>
    );
};

/* Styles */
const Layout = styled.article`
    ${Body} {
        color: #00000050;
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
            }
        }

    `}
`;
