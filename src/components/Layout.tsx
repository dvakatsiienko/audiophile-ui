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
        'hero'
        'content'
        'footer';
    grid-template-rows: 90px auto auto 365px;
    min-height: 100vh;
    background-color: ${p => p.theme.palette[ 'color-3' ]};
`;

/* Types */
interface LayoutProps {
    children: React.ReactNode;
}
