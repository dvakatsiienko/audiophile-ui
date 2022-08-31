/* Core */
import type { AppProps } from 'next/app';

/* Instruments */
import '../theme/globals.scss';

const MyApp = (props: AppProps) => {
    const { Component, pageProps } = props;

    return <Component {...pageProps} />;
};

export default MyApp;
