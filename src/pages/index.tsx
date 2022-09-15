/* Core */
import { useQuery, dehydrate, QueryClient } from '@tanstack/react-query';
import type { NextPage, GetStaticProps } from 'next';

/* Components */
import { Layout, HomepageContent } from '@/layout';
import {
    Header, Hero, CardNav, About, Footer
} from '@/components';

/* Instruments */
import {
    fetchPost1
    // fetchCategories,
    // fetchSpeakers,
    // fetchEarphones,
    // fetchProducts,
    // fetchHeadphones
} from '@/api';

const Index: NextPage = () => {
    // const categoriesQuery = useQuery([ 'categories' ], fetchCategories);
    // const headphonesQuery = useQuery([ 'headphones' ], fetchHeadphones);
    // const speakersQuery = useQuery([ 'speakers' ], fetchSpeakers);
    // const earphonesQuery = useQuery([ 'earphones' ], fetchEarphones);

    // console.log('categories', categoriesQuery.data?.categories);
    // console.log('speakers', speakersQuery.data?.category?.products);
    // console.log('earphones', earphonesQuery.data?.category?.products);

    return (
        <Layout>
            <Header />

            <Hero page = 'home' />

            <HomepageContent>
                <CardNav />

                <About />
            </HomepageContent>

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
