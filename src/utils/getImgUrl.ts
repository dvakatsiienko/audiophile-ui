/* Instruments */
import { API_URL } from './api-url';

export const getImgUrl = (url: string) => {
    const realUrl = url.replace('./', '');
    const result = `${API_URL}/${realUrl}`;

    return result;
};
