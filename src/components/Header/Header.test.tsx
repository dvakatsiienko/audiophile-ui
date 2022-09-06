/* Components */
import { Header } from './Header';

/* Instruments */
import { styledRender } from '@/utils';

test('<Header />: Loads renders correct markup', async () => {
    const root = styledRender(<Header />);

    expect(root.container).toMatchInlineSnapshot(`
<div>
  <header
    class="sc-bczRLJ cOmPrx"
  >
    <img
      alt="logo"
      data-nimg="future"
      decoding="async"
      height="100"
      loading="lazy"
      src="/mock-path.svg"
      srcset="/mock-path.svg 1x, /mock-path.svg 2x"
      style="color: transparent;"
      width="100"
    />
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
