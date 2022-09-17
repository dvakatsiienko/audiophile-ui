/* Core */
import { useQuery } from '@tanstack/react-query';
import Image from 'next/future/image';
import styled from 'styled-components';

/* Components */
import {
    H1, H4, Body, ActionButton, useFromToMQ, media
} from '@/ui-kit';

/* Instruments */
import { fetchSpeakers, fetchEarphones, fetchCategories } from '@/api';
import { getImgUrl } from '@/utils';
import speaker1DesktopImg from './img/speaker-1-desktop-img.png';
import speaker1TabletImg from './img/speaker-1-tablet-img.png';
import speaker1MobileImg from './img/speaker-1-mobile-img.png';
import speaker2DesktopImg from './img/speaker-2-desktop-img.png';
import speaker2TabletImg from './img/speaker-2-tablet-img.png';
import speaker2MobileImg from './img/speaker-2-mobile-img.png';
import earphoneDesktopImg from './img/earphone-desktop-img.png';
import earphoneTabletImg from './img/earphone-tablet-img.png';
import earphoneMobileImg from './img/earphone-mobile-img.png';

export const Featured = () => {
    const speakersQuery = useQuery([ 'speakers' ], fetchSpeakers);
    const earphonesQuery = useQuery([ 'earphones' ], fetchEarphones);
    // const categoriesQuery = useQuery([ 'categrories' ], fetchCategories);

    const speaker1 = speakersQuery.data?.payload?.products?.at(1);
    const speaker2 = speakersQuery.data?.payload?.products?.at(0);
    const earphone = earphonesQuery.data?.payload?.products?.at(0);

    const isMobile = useFromToMQ({ from: 'MIN', to: 'tablet' });
    const isTablet = useFromToMQ({ from: 'tablet', to: 'desktopContent' });

    // console.log('speakers', speakersQuery.data?.data);
    // console.log('earphones', earphonesQuery.data?.data);
    // console.log('earphonesQuery', earphonesQuery?.data?.data);
    // console.log('categoriesQuery', categoriesQuery?.data?.data);

    let speaker1Img = speaker1DesktopImg;
    if (isMobile) speaker1Img = speaker1MobileImg;
    if (isTablet) speaker1Img = speaker1TabletImg;

    let speaker2Img = speaker2DesktopImg;
    if (isMobile) speaker2Img = speaker2MobileImg;
    if (isTablet) speaker2Img = speaker2TabletImg;

    let earphoneImg = earphoneDesktopImg;
    if (isMobile) earphoneImg = earphoneMobileImg;
    if (isTablet) earphoneImg = earphoneTabletImg;

    const xxx = getImgUrl(speaker1?.previewImage ?? '');
    // console.log('🚀 ~ Featured ~ speaker1Img', xxx);

    return (
        <Layout>
            <section className = 'featured-1'>
                <Image alt = 'speaker 1 image' src = { speaker1Img } />

                <section>
                    <H1>{speaker1?.name}</H1>
                    <Body>{speaker1?.description}</Body>
                    <ActionButton size = 'large' variant = 'primary-black'>
                        SEE PRODUCT
                    </ActionButton>
                </section>

                <b className = 'circle-1' />
                <b className = 'circle-2' />
                <b className = 'circle-3' />
            </section>

            <section className = 'featured-2'>
                <Image fill alt = 'speaker 2 image' src = { speaker2Img } />

                <section>
                    <H4>{speaker2?.name}</H4>
                    <ActionButton size = 'large' variant = 'secondary-transparent'>
                        SEE PRODUCT
                    </ActionButton>
                </section>
            </section>

            <section className = 'featured-3'>
                <Image alt = 'speaker 2 image' src = { earphoneImg } />

                <section>
                    <H4>{earphone?.name.toLowerCase().replace('wireless', '')}</H4>
                    <ActionButton size = 'large' variant = 'secondary'>
                        SEE PRODUCT
                    </ActionButton>
                </section>
            </section>
        </Layout>
    );
};

