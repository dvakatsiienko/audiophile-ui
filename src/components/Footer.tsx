/* Core */
import styled from 'styled-components';

/* Instruments */
import { center } from '@/theme';

export const Footer = () => {
    return <StyledFooter>Footer</StyledFooter>;
};

/* Styles */
const StyledFooter = styled.footer`
    grid-area: footer;
    background-color: ${p => p.theme.palette[ 'color-2' ]};

    ${center}
    color: white;
`;
