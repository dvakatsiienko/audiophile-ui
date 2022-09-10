/* Components */
import { Footer } from './Footer';

/* Instruments */
import { styledRender } from '@/utils';

test('<Footer />: Loads renders correct markup', async () => {
    const root = styledRender(<Footer />);

    expect(root.container).toMatchInlineSnapshot(`
.c1 {
  font-size: 56px;
  font-weight: 700;
  line-height: 58px;
  -webkit-letter-spacing: 2px;
  -moz-letter-spacing: 2px;
  -ms-letter-spacing: 2px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.c0 {
  grid-area: footer;
  background-color: #101010;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: white;
}

<div>
  <footer
    class="c0"
  >
    <h1
      class="c1"
    >
      Footer
    </h1>
  </footer>
</div>
`);
});
