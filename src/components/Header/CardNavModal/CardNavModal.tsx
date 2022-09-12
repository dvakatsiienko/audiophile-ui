/* Core */
import { useEffect, type Dispatch, type SetStateAction } from 'react';
import styled from 'styled-components';

/* Components */
import { CardNav } from '@/components';

/* Instruments */
import { media, center } from '@/ui-kit';

export const CardNavModal = (props: CardNavModalProps) => {
    useEffect(() => {
        const handleKeypress = (e: KeyboardEvent) => {
            if (e.key === 'Escape') props.setIsOpened(false);
        };
        window.addEventListener('keyup', handleKeypress);

        return () => window.removeEventListener('keyup', handleKeypress);
    }, []);

    return (
        <Container data-testid = 'card-nav-modal'>
            <CardNav afterNavigate = { () => props.setIsOpened(false) } />
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
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

    // TODO review UI/UX
    ${media.lessThan('tablet')`
        height: auto;
        min-height: 740px;
        padding: 85px 0 35px;
    `}
`;

/* Types */
interface CardNavModalProps {
    setIsOpened: SetIsOpened;
}

export type SetIsOpened = Dispatch<SetStateAction<boolean>>;
