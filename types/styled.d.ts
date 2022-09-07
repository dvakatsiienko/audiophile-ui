import 'styled-components';

declare module 'styled-components' {
    export interface Theme {
        palette: {
            'color-1': string;
            'color-2': string;
            'color-3': string;
            'color-4': string;
            'color-5': string;
            'color-6': string;
            'color-7': string;
            'color-8': string;
        };

        viewports: {
            mobile: string;
            tablet: string;
            desktop: string;
        };
    }
}
