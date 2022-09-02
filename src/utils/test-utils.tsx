/* Core */
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

/* Instruments */
import { theme as defaultTheme } from '@/theme';

const styledRender = (ui: React.ReactElement, { theme = defaultTheme, ...options } = {}) => {
    const Wrapper = (props: WrapperProps) => {
        return <ThemeProvider theme = { theme }>{props.children}</ThemeProvider>;
    };

    return render(ui, { wrapper: Wrapper, ...options });
};

/* Types */
interface WrapperProps {
    children: React.ReactNode;
}

export { styledRender };
