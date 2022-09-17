/* Core */
// import { describe, expect } from '@jest/globals';
import { Context as ResponsiveContext } from 'react-responsive';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import waait from 'waait';

/* Components */
import { Header } from './Header';

/* Instruments */
import { mobile, desktop } from '@/ui-kit';
import { styledRender } from '@/utils';

describe('<Header />:', () => {
    test('renders burger menu on mobile devices', async () => {
        const user = userEvent.setup();
        styledRender(
            <ResponsiveContext.Provider value = {{ width: mobile }}>
                <Header />
            </ResponsiveContext.Provider>,
        );
        const burgerSvg = screen.getByTestId('burger-menu-svg');

        expect(burgerSvg).toBeInTheDocument();

        await user.pointer({ target: burgerSvg, keys: '[MouseLeft]' });

        const cardNavModal = screen.getByTestId('card-nav-modal');

        expect(cardNavModal).toBeInTheDocument();
    });

    test('renders nav menu on desktop devices', async () => {
        styledRender(
            <ResponsiveContext.Provider value = {{ width: desktop }}>
                <Header />
            </ResponsiveContext.Provider>,
        );
        const navgigation = screen.getByRole('navigation');
        const cardNavModal = screen.queryByTestId('card-nav-modal');

        expect(navgigation).toBeInTheDocument();
        expect(cardNavModal).not.toBeInTheDocument();
    });
});
