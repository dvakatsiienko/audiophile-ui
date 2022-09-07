/* Core */
import { screen } from '@testing-library/react';
import user from '@testing-library/user-event';

/* Components */
import { ActionButton } from './ActionButton';

/* Instruments */
import { styledRender } from '@/utils';

const handler = jest.fn();
jest.spyOn(ActionButton.defaultProps, 'onClick');

describe('<ActionButton />:', () => {
    test('renders correct markup', async () => {
        styledRender(<ActionButton onClick = { handler } />);
        const button = screen.getByRole('button');

        expect(button).toMatchInlineSnapshot(`
<button
  class="sc-bczRLJ bTIZAn"
  type="button"
>
  <span>
    Click
  </span>
</button>
`);
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
