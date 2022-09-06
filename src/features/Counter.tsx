/* Core */
import styled from 'styled-components';

/* Components */
import { Button, H1 } from '@/components';

/* Instruments */
import { useDispatch, useSelector, counterSlice } from '@/lib/redux';
import { media } from '@/theme';

export const Counter = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(counterSlice.actions.increment());
    };
    const decrement = () => {
        dispatch(counterSlice.actions.decrement());
    };

    return (
        <section>
            <Heading data-testid = 'count-value'>{count}</Heading>
            <Button onClick = { increment }>+</Button>
            <Button onClick = { decrement }>-</Button>
        </section>
    );
};

/* Styles */
const Heading = styled(H1)`
    ${media.lessThan('mobile')`
        color: deepskyblue;
    `}

    ${media.between('mobile', 'tablet')`
        color: deepskyblue;
    `}

    ${media.between('tablet', 'desktop')`
        color: rebeccapurple;
    `}

     ${media.greaterThan('desktop')`
        color: orange;
    `}
`;
