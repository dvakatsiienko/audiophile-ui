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

        expect(button).toMatchInlineSnapshot(`
<button
  class="sc-bczRLJ joQdJx"
  type="button"
>
  <span>
    Click
  </span>
</button>
`);
    });

    test('renders correctly secondary variant', async () => {
        styledRender(<ActionButton variant = 'secondary' />);
        const button = screen.getByRole('button');

        expect(button).toMatchInlineSnapshot(`
<button
  class="sc-bczRLJ dAWzUV"
  type="button"
>
  <span>
    Click
  </span>
</button>
`);
    });

    test('renders correctly inline variant', async () => {
        styledRender(<ActionButton variant = 'inline' />);
        const button = screen.getByRole('button');

        expect(button).toMatchInlineSnapshot(`
<button
  class="sc-bczRLJ ffLUPL"
  type="button"
>
  <span>
    Click
  </span>
  <img
    alt="chevron"
    data-nimg="future"
    decoding="async"
    height="100"
    loading="lazy"
    src="/mock-path.svg"
    srcset="/mock-path.svg 1x, /mock-path.svg 2x"
    style="color: transparent;"
    width="100"
  />
</button>
`);
    });

    test('renders as <a />', async () => {
        const href = 'https://www.example.com';

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
