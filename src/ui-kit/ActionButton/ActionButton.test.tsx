/* Core */
// import { describe, expect } from '@jest/globals';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/* Components */
import { ActionButton } from './ActionButton';

/* Instruments */
import { styledRender } from '@/utils';

const handler = jest.fn();
jest.spyOn(ActionButton.defaultProps, 'onPointerUp');
jest.spyOn(console, 'error');

beforeEach(jest.clearAllMocks);

describe('<ActionButton />:', () => {
    test('renders correctly primary variant', async () => {
        styledRender(<ActionButton />);
        const button = screen.getByRole('button');

        expect(button).toMatchSnapshot();
    });

    test('renders correctly secondary variant', async () => {
        styledRender(<ActionButton variant = 'secondary' />);
        const button = screen.getByRole('button');

        expect(button).toMatchSnapshot();
    });

    test('renders correctly inline variant', async () => {
        styledRender(<ActionButton variant = 'inline' />);
        const button = screen.getByRole('button');

        expect(button).toMatchSnapshot();
    });

    test('renders as <a />', async () => {
        const href = '/speakers';

        styledRender(<ActionButton as = 'a' href = { href } />);
        const link = screen.getByRole('link');

        expect(link).toHaveAttribute('href', href);
        expect(link.tagName).toBe('A');
    });

    test('handles click handler passed via props', async () => {
        const user = userEvent.setup();
        styledRender(<ActionButton onPointerUp = { handler } />);
        const button = screen.getByRole('button');

        await user.pointer({ target: button, keys: '[MouseLeft]' });

        expect(handler).toBeCalledTimes(1);
    });

    test('provides default stub function via default props', async () => {
        const user = userEvent.setup();
        styledRender(<ActionButton />);
        const button = screen.getByRole('button');

        await user.pointer({ target: button, keys: '[MouseLeft]' });

        expect(ActionButton.defaultProps.onPointerUp).toBeCalledTimes(1);
    });
});
