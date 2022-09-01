/* Core */
import waait from 'waait';

export const fetchUsers = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users').then<User[]>(res => res.json());

    await waait(1000);

    return result;
};

export const fetchPost1 = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts/1').then<Post>(res => res.json());
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
