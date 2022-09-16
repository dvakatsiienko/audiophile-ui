export interface CategoriesRes {
    data: Category[];
}

interface Category {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    image: Image;
}

interface Image {
    id: string;
    mobile: string;
    tablet: string;
    desktop: string;
    otherId: null;
    productId: null;
    galleryId: null;
    categoryId: string;
    createdAt: string;
    updatedAt: string;
}
