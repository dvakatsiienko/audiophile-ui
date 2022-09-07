/* Core */
import { useQuery } from '@tanstack/react-query';

/* Components */
import { H6, Body, Overline } from '@/ui';
import { Counter } from './Counter';

/* Instruments */
import { fetchUsers, fetchPost1 } from '@/api';

export const Testing = () => {
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
        <>
            <H6>Earphones</H6>

            <Counter />

            <div>
                <Body>Post 1: {post1?.title}</Body>

                <br />

                <ul>{userListJSX}</ul>

                <br />
            </div>
        </>
    );
};
