/* Core */
import styled from 'styled-components';

/* Instruments */
import { center } from '@/theme';

export const Content = (props: ContentTypes) => {
    return <StyledContent>{props.children}</StyledContent>;
};

/* Styles */
const StyledContent = styled.section`
    grid-area: content;
    background-color: ${p => p.theme.palette[ 'color-4' ]};

    ${center}
`;

/* Types */
interface ContentTypes {
    children: React.ReactNode;
}
