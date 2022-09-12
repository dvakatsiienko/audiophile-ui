/* Core */
import { useQuery } from '@tanstack/react-query';

/* Components */
import { Body, Overline } from '@/ui-kit';
import { Counter } from './Counter';

/* Instruments */
import { fetchUsers, fetchPost1 } from '@/api';

export const Testing = (props: TestingProps) => {
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
        <section className = { props.className }>
            <Counter />

            <div>
                <Body>Post 1: {post1?.title}</Body>

                <br />

                <ul>{userListJSX}</ul>

                <br />
            </div>
        </section>
    );
};
Testing.defaultProps = {
    className: null,
};

/* Types */
interface TestingProps {
    className?: string;
}
