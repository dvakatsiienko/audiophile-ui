/* Instruments */
import { headphonesData } from '../headphones';

test('Headphones data shape mock is correct', () => {
    expect(headphonesData).toMatchSnapshot();
});
