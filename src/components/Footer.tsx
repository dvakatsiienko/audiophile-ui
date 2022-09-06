/* Core */
import styled from 'styled-components';

/* Components */
import { H1 } from '@/components';

/* Instruments */
import { center } from '@/theme';

export const Footer = () => {
    return (
        <StyledFooter>
            <H1>Footer</H1>
        </StyledFooter>
    );
};

/* Styles */
const StyledFooter = styled.footer`
    grid-area: footer;
    background-color: ${p => p.theme.palette[ 'color-2' ]};

    ${center}
    color: white;
`;
