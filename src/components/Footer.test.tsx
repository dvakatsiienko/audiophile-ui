/* Components */
import { Footer } from './Footer';

/* Instruments */
import { styledRender } from '@/utils';

test('<Footer />: Loads renders correct markup', async () => {
    const root = styledRender(<Footer />);

    console.log(true);

    expect(root.container).toMatchInlineSnapshot(`
<div>
  <footer
    class="sc-bczRLJ eYScYQ"
  >
    Footer
  </footer>
</div>
`);
});
