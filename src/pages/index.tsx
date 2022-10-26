/* Core */
import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { NextPage, GetStaticProps } from 'next';

/* Components */
import { Layout, HomepageContent } from '@/layout';
import {
    Header, Hero, CardNav, About, Footer
} from '@/components';
import { Featured } from '@/features';

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

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};

export default Index;
