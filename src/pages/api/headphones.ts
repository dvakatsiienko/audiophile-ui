/* Core */
import { v4 } from 'uuid';
import { resolve } from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<Headphone[]>) {
    return res.status(200).json(headphonesData);
}

const heroPath = resolve('.', './images/headphones/x99-mark-II-hero.png');
const img1 = resolve('.', './images/headphones/x99-mark-II-gallery-1.png');
const img2 = resolve('.', './images/headphones/x99-mark-II-gallery-2.png');
const img3 = resolve('.', './images/headphones/x99-mark-II-gallery-3.png');

export const headphonesData: Headphone[] = [
    {
        id:          v4(),
        name:        'XX99 Mark II',
        description:
            'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
        price: {
            value:    2.999,
            currency: 'USD',
        },
        features:
            'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you\'ll never miss a beat. The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
        inTheBox: [
            {
                id:      v4(),
                item:    'Headphone Unit',
                quanity: 1,
            },
            {
                id:      v4(),
                item:    'Replacement Earcups',
                quanity: 2,
            },
            {
                id:      v4(),
                item:    'User Manual',
                quanity: 1,
            },
            {
                id:      v4(),
                item:    '3.5mm 5m Audio Cable',
                quanity: 1,
            },
            {
                id:      v4(),
                item:    'Travel Bag',
                quanity: 1,
            },
        ],
        images: {
            hero:    heroPath,
            gallery: [ img1, img2, img3 ],
        },
    },
];

/* Types */
export interface Headphone {
    id: string;
    name: string;
    description: string;
    price: {
        value: number;
        currency: Currency;
    };
    features: string;
    inTheBox: InTheBox[];
    images: {
        hero: string;
        gallery: string[];
    };
}

interface InTheBox {
    id: string;
    item: string;
    quanity: number;
}

type Currency = 'USD' | 'EUR' | 'UAH';
