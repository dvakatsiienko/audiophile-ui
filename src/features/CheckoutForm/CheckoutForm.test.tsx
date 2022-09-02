/* Core */
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

/* Components */
import { CheckoutForm } from './CheckoutForm';

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

const checkoutResponseMsg = 'Success...';

const server = setupServer(
    rest.post('/api/checkout', (req, res, ctx) => {
        return res(ctx.json({ message: checkoutResponseMsg }));
    }),
);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test('Loads renders correct markup', async () => {
    render(<CheckoutForm onSubmit = { () => alert('+') } />);

    const checkoutState = screen.getByTestId('checkout-state');
    const nameInput = screen.getByTestId('input-name');

    await user.type(nameInput, '{backspace}{backspace}');

    expect(checkoutState).toHaveTextContent('waiting');
    expect(screen.getByTestId('input-name-error')).toHaveTextContent('Minimum 4 characters.');

    expect(screen.getByTestId('form-title')).toHaveTextContent('Billing Details');
    expect(nameInput).toHaveAttribute('name', 'name');
    expect(screen.getByTestId('input-email')).toHaveAttribute('name', 'email');
    expect(screen.getByTestId('input-phone')).toHaveAttribute('name', 'phone');

    await user.type(nameInput, 'dima');
    await waitFor(async () => {
        await user.click(screen.getByTestId('button-submit'));

        expect(alert).toBeCalledWith('+');
        expect(checkoutState).toHaveTextContent(checkoutResponseMsg);

        expect(push).toHaveBeenNthCalledWith(1, '/');
    });
});
