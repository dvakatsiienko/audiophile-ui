export interface SpeakersRes {
    payload: Category;
}

interface Category {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    products: Product[];
}

interface Product {
    id: string;
    slug: string;
    name: string;
    new: boolean;
    price: number;
    description: string;
    features: string;
    previewImage: string;
    createdAt: string;
    updatedAt: string;
    categoryId: string;
    image: Image;
}

interface Image {
    id: string;
    mobile: string;
    tablet: string;
    desktop: string;
    otherId: null;
    productId: string;
    galleryId: null;
    categoryId: null;
    createdAt: string;
    updatedAt: string;
}
