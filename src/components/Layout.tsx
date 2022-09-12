/* Core */
import styled from 'styled-components';

export const Layout = (props: React.PropsWithChildren) => {
    return <StyledLayout>{props.children}</StyledLayout>;
};

/* Styles */
const StyledLayout = styled.main`
    display: grid;
    grid-template-areas:
        'header'
        'hero'
        'content'
        'footer';
    grid-template-rows: auto auto auto auto;
    min-height: 100vh;
    background-color: var(--color-2);
`;
