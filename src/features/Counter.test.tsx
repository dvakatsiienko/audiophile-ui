/* Core */
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

/* Components */
import { Counter } from './Counter';

/* Instruments */
import { store } from '@/lib/redux';
import { styledRender } from '@/utils';

test('<Counter />: renders with Redux defaults', async () => {
    const user = userEvent.setup();
    styledRender(
        <Provider store = { store }>
            <Counter />
        </Provider>,
    );

    await user.click(screen.getByText('+'));
    expect(screen.getByTestId('count-value')).toHaveTextContent('1');
});
