/* Core */
import { useEffect, type Dispatch, type SetStateAction } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

/* Components */
import {
    ActionButton, H6, media, center
} from '@/ui-kit';

/* Instruments */
import type { Route } from '@/types';

export const MobileNavModal = (props: MobileNavModalProps) => {
    const router = useRouter();

    useEffect(() => {
        const handleKeypress = (e: KeyboardEvent) => {
            if (e.key === 'Escape') props.setIsOpened(false);
        };
        window.addEventListener('keyup', handleKeypress);

        return () => window.removeEventListener('keyup', handleKeypress);
    }, []);

    const navigate = (route: Route) => {
        router.push(route);
        props.setIsOpened(false);
    };

    return (
        <Section data-testid = 'mobile-nav-modal'>
            <ul>
                <LinkItem title = 'Headphones' onPointerUp = { () => navigate('/headphones') } />
                <LinkItem title = 'Speakers' onPointerUp = { () => navigate('/speakers') } />
                <LinkItem title = 'Earphones' onPointerUp = { () => navigate('/earphones') } />
            </ul>
        </Section>
    );
};

const LinkItem = (props: LinkItemProps) => {
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
LinkItem.defaultProps = {
    buttonText: 'Shop',
};

/* Styles */
const Section = styled.section`
    ${center}
    --mobile-nav-height: 340px;

    position: relative;
    background-color: #fff;
    width: 100%;
    height: 340px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

    & ul {
        display: flex;
        gap: 10px;

        & li {
            ${center};

            position: relative;
            justify-content: end;
            gap: 10px;
            width: 225px;
            height: 185px;
            padding-bottom: 20px;
            background-color: var(--color-5);
            cursor: pointer;

            &:hover {
                & button {
                    color: var(--color-6);
                }
            }

            ${H6} {
                color: #000;
            }
        }
    }

    ${media.lessThan('tablet')`
        height: auto;
        min-height: 740px;
        padding: 85px 0 35px;

        & ul {
            flex-direction: column;
            gap: 68px;

            & li {
                width: 330px;
            }
        }
    `}
`;

const Img = styled.div`
    position: absolute;
    top: -50px;
    width: 100px;
    height: 100px;
    background-color: #000;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    border-radius: 50%;
`;

/* Types */
interface MobileNavModalProps {
    setIsOpened: SetIsOpened;
}

export type SetIsOpened = Dispatch<SetStateAction<boolean>>;

interface LinkItemProps {
    title: string;
    buttonText?: string;
    onPointerUp: React.PointerEventHandler;
}
