/* Core */
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

/* Instruments */
import { theme } from '@/theme';
import { store } from '@/lib/redux';
import '@/theme/index.scss';

const MyApp = (props: AppProps) => {
    const { Component, pageProps } = props;

    return (
        <ThemeProvider theme = { theme }>
            <Provider store = { store }>
                <Head>
                    <title>Audiophile</title>
                    <link href = '/favicon.ico' rel = 'icon' />
                </Head>
                <Component { ...pageProps } />
            </Provider>
        </ThemeProvider>
    );
};

export default MyApp;
