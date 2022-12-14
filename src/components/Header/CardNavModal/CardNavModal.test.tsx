/* Core */
import { describe, expect } from '@jest/globals';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/* Components */
import { CardNavModal, type SetIsOpened } from './CardNavModal';

/* Instruments */
import { styledRender } from '@/utils';
import type { Route } from '@/types';

let isOpened = false;
const setIsOpened = jest.fn((bool: boolean) => {
    isOpened = bool;

    return null;
});

const routes: Route[] = [ '/headphones', '/speakers', '/earphones' ];

describe('<CardNavModal />:', () => {
    routes.forEach((route, index) => {
        test(`routes to ${route}`, async () => {
            const user = userEvent.setup();
            styledRender(
                <CardNavModal
                    isOpened = { isOpened }
                    setIsOpened = { setIsOpened as unknown as SetIsOpened }
                />,
            );
            const listItems = screen.getAllByRole('listitem');
            const li = listItems[ index ];

            await user.pointer({ target: li, keys: '[MouseLeft]' });

            waitFor(() => {
                expect(window.location.pathname).toBe(route);
                expect(setIsOpened).toBeCalledTimes(1);
            });
            expect(isOpened).toBe(false);
        });
    });

    test('closes modal on Escape key press', async () => {
        const user = userEvent.setup();
        styledRender(
            <CardNavModal
                isOpened = { isOpened }
                setIsOpened = { setIsOpened as unknown as SetIsOpened }
            />,
        );

        await user.keyboard('[Escape]');
        expect(setIsOpened).toBeCalledTimes(1);
        expect(isOpened).toBe(false);
    });
});

jest.mock('next/future/image', () => ({
    __esModule: true,
    default:    () => {
        return 'Next image stub';
    },
}));

beforeEach(() => {
    // Set MobileNav opened
    expect(isOpened).toBe(false);
    setIsOpened(true);
    jest.clearAllMocks();
    expect(isOpened).toBe(true);
});

afterEach(() => {
    global.mocks.push('/');
    setIsOpened(false);
    jest.clearAllMocks();
});
