/* Core */
import type { NextPage } from 'next';

/* Components */
import {
    Layout, Header, Content, Footer, Button
} from '@/components';

/* Instruments */
import { useDispatch, useSelector, counterSlice } from '@/lib/redux';

const Index: NextPage = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(counterSlice.actions.increment());
    };
    const decrement = () => {
        dispatch(counterSlice.actions.decrement());
    };

    return (
        <Layout>
            <Header />

            <Content>
                <h1>Audiophile {count}</h1>

                <div>
                    <Button onClick = { increment }>+</Button>
                    <Button onClick = { decrement }>-</Button>
                </div>
            </Content>

            <Footer />
        </Layout>
    );
};

export default Index;
