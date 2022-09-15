/* Core */
import Image from 'next/future/image';
import styled from 'styled-components';

/* Components */
import { H2, Body, center } from '@/ui-kit';

/* Instruments */
import aboutImg from './img/about-img.png';

export const About = () => {
    return (
        <Layout>
            <section className = 'content'>
                <section>
                    <H2>
                        Bringing you the <strong>best</strong> audio gear
                    </H2>

                    <Body>
                        Located at the heart of New York City, Audiophile is the premier store for
                        high end headphones, earphones, speakers, and audio accessories. We have a
                        large showroom and luxury demonstration rooms available for you to browse
                        and experience a wide range of our products. Stop by our store to meet some
                        of the fantastic people who make Audiophile the best place to buy your
                        portable audio equipment.
                    </Body>
                </section>

                <Image alt = 'about image' src = { aboutImg } />
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
        ${center};

        flex-direction: row;
        gap: 125px;
        padding: 0 var(--padding-x);

        & section {
            display: flex;
            flex-direction: column;
            gap: 32px;

            & h2 {
                & strong {
                    color: var(--color-6);
                }
            }
        }
    }
`;
