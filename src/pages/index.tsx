/* Core */
import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { NextPage, GetStaticProps } from 'next';

/* Components */
import {
    Layout, Header, Hero, Content, Footer
} from '@/components';
import { H1 } from '@/ui';

/* Instruments */
import { fetchPost1 } from '@/api';

const Index: NextPage = () => {
    return (
        <Layout>
            <Header />

            <Hero page = 'home' />

            <Content>
                <H1>{process.env.NODE_ENV?.slice(0, 3)}</H1>
            </Content>

            <Footer />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery([ 'post-1' ], fetchPost1);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};

export default Index;
