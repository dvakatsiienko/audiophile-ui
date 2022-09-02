/* Instruments */
import { headphonesData } from '../headphones';

test('Headphones data shape mock is correct', () => {
    expect(headphonesData).toMatchInlineSnapshot(`
[
  {
    "description": "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    "features": "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat. The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    "id": [MockFunction],
    "images": {
      "gallery": [
        "/Users/furthur/Projects/audiophile-ui/images/headphones/x99-mark-II-gallery-1.png",
        "/Users/furthur/Projects/audiophile-ui/images/headphones/x99-mark-II-gallery-2.png",
        "/Users/furthur/Projects/audiophile-ui/images/headphones/x99-mark-II-gallery-3.png",
      ],
      "hero": "/Users/furthur/Projects/audiophile-ui/images/headphones/x99-mark-II-hero.png",
    },
    "inTheBox": [
      {
        "id": [MockFunction],
        "item": "Headphone Unit",
        "quanity": 1,
      },
      {
        "id": [MockFunction],
        "item": "Replacement Earcups",
        "quanity": 2,
      },
      {
        "id": [MockFunction],
        "item": "User Manual",
        "quanity": 1,
      },
      {
        "id": [MockFunction],
        "item": "3.5mm 5m Audio Cable",
        "quanity": 1,
      },
      {
        "id": [MockFunction],
        "item": "Travel Bag",
        "quanity": 1,
      },
    ],
    "name": "XX99 Mark II",
    "price": {
      "currency": "USD",
      "value": 2.999,
    },
  },
]
`);
});
