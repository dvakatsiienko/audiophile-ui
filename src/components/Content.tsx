/* Core */
import styled from 'styled-components';

/* Instruments */
import { center } from '@/ui-kit';

export const Content = (props: React.PropsWithChildren) => {
    return <Section>{props.children}</Section>;
};

/* Styles */
const Section = styled.section`
    ${center}

    grid-area: content;
    background-color: var(--color-4);
`;
