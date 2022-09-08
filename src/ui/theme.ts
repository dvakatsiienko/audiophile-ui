/* Core */
import type { DefaultTheme } from 'styled-components';

/* Instruments */
import palette from './palette.json';
import { viewports } from './viewports';

export const theme: DefaultTheme = {
    palette: palette as unknown as DefaultTheme['palette'],
    viewports,
};
