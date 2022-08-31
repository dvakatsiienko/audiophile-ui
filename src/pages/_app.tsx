/* Core */
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

/* Instruments */
import { theme } from '@/theme';
import '@/theme/index.scss';

const MyApp = (props: AppProps) => {
    const { Component, pageProps } = props;

    return (
        <ThemeProvider theme = { theme }>
            <Component { ...pageProps } />
        </ThemeProvider>
    );
};

export default MyApp;
