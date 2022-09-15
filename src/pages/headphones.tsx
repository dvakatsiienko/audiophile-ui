/* Core */
import { useQuery, dehydrate, QueryClient } from '@tanstack/react-query';
import type { NextPage, GetStaticProps } from 'next';

/* Components */
import { Layout, HomepageContent } from '@/layout';
import {
    Header, Hero, CardNav, Footer, About, Headphone
} from '@/components';

/* Instruments */
import { fetchHeadphonesTest } from '@/api';
import img from '@/pages/api/images/headphones/x99-mark-II-hero.png';

const HeadphonesPage: NextPage = () => {
    const { data: headphoneList } = useQuery([ 'headphone-list' ], fetchHeadphonesTest);

    const headephoneListJSX = headphoneList?.map(headphone => {
        return <Headphone img = { img } key = { headphone.id } name = { headphone.name } />;
    });

    return (
        <Layout>
            <Header />

            <Hero categoryName = 'headphones' page = 'category' />

            <HomepageContent>
                <ul
                    css = { `
                        margin-bottom: 150px;
                    ` }
                >
                    {headephoneListJSX}
                </ul>

                <CardNav />

                <About />
            </HomepageContent>

            <Footer />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery([ 'headphone-list' ], fetchHeadphonesTest);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};

export default HeadphonesPage;
