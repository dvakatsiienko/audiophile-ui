/* Core */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

/* Components */
import { CheckoutForm } from './CheckoutForm';

test('Loads renders correct markup', async () => {
    const component = render(<CheckoutForm onSubmit = { () => null } />);

    expect(component.getByTestId('form-title')).toHaveTextContent('Billing Details');
    expect(component.getByTestId('input-name')).toHaveAttribute('name', 'name');
    expect(component.getByTestId('input-email')).toHaveAttribute('name', 'email');
    expect(component.getByTestId('input-phone')).toHaveAttribute('name', 'phone');
});
