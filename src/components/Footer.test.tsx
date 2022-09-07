/* Components */
import { Footer } from './Footer';

/* Instruments */
import { styledRender } from '@/utils';

test('<Footer />: Loads renders correct markup', async () => {
    const root = styledRender(<Footer />);

    expect(root.container).toMatchInlineSnapshot(`
<div>
  <footer
    class="sc-jqUVSM jBqgeR"
  >
    <h1
      class="sc-bczRLJ cTBEXJ"
    >
      Footer
    </h1>
  </footer>
</div>
`);
});
