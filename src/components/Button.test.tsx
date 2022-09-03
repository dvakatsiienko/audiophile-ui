/* Core */
import { screen } from '@testing-library/react';
import user from '@testing-library/user-event';

/* Components */
import { Button } from './Button';

/* Instruments */
import { styledRender } from '@/utils';

const handler = jest.fn();

describe('<Button />:', () => {
    test('renders correct markup', async () => {
        styledRender(<Button onClick = { handler } />);
        const button = screen.getByRole('button');

        expect(button).toMatchInlineSnapshot(`
<button
  class="sc-bczRLJ fEedts"
  type="button"
>
  Click
</button>
`);
    });

    test('handles click handler passed via props', async () => {
        styledRender(<Button onClick = { handler } />);
        const button = screen.getByRole('button');

        await user.click(button);

        expect(handler).toBeCalledTimes(1);
    });
});