/* Core */
import styled from 'styled-components';

/* Instruments */
import { center, media } from '@/ui-kit';

export const HomepageContent = (props: HomepageContentProps) => {
    return (
        <Layout>
            <section className = 'homepage-layout-container'>{props.children}</section>
        </Layout>
    );
};
HomepageContent.defaultProps = {
    test: true,
};

/* Styles */
const Layout = styled.section`
    background-color: var(--color-4);

    & .homepage-layout-container {
        ${center};

        gap: 160px;
        max-width: ${p => p.theme.viewports.desktopContent};
        margin: 0 auto;
        padding: 192px var(--padding-x) 200px;
    }

    ${media.lessThan('desktopContent')`
        & .homepage-layout-container {
            gap: 100px;
            padding: 144px var(--padding-x) 100px;
        }
    `}

    ${media.lessThan('tabletContent')`
        & .homepage-layout-container {
            gap: 80px;
            padding: 80px var(--padding-x);
        }
    `}
`;

/* Types */
type HomepageContentProps = React.PropsWithChildren<{
    test?: boolean;
}>;
