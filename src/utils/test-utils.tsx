/* Core */
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

/* Instruments */
import { theme as defaultTheme } from '@/ui-kit';

const styledRender = (ui: React.ReactElement, { theme = defaultTheme, ...options } = {}) => {
    const Wrapper = (props: React.PropsWithChildren) => {
        return <ThemeProvider theme = { theme }>{props.children}</ThemeProvider>;
    };

    return render(ui, { wrapper: Wrapper, ...options });
};

export { styledRender };
