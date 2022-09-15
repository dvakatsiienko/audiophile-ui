/* Core */
import styled from 'styled-components';

/* Instruments */
import { center, media } from '@/ui-kit';

export const HomepageContent = (props: HomepageContentProps) => {
    return (
        <Layout>
            <section className = 'container'>{props.children}</section>
        </Layout>
    );
};
HomepageContent.defaultProps = {
    test: true,
};

/* Styles */
const Layout = styled.section`
    background-color: var(--color-4);

    & .container {
        ${center};

        gap: 150px;
        max-width: ${p => p.theme.viewports.desktopContent};
        margin: 0 auto;
        padding: 200px 0;
    }

    ${media.lessThan('desktopContent')`
        padding: 150px var(--padding-x-tablet) 100px;
    `}
`;

/* Types */
type HomepageContentProps = React.PropsWithChildren<{
    test?: boolean;
}>;
