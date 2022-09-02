/* Components */
import { Header } from './Header';

/* Instruments */
import { styledRender } from '@/utils';

test('<Header />: Loads renders correct markup', async () => {
    const root = styledRender(<Header />);

    expect(root.container).toMatchInlineSnapshot(`
<div>
  <header
    class="sc-bczRLJ gmezrs"
  >
    <h1>
      Audiophile
    </h1>
    <nav>
      <ul>
        <li>
          <a
            href="/"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/headphones"
          >
            Headphones
          </a>
        </li>
        <li>
          <a
            href="/speakers"
          >
            Speakres
          </a>
        </li>
        <li>
          <a
            href="/earphones"
          >
            Earphones
          </a>
        </li>
      </ul>
    </nav>
    <div
      class="sc-gsnTZi gxjmBX"
    />
  </header>
</div>
`);
});
