/* Core */
import { useState } from 'react';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';

/* Instruments */
import { theme } from '@/theme';
import { store } from '@/lib/redux';
import '@/theme/index.scss';

const MyApp = (props: AppProps) => {
    const { Component, pageProps } = props;

    const [ queryClient ] = useState(() => new QueryClient());

    return (
        <ThemeProvider theme = { theme }>
            <QueryClientProvider client = { queryClient }>
                <Hydrate state = { pageProps.dehydratedState }>
                    <Provider store = { store }>
                        <Head>
                            <title>Audiophile</title>

                            <meta content = 'Audiophile app' name = 'description' />
                            <meta charSet = 'utf-8' />
                            <meta content = '#000000' name = 'theme-color' />
                            <meta content = 'width=device-width, initial-scale=1' name = 'viewport' />

                            <link href = '/favicon.ico' rel = 'icon' />
                        </Head>

                        <Component { ...pageProps } />

                        <ReactQueryDevtools />
                    </Provider>
                </Hydrate>
            </QueryClientProvider>
        </ThemeProvider>
    );
};

export default MyApp;
