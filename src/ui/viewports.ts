/* Core */
import { generateMedia } from 'styled-media-query';

export const viewports = {
    mobile:  '375px',
    tablet:  '768px',
    desktop: '1440px',
};

export const media = generateMedia(viewports);
