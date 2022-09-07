/* Core */
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';

/* Components */
import { CheckoutForm } from './CheckoutForm';

/* Instruments */
import { styledRender } from '@/utils';

jest.spyOn(window, 'alert').mockImplementation();
jest.spyOn(console, 'log').mockImplementation();

const push = jest.fn(() => Promise.resolve(true));

jest.mock('next/router', () => ({
    __esModule: true,
    useRouter:  () => ({
        query:    {},
        pathname: '/',
        asPath:   '/',
        events:   {
            emit: jest.fn(),
            on:   jest.fn(),
            off:  jest.fn(),
        },
        push,
        prefetch: jest.fn(() => Promise.resolve(true)),
        replace:  jest.fn(() => Promise.resolve(true)),
    }),
}));

test('Loads renders correct markup', async () => {
    styledRender(<CheckoutForm onSubmit = { () => alert('+++') } />);

    const checkoutState = screen.getByTestId('checkout-state');
    const nameInput = screen.getByTestId('input-name');

    await user.type(nameInput, '{backspace}{backspace}');

    expect(checkoutState).toHaveTextContent('waiting');

    expect(nameInput).toHaveAttribute('name', 'name');

    expect(screen.getByTestId('input-email')).toHaveAttribute('name', 'email');
    expect(screen.getByTestId('input-phone')).toHaveAttribute('name', 'phone');

    await user.type(nameInput, 'dima');
    await waitFor(async () => {
        await user.click(screen.getByTestId('button-submit'));

        expect(alert).toBeCalledWith('+++');
        expect(checkoutState).toHaveTextContent('Success...');

        expect(push).toHaveBeenNthCalledWith(1, '/');
    });
});
