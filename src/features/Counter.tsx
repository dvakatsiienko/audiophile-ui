/* Components */
import { Button } from '@/components';

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
        <section>
            <h1 data-testid = 'count-value'>{count}</h1>
            <Button onClick = { increment }>+</Button>
            <Button onClick = { decrement }>-</Button>
        </section>
    );
};
