/* Core */
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

/* Components */
import { ActionButton, H6 } from '@/ui';

/* Instruments */
import { center } from '@/theme';
import type { Route } from '@/types';

export const MobileNav = (props: MobileNavProps) => {
    const router = useRouter();

    useEffect(() => {
        const handleKeypress = (e: KeyboardEvent) => {
            if (e.key === 'Escape') props.setIsOpened(false);
        };
        window.addEventListener('keydown', handleKeypress);

        return () => window.removeEventListener('keydown', handleKeypress);
    }, []);

    const navigate = (route: Route) => {
        console.log(route);
        router.push(route);
        props.setIsOpened(false);
    };

    return (
        <Section>
            <ul>
                <li onClick = { () => navigate('/headphones') }>
                    <Img />
                    <H6>Headphones</H6>
                    <ActionButton variant = 'inline'>Shop</ActionButton>
                </li>

                <li onClick = { () => navigate('/speakers') }>
                    <Img />
                    <H6>Speakers</H6>
                    <ActionButton variant = 'inline'>Shop</ActionButton>
                </li>

                <li onClick = { () => navigate('/earphones') }>
                    <Img />
                    <H6>Earphones</H6>
                    <ActionButton variant = 'inline'>Shop</ActionButton>
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

        & li {
            ${center};

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
`;

const Img = styled.div`
    width: 100px;
    height: 100px;
    background-color: #000;
`;

/* Types */
interface MobileNavProps {
    setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}
