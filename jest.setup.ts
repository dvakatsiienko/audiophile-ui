/* Core */
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import env from 'dotenv';
import '@testing-library/jest-dom';
import 'whatwg-fetch';
import 'jest-styled-components';

env.config({ path: './.env.test' });

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const server = setupServer(
    rest.post(`${API_URL}/api/checkout`, (req, res, ctx) => {
        return res(ctx.json({ message: 'Success...' }));
    }),
    rest.get(`${API_URL}/api/category`, (req, res, ctx) => {
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
