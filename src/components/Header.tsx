/* Core */
import styled from 'styled-components';

/* Instruments */
import { center } from '@/theme';

export const Header = () => {
    return <StyledHeader>Header</StyledHeader>;
};

/* Styles */
const StyledHeader = styled.header`
    grid-area: header;
    background-color: ${p => p.theme.colors[ 'color-3' ]};

    ${center}
    color: white;
`;
