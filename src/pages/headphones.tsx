/* Core */
import { useQuery, dehydrate, QueryClient } from '@tanstack/react-query';
import type { NextPage, GetStaticProps } from 'next';

/* Components */
import {
    Layout, Header, Content, Footer, H1, Headphone
} from '@/components';

/* Instruments */
import { fetchHeadphones } from '@/api';
import img from '@/pages/api/images/headphones/x99-mark-II-hero.png';

const HeadphonesPage: NextPage = () => {
    const { data: headphoneList } = useQuery([ 'headphone-list' ], fetchHeadphones);

    const headephoneListJSX = headphoneList?.map(headphone => {
        return <Headphone img = { img } key = { headphone.id } name = { headphone.name } />;
    });

    return (
        <Layout>
            <Header />
            <Content>
                <H1>Headphones</H1>

                <br />

                <ul>{headephoneListJSX}</ul>
            </Content>
            <Footer />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery([ 'headphone-list' ], fetchHeadphones);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};

export default HeadphonesPage;
