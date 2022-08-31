import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            'color-1': string;
            'color-2': string;
            'color-3': string;
            'color-4': string;
        };
    }
}
