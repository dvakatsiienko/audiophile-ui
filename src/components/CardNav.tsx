/* Core */
import { useRouter } from 'next/router';
import styled from 'styled-components';

/* Components */
import {
    ActionButton, H6, center, media
} from '@/ui-kit';

/* Types */
import type { Route } from '@/types';

export const CardNav = (props: CardNavProps) => {
    const router = useRouter();

    const navigate = (route: Route) => {
        router.push(route);
        props.afterNavigate?.();
    };

    return (
        <Ul>
            <CardLink title = 'Headphones' onPointerUp = { () => navigate('/headphones') } />
            <CardLink title = 'Speakers' onPointerUp = { () => navigate('/speakers') } />
            <CardLink title = 'Earphones' onPointerUp = { () => navigate('/earphones') } />
        </Ul>
    );
};
CardNav.defaultProps = {
    afterNavigate: () => null,
};

const CardLink = (props: CardLinkProps) => {
    return (
        <li onPointerUp = { props.onPointerUp }>
            <Img />
            <H6>{props.title}</H6>
            <ActionButton size = 'small' variant = 'inline'>
                {props.buttonText}
            </ActionButton>
        </li>
    );
};
CardLink.defaultProps = {
    buttonText: 'Shop',
};

/* Styles */
const Ul = styled.ul`
    display: flex;
    gap: 30px;
    width: 100%;

    & li {
        ${center};

        position: relative;
        justify-content: end;
        gap: 15px;
        width: 100%;
        height: 200px;
        padding-bottom: 30px;
        background-color: var(--color-5);
        cursor: pointer;
        transition: box-shadow 300ms ease;

        &:hover {
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

            & button {
                color: var(--color-6);
            }
        }

        ${H6} {
            color: #000;
        }
    }

    ${media.lessThan('desktopContent')`
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

const Img = styled.div`
    --img-height: 140px;

    position: absolute;
    top: calc(0px - var(--img-height) / 2);
    width: var(--img-height);
    height: var(--img-height);
    background-color: #000;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    border-radius: 50%;
`;

/* Types */
interface CardNavProps {
    afterNavigate?: () => void;
}
interface CardLinkProps {
    title: string;
    buttonText?: string;
    onPointerUp: React.PointerEventHandler;
}
