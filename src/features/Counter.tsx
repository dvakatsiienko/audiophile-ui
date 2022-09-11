/* Core */
import styled from 'styled-components';

/* Components */
import { ActionButton, H1, media } from '@/ui';

/* Instruments */
import { useDispatch, useSelector, counterSlice } from '@/lib/redux';

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
                <ActionButton onPointerUp = { increment }>+</ActionButton>
                <ActionButton variant = 'secondary' onPointerUp = { decrement }>
                    -
                </ActionButton>
                <ActionButton variant = 'inline' onPointerUp = { decrement }>
                    TEST
                </ActionButton>
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
    /* Start from applying mobile styles */
    text-align: center;
    color: red;

    ${media.greaterThan('tablet')`
        color: rebeccapurple;
    `}

    ${media.greaterThan('desktop')`
        color: orange;
    `}
`;
