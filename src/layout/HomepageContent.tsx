/* Core */
import styled from 'styled-components';

/* Instruments */
import { center } from '@/ui-kit';

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

        padding: 0 40px;
        max-width: ${p => p.theme.viewports.desktopContent};
        margin: 0 auto;
    }
`;

/* Types */
type HomepageContentProps = React.PropsWithChildren<{
    test?: boolean;
}>;
