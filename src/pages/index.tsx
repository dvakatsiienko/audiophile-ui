/* Core */
import { useQuery, dehydrate, QueryClient } from '@tanstack/react-query';
import type { NextPage, GetStaticProps } from 'next';

/* Components */
import {
    Layout, Header, Content, Footer, H6, Body, Overline
} from '@/components';
import { Counter } from '@/features';

/* Instruments */
import { fetchUsers, fetchPost1 } from '@/api';

const Index: NextPage = () => {
    const { isLoading, data: userList, isFetching } = useQuery([ 'users' ], fetchUsers);

    const post1Query = useQuery([ 'post-1' ], fetchPost1);
    const { data: post1 } = post1Query;

    let userListJSX = null;

    userListJSX = userList?.map(user => {
        return (
            <li key = { user.id }>
                <Overline>{user.name}</Overline>
            </li>
        );
    });

    if (!userList && isLoading) userListJSX = 'Loading...';
    if (!userList && isFetching) userListJSX = 'Fetching...';

    return (
        <Layout>
            <Header />

            <Content>
                <H6>Audiophile</H6>

                <Counter />

                <div>
                    <Body>Post 1: {post1?.title}</Body>

                    <br />

                    <ul>{userListJSX}</ul>

                    <br />
                </div>
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
