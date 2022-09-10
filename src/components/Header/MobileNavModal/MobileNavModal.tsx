/* Core */
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

/* Components */
import { ActionButton, H6, media } from '@/ui';

/* Instruments */
import { center } from '@/theme';
import type { Route } from '@/types';

export const MobileNavModal = (props: MobileNavModalProps) => {
    const router = useRouter();

    useEffect(() => {
        const handleKeypress = (e: KeyboardEvent) => {
            if (e.key === 'Escape') props.setIsOpened(false);
        };
        window.addEventListener('keydown', handleKeypress);

        return () => window.removeEventListener('keydown', handleKeypress);
    }, []);

    const navigate = (route: Route) => {
        router.push(route);
        props.setIsOpened(false);
    };

    return (
        <Section>
            <ul>
                <li onPointerDown = { () => navigate('/headphones') }>
                    <Img />
                    <H6>Headphones</H6>
                    <ActionButton size = 'small' variant = 'inline'>
                        Shop
                    </ActionButton>
                </li>

                <li onPointerDown = { () => navigate('/speakers') }>
                    <Img />
                    <H6>Speakers</H6>
                    <ActionButton size = 'small' variant = 'inline'>
                        Shop
                    </ActionButton>
                </li>

                <li onPointerDown = { () => navigate('/earphones') }>
                    <Img />
                    <H6>Earphones</H6>
                    <ActionButton size = 'small' variant = 'inline'>
                        Shop
                    </ActionButton>
                </li>
            </ul>
        </Section>
    );
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
        padding: 60px 0 35px;

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

export type SetIsOpened = React.Dispatch<React.SetStateAction<boolean>>;

/* Types */
interface MobileNavModalProps {
    setIsOpened: SetIsOpened;
}
