/* Core */
import { useQuery } from '@tanstack/react-query';
import Image from 'next/future/image';
import styled from 'styled-components';

/* Components */
import {
    H1, H4, Body, ActionButton
} from '@/ui-kit';

/* Instruments */
import { fetchSpeakers, fetchEarphones } from '@/api';
import { getImgUrl } from '@/utils';
import speaker1Img from './img/speaker-1-highlight-img.png';
import speaker2Img from './img/speaker-2-highlight-img.png';
import earphoneImg from './img/earphone-highlight-img.png';

// audiophile-express.herokuapp.com/assets/cart/preview-yx1-earphones.jpg

export const Featured = () => {
    const speakersQuery = useQuery([ 'speakers' ], fetchSpeakers);
    const earphonesQuery = useQuery([ 'earphones' ], fetchEarphones);

    const speaker1 = speakersQuery.data?.category?.products?.at(1);
    const speaker2 = speakersQuery.data?.category?.products?.at(0);
    const earphone = earphonesQuery.data?.category.products?.at(0);

    // console.log('speakers', speakersQuery.data?.category?.products);
    // console.log('earphones', earphonesQuery.data?.category?.products);
    // console.log('earphonesQuery', earphonesQuery?.data?.category.products);

    const xxx = getImgUrl(speaker1?.previewImage ?? '');
    // console.log('🚀 ~ Featured ~ speaker1Img', xxx);

    return (
        <Layout>
            <section className = 'speaker-1'>
                <Image alt = 'speaker 1 image' className = 'image' src = { speaker1Img } />

                <section className = 'content'>
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

            <section className = 'speaker-2'>
                <Image fill alt = 'speaker 2 image' className = 'image' src = { speaker2Img } />

                <section className = 'content'>
                    <H4>{speaker2?.name}</H4>
                    <ActionButton size = 'large' variant = 'secondary-transparent'>
                        SEE PRODUCT
                    </ActionButton>
                </section>
            </section>

            <section className = 'earphone'>
                <Image alt = 'speaker 2 image' className = 'image' src = { earphoneImg } />

                <section className = 'content'>
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

    & .speaker-1 {
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

        & .content {
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

    & .speaker-2 {
        position: relative;
        height: 320px;
        padding-left: 100px;

        & .content {
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
        }
    }

    & .earphone {
        --gap: 30px;
        --width: 540px;

        display: flex;
        justify-content: space-between;
        gap: var(--gap);

        & .content,
        & img {
            height: 320px;
            min-width: 540px;
        }

        & .content {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            gap: 32px;
            padding-left: 100px;
            background-color: var(--color-5);
            border-radius: 8px;
        }
    }
`;