/* Styles */
const Layout = styled.article`
    display: flex;
    flex-direction: column;
    gap: 48px;
    width: 100%;

    & section {
        border-radius: 8px;
    }

    & .featured-1 {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: end;
        height: 560px;
        padding-right: 100px;
        background-color: var(--color-6);
        color: var(--color-3);
        overflow: hidden;
        z-index: 1;

        & section {
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 350px;
            z-index: 1;
        }

        & button {
            width: max-content;
        }

        & img {
            position: absolute;
            bottom: 0;
            left: 120px;
            z-index: 1;
        }

        & b {
            position: absolute;
            border: 1px solid var(--color-11);
            border-radius: 50%;

            &.circle-1 {
                --size: 472px;

                width: var(--size);
                height: var(--size);
                left: calc((-1 * var(--size) / 2 + 330px));
                bottom: calc((-1 * var(--size) / 2) + 100px);
            }

            &.circle-2 {
                --size: 542px;

                width: var(--size);
                height: var(--size);
                left: calc((-1 * var(--size) / 2 + 330px));
                bottom: calc((-1 * var(--size) / 2) + 100px);
            }

            &.circle-3 {
                --size: 944px;

                width: var(--size);
                height: var(--size);
                left: calc((-1 * var(--size) / 2 + 330px));
                bottom: calc((-1 * var(--size) / 2) + 100px);
            }
        }
    }

    & .featured-2 {
        position: relative;
        height: 320px;
        padding-left: 100px;

        & section {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            gap: 32px;
            z-index: 2;
            height: 100%;
        }

        & img {
            z-index: 1;
            object-fit: cover;
            object-position: 100% 100%;
        }
    }

    & .featured-3 {
        --gap: 30px;
        --width: 540px;

        display: grid;
        grid-auto-flow: row;
        grid-template-columns: 540px minmax(340px, 540px);
        grid-template-rows: 320px;
        grid-template-areas: 'img content';
        gap: var(--gap);

        & img {
            grid-area: img;
            width: 540px;
            height: 320px;
        }

        & section {
            grid-area: content;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            gap: 32px;
            padding-left: 100px;
            background-color: var(--color-5);
        }
    }

    ${media.lessThan('desktopContent')`
        gap: 32px;

        & .featured-1 {
            justify-content: center;
            align-items: end;
            height: 720px;
            padding: 0 0 64px;

            & section {
                align-items: center;

                ${H1}, ${Body} { text-align: center; }
            }

            & img {
                top: 50px;
                right: 0;
                bottom: initial;
                left: 0;
                margin: 0 auto;
            }

            & b {
                &.circle-1, &.circle-2, &.circle-3 {
                    top: calc((-1 * var(--size) / 2) + 175px);
                    right: 0;
                    bottom: initial;
                    left: 0;
                    margin: 0 auto;
                }

                &.circle-3 {
                    right: -1000px;
                    left: -1000px;
                }
            }
        }

        & .featured-2 {
            padding-left: 64px;
        }

        & .featured-3 {
            grid-template-columns: 340px minmax(auto, 100%);
            gap: 10px;

            & img {
                width: 339px;
                height: 320px;
            }

            & section { padding-left: 40px; }
        }
    `}

    ${media.lessThan('tabletContent')`
        gap: 24px;

        & .featured-1 {
            justify-content: center;
            align-items: end;
            height: 600px;
            padding: 0 24px 56px;

            & section {
                align-items: center;

                ${H1} {
                    font-size: 36px;
                    line-height: 40px;
                }
            }

            & img {
                top: 45px;
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right: auto;
            }

            & b {
                &.circle-1,
                &.circle-2,
                &.circle-3 { top: calc((-1 * var(--size) / 2) + 155px); }

                &.circle-1 { --size: 279px; }
                &.circle-2 { --size: 320px; }
                &.circle-3 { --size: 558px; }
            }
        }

        & .featured-2 {
            padding-left: 24px;
        }

        & .featured-3 {
            grid-auto-flow: column;
            grid-template-columns: auto;
            grid-template-rows: 200px 200px;
            grid-template-areas:
                'img'
                'content';
            gap: 24px;

            & img {
                justify-self: center;
                width: 327px;
                height: 200px;
            }

            & section { padding-left: 24px; }
        }
    `}
`;
