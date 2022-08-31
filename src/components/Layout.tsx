/* Core */
import styled from 'styled-components';

export const Layout = (props: LayoutProps) => {
    return <StyledLayout>{props.children}</StyledLayout>;
};

/* Styles */
const StyledLayout = styled.main`
    display: grid;
    grid-template-areas:
        'header'
        'content'
        'footer';
    grid-template-rows: 97px auto 365px;
    min-height: 100vh;
    background-color: ${p => p.theme.colors[ 'color-4' ]};
`;

/* Types */
interface LayoutProps {
    children: React.ReactNode;
}
