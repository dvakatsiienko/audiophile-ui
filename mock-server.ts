/* Core */
import { rest } from 'msw';
import { setupServer } from 'msw/node';

export const server = setupServer(
    rest.post('http://localhost:3000/api/checkout', (req, res, ctx) => {
        return res(ctx.json({ message: 'Success...' }));
    }),
);
