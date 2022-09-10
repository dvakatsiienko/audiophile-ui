/* Core */
import { screen } from '@testing-library/react';
import user from '@testing-library/user-event';

/* Components */
import { ActionButton } from './ActionButton';

/* Instruments */
import { styledRender } from '@/utils';

const handler = jest.fn();
jest.spyOn(ActionButton.defaultProps, 'onClick');
jest.spyOn(console, 'error');

beforeEach(jest.clearAllMocks);

describe.only('<ActionButton />:', () => {
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
        const button = screen.getByRole('link');

        expect(button).toHaveAttribute('href', href);
        expect(button.tagName).toBe('A');
    });

    test('handles click handler passed via props', async () => {
        styledRender(<ActionButton onClick = { handler } />);
        const button = screen.getByRole('button');

        await user.click(button);

        expect(handler).toBeCalledTimes(1);
    });

    test('provides default stub function via default props', async () => {
        styledRender(<ActionButton />);
        const button = screen.getByRole('button');

        await user.click(button);

        expect(ActionButton.defaultProps.onClick).toBeCalledTimes(1);
    });
});
