/* Core */
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';
import 'whatwg-fetch';
import 'jest-styled-components';

const server = setupServer(
    rest.post('http://localhost:3000/api/checkout', (req, res, ctx) => {
        return res(ctx.json({ message: 'Success...' }));
    }),
);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

const push = jest.fn((pathname: string) => {
    global.window = Object.create(window);
    Object.defineProperty(window, 'location', { value: { pathname } });
    Promise.resolve(true);
});
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

/* Types */
interface Mocks {
    push: typeof push;
}

declare global {
    // eslint-disable-next-line vars-on-top, no-var
    var mocks: Mocks;
}

global.mocks = { push };
global.React = React;
