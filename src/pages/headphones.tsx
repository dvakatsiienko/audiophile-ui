/* Core */
import { useQuery, dehydrate, QueryClient } from '@tanstack/react-query';
import NextImage from 'next/future/image';
import type { NextPage, GetStaticProps } from 'next';

/* Components */
import {
    Layout, Header, Content, Footer
} from '@/components';

/* Instruments */
import { fetchHeadphones } from '@/api';
import img from '@/pages/api/images/headphones/x99-mark-II-hero.png';

const HeadphonesPage: NextPage = () => {
    const { data: headphoneList } = useQuery([ 'headphone-list' ], fetchHeadphones);

    console.log(headphoneList);

    const headephoneListJSX = headphoneList?.map(headphone => {
        return (
            <li key = { headphone.id }>
                {headphone.name} <NextImage src = { img } />
            </li>
        );
    });

    return (
        <Layout>
            <Header />
            <Content>
                <h1>Headphones</h1>

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
