/* Core */
import waait from 'waait';

/* Instruments */
import { Headphone } from '@/pages/api/headphones';

export const fetchUsers = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users').then<User[]>(res => res.json());

    await waait(1000);

    return result;
};

export const fetchPost1 = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts/1').then<Post>(res => res.json());
};

export const fetchCategories = async () => {
    const res = await fetch('https://audiophile-express.herokuapp.com/api/category');
    const result: Headphone[] = await res.json();

    return result;
};

export const fetchHeadphones = async () => {
    const res = await fetch('https://audiophile-express.herokuapp.com/api/category/headphones');
    const result: Headphone[] = await res.json();

    return result;
};

export const fetchSpeakers = async () => {
    const res = await fetch('https://audiophile-express.herokuapp.com/api/category/speakers');
    const result: Headphone[] = await res.json();

    return result;
};

export const fetchEarphones = async () => {
    const res = await fetch('https://audiophile-express.herokuapp.com/api/category/earphones');
    const result: Headphone[] = await res.json();

    return result;
};

export const fetchProducts = async () => {
    const res = await fetch('https://audiophile-express.herokuapp.com/api/product');
    const result: Headphone[] = await res.json();

    return result;
};

export const fetchHeadphonesTest = async () => {
    const res = await fetch('http://localhost:3000/api/headphones');
    const result: Headphone[] = await res.json();

    return result;
};

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
