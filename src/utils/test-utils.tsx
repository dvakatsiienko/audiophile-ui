/* Core */
import { render as testingLibraryRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

/* Instruments */
import { theme as defaultTheme } from '@/ui-kit';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // ✅ turns retries off
            retry: false,
        },
    },
});

const styledRender = (ui: React.ReactElement, options: Options = {}) => {
    const { theme = defaultTheme, reactQuery = true, ...restOptions } = options;

    const StyledWrapper = (props: React.PropsWithChildren) => {
        return <ThemeProvider theme = { theme }>{props.children}</ThemeProvider>;
    };

    if (reactQuery) {
        const ReactQueryWrapper = (props: React.PropsWithChildren) => {
            return (
                <QueryClientProvider client = { queryClient }>
                    <StyledWrapper>{props.children}</StyledWrapper>
                </QueryClientProvider>
            );
        };

        return testingLibraryRender(ui, { wrapper: ReactQueryWrapper, ...restOptions });
    }

    return testingLibraryRender(ui, { wrapper: StyledWrapper, ...restOptions });
};

/* Types */
interface Options {
    reactQuery?: boolean;
    theme?: typeof defaultTheme;
}

export { styledRender };
