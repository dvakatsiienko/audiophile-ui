/* Core */
import 'styled-components';
import type {} from 'styled-components/cssprop';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            'color-1': string;
            'color-2': string;
            'color-3': string;
            'color-4': string;
            'color-5': string;
            'color-6': string;
            'color-7': string;
            'color-8': string;
            'color-9': string;
        };

        viewports: {
            mobile: string;
            tablet: string;
            desktop: string;
        };
    }
}
