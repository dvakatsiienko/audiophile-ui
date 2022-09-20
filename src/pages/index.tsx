/* Core */
import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { NextPage, GetStaticProps } from 'next';

/* Components */
import { Layout, HomepageContent } from '@/layout';
import {
    Header, Hero, CardNav, About, Footer
} from '@/components';
import { Featured } from '@/features';

/* Instruments */
import { fetchCategories } from '@/api';

const Index: NextPage = () => {
    return (
        <Layout>
            <Header />

            <Hero page = 'home' />

            <HomepageContent>
                <CardNav />

                <Featured />

                <About />
            </HomepageContent>

            <Footer />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery([ 'categories' ], fetchCategories);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};

export default Index;
