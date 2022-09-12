/* Components */
import * as m from './Typography';

/* Instruments */
import { styledRender } from '@/utils';

const typography = Object.values(m);

describe('Typography module:', () => {
    typography.forEach(Element => {
        test(`<${Element.displayName} /> renders in a right way:`, () => {
            const out = styledRender(<Element />);

            expect(out.container).toMatchSnapshot();
        });
    });
});
