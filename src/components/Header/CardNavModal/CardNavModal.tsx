/* Core */
import React, {
    useEffect,
    useRef,
    type Dispatch,
    type SetStateAction,
    type RefObject
} from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

/* Components */
import { CardNav } from '@/components';

/* Instruments */
import { media, center, tablet } from '@/ui-kit';
import { useClickOutside } from '@/utils';

export const CardNavModal = (props: CardNavModalProps) => {
    const closeModal = () => props.setIsOpened(false);

    const ref = useRef() as RefObject<HTMLElement>;
    useClickOutside(ref, closeModal, props.isOpened);

    // ? Close modal if it was open in mobile viewport and manually increased viewport sizee
    useMediaQuery({ maxWidth: tablet }, void 0, matches => !matches && props.setIsOpened(false));

    useEffect(() => {
        const handleKeypress = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };
        window.addEventListener('keyup', handleKeypress);

        return () => window.removeEventListener('keyup', handleKeypress);
    }, []);

    return (
        <Container data-testid = 'card-nav-modal' ref = { ref }>
            <CardNav afterNavigate = { closeModal } />
        </Container>
    );
};

/* Styles */
const Container = styled.section`
    ${center}

    position: relative;
    background-color: #fff;
    width: 100%;
    height: 340px;
    padding: 0 var(--padding-x);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

    // TODO review UI/UX
    ${media.lessThan('tabletContent')`
        height: auto;
        min-height: 740px;
    `}
`;

/* Types */
interface CardNavModalProps {
    isOpened: boolean;
    setIsOpened: SetIsOpened;
}

export type SetIsOpened = Dispatch<SetStateAction<boolean>>;
