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
    padding: 200px 0;
    background-color: var(--color-4);

    & .container {
        ${center};

        max-width: ${p => p.theme.viewports.desktopContent};
        margin: 0 auto;
    }

    ${media.lessThan('desktopContent')`
        padding: 150px var(--padding-x-tablet) 100px;
    `}
`;

/* Types */
type HomepageContentProps = React.PropsWithChildren<{
    test?: boolean;
}>;
