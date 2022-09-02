/* Core */
import { render, screen } from '@testing-library/react';

/* Components */
import { CheckoutForm } from './CheckoutForm';

test('Loads renders correct markup', async () => {
    render(<CheckoutForm onSubmit = { () => null } />);

    expect(screen.getByTestId('form-title')).toHaveTextContent('Billing Details');
    expect(screen.getByTestId('input-name')).toHaveAttribute('name', 'name');
    expect(screen.getByTestId('input-email')).toHaveAttribute('name', 'email');
    expect(screen.getByTestId('input-phone')).toHaveAttribute('name', 'phone');
});
