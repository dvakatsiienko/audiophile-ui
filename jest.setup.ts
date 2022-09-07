/* Core */
import React from 'react';
import '@testing-library/jest-dom';
import 'whatwg-fetch';

/* Instruments */
import { server } from './mock-server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

global.React = React;
