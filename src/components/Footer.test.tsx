/* Components */
import { Footer } from './Footer';

/* Instruments */
import { styledRender } from '@/utils';

test('<Footer />: Loads renders correct markup', async () => {
    const root = styledRender(<Footer />);

    expect(root.container).toMatchInlineSnapshot(`
<div>
  <footer
    class="sc-breuTD eiUStr"
  >
    <h1
      class="sc-eCYdqJ jWqziO"
    >
      Footer
    </h1>
  </footer>
</div>
`);
});
