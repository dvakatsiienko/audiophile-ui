/* Core */
import { useRouter } from 'next/router';
import Image, { type StaticImageData } from 'next/future/image';
import styled from 'styled-components';

/* Components */
import {
    ActionButton, H6, center, media, useFromToMQ
} from '@/ui-kit';

/* Instruments */
import headphoneDesktopImg from './img/headphone-desktop.png';
import headphoneMobileImg from './img/headphone-mobile.png';
import speakerDesktopImg from './img/speaker-desktop.png';
import speakerMobileImg from './img/speaker-mobile.png';
import earphoneDesktopImg from './img/earphone-desktop.png';
import earphoneMobileImg from './img/earphone-mobile.png';
import type { Route } from '@/types';

export const CardNav = (props: CardNavProps) => {
    const router = useRouter();
    const isMobile = useFromToMQ({ from: 'MIN', to: 'tablet' });

    const navigate = (route: Route) => {
        router.push(route);
        props.afterNavigate?.();
    };

    let headphoneImg = headphoneDesktopImg;
    if (isMobile) headphoneImg = headphoneMobileImg;

    let speakerImg = speakerDesktopImg;
    if (isMobile) speakerImg = speakerMobileImg;

    let earphoneImg = earphoneDesktopImg;
    if (isMobile) earphoneImg = earphoneMobileImg;

    return (
        <Ul>
            <CardLink
                alt = 'headphone image'
                imgHeight = { 160 }
                imgSrc = { headphoneImg }
                imgWidth = { 124 }
                title = 'Headphones'
                onPointerUp = { () => navigate('/headphones') }
            />
            <CardLink
                alt = 'speaker image'
                imgSrc = { speakerImg }
                title = 'Speakers'
                onPointerUp = { () => navigate('/speakers') }
            />
            <CardLink
                alt = 'earphone image'
                imgSrc = { earphoneImg }
                title = 'Earphones'
                onPointerUp = { () => navigate('/earphones') }
            />
        </Ul>
    );
};
CardNav.defaultProps = {
    afterNavigate: () => null,
};

const CardLink = (props: CardLinkProps) => {
    return (
        <li onPointerUp = { props.onPointerUp }>
            <Image
                alt = { props.alt }
                height = { typeof props.imgSrc === 'string' ? props.imgHeight : undefined }
                src = { props.imgSrc }
                width = { typeof props.imgSrc === 'string' ? props.imgWidth : undefined }
            />
            <H6>{props.title}</H6>
            <ActionButton size = 'small' variant = 'inline'>
                {props.buttonText}
            </ActionButton>
        </li>
    );
};
CardLink.defaultProps = {
    buttonText: 'Shop',
    imgHeight:  100,
    imgWidth:   100,
};

/* Styles */
const Ul = styled.ul`
    display: flex;
    gap: 30px;
    width: 100%;

    & li {
        ${center};

        ${H6} {
            color: #000;
        }

        position: relative;
        justify-content: end;
        gap: 15px;
        width: 100%;
        height: 200px;
        padding-bottom: 24px;
        background-color: var(--color-5);
        cursor: pointer;
        transition: box-shadow 300ms ease;

        &:hover {
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

            & button {
                color: var(--color-6);
            }
        }

        & > img {
            filter: drop-shadow(0px 40px 32px rgba(0, 0, 0, 0.5));
            margin-bottom: 30px;
        }
    }

    ${media.lessThan('desktopContent')`
        padding-top: 64px;
        gap: 10px;

        & li {
            height: 165px;
        }
    `}
    ${media.lessThan('tabletContent')`
        flex-direction: column;
        gap: 80px;

        & li {
            gap: 10px;
        }
    `}
`;

/* Types */
interface CardNavProps {
    afterNavigate?: () => void;
}
interface CardLinkProps {
    title: string;
    onPointerUp: React.PointerEventHandler;
    imgSrc: StaticImageData;
    imgWidth?: number;
    imgHeight?: number;
    alt: string;
    buttonText?: string;
}
