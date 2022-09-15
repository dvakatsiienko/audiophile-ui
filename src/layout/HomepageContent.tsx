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

        gap: 150px;
        max-width: ${p => p.theme.viewports.desktopContent};
        margin: 0 auto;
        padding: 200px var(--padding-x);
    }

    ${media.lessThan('desktopContent')`
        & .homepage-layout-container {
            padding: 150px var(--padding-x) 100px;
        }
    `}
`;

/* Types */
type HomepageContentProps = React.PropsWithChildren<{
    test?: boolean;
}>;
