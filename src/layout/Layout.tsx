/* Core */
import styled from 'styled-components';

import { media } from '@/ui-kit';

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

    ${media.lessThan('desktop')`--padding-x: var(--padding-x-desktop-content);`}
    ${media.lessThan('desktopContent')`--padding-x: var(--padding-x-tablet);`}
    ${media.lessThan('tablet')`--padding-x: var(--padding-x-tablet-content);`}
    ${media.lessThan('tabletContent')`--padding-x: var(--padding-x-tablet);`}
    ${media.lessThan('tabletContent')`--padding-x: var(--padding-x-mobile);`}
`;
