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
        <Section>
            <Heading data-testid = 'count-value'>{count}</Heading>
            <div>
                <Button onClick = { increment }>+</Button>
                <Button onClick = { decrement }>-</Button>
            </div>
        </Section>
    );
};

/* Styles */
const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;

    & div {
        display: flex;
        gap: 10px;
    }
`;

const Heading = styled(H1)`
    text-align: center;

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
