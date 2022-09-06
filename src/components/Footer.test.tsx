/* Components */
import { Footer } from './Footer';

/* Instruments */
import { styledRender } from '@/utils';

test('<Footer />: Loads renders correct markup', async () => {
    const root = styledRender(<Footer />);

    expect(root.container).toMatchInlineSnapshot(`
<div>
  <footer
    class="sc-dkzDqf dWUYkZ"
  >
    Footer
  </footer>
</div>
`);
});
