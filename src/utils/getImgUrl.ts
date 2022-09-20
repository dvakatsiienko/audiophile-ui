/* Instruments */
import { API_URL } from './api-url';

export const getImgUrl = (url: string) => {
    const result = `${API_URL}${url}`;

    return result;
};
