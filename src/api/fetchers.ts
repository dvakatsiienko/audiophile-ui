/* Core */
import waait from 'waait';

/* Instruments */
import { API_URL } from '@/utils';
import type { Headphone } from '@/pages/api/headphones';
import type {
    CategoriesRes, HeadphonesRes, SpeakersRes, EarphonesRes, ProductsRes
} from '@/types';

export const fetchCategories = async () => {
    const res = await fetch(`${API_URL}/api/category`);
    const result: CategoriesRes = await res.json();

    return result;
};

export const fetchHeadphones = async () => {
    const res = await fetch(`${API_URL}/api/category/headphones`);
    const result: HeadphonesRes = await res.json();

    return result;
};

export const fetchSpeakers = async () => {
    const res = await fetch(`${API_URL}/api/category/speakers`);
    const result: SpeakersRes = await res.json();

    return result;
};

export const fetchEarphones = async () => {
    const res = await fetch(`${API_URL}/api/category/earphones`);
    const result: EarphonesRes = await res.json();

    return result;
};

export const fetchProducts = async () => {
    const res = await fetch(`${API_URL}/api/product`);
    const result: ProductsRes = await res.json();

    return result;
};

/* TEST */
export const fetchHeadphonesTest = async () => {
    const res = await fetch('http://localhost:3000/api/headphones');
    const result: Headphone[] = await res.json();

    return result;
};

export const fetchUsers = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users').then<User[]>(res => res.json());

    await waait(1000);

    return result;
};

export const fetchPost1 = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts/1').then<Post>(res => res.json());
};
/* TEST */

/* Types */
interface User {
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
}

interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}
