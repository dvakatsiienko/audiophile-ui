/* Components */
import { Header } from './Header';

/* Instruments */
import { styledRender } from '@/utils';

test('<Header />: Loads renders correct markup', async () => {
    const root = styledRender(<Header />);

    expect(root.container).toMatchInlineSnapshot(`
.c0 {
  --header-height: 90px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  grid-area: header;
  height: var(--header-height);
  background-color: var(--color-2);
  color: white;
}

.c0:before {
  position: fixed;
  display: none;
  content: '';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  z-index: -1;
}

.c0 .header-section {
  display: grid;
  grid-auto-flow: row;
  grid-template-areas: 'burger logo cart';
  padding: 0 40px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: auto;
  height: 100%;
  border-bottom: 1px solid #333333;
  max-width: 100%;
}

.c0 .header-section svg {
  cursor: pointer;
}

.c0 .header-section svg.burger-menu-svg {
  grid-area: burger;
}

.c0 .header-section svg.logo-svg {
  grid-area: logo;
}

.c0 .header-section svg.shopping-cart-svg {
  grid-area: cart;
}

.c0 .header-section svg:hover path,
.c0 .header-section svg:hover rect {
  -webkit-transition: fill 300ms ease;
  transition: fill 300ms ease;
  fill: var(--color-6);
}

.c0 .header-section nav {
  grid-area: nav;
}

.c0 .header-section nav ul {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  gap: 34px;
}

.c0 .header-section nav ul li a {
  font-size: 13px;
  font-weight: 700;
  line-height: 25px;
  -webkit-letter-spacing: 2px;
  -moz-letter-spacing: 2px;
  -ms-letter-spacing: 2px;
  letter-spacing: 2px;
  -webkit-transition: color 300ms ease;
  transition: color 300ms ease;
}

.c0 .header-section nav ul li a:hover {
  color: var(--color-6);
}

@media (min-width:375px) {
  .c0 .header-section {
    max-width: 689px;
  }
}

@media (min-width:768px) {
  .c0 .header-section {
    grid-template-areas: 'logo nav cart';
    max-width: 1110px;
  }
}

<div>
  <header
    class="c0"
  >
    <section
      class="header-section"
    >
      <a
        href="/"
      >
        <svg
          class="logo-svg"
          fill="none"
          height="25"
          viewBox="0 0 143 25"
        >
          <path
            clip-rule="evenodd"
            d="M57.9755 4.10884V0H53.2131V4.10884H57.9755ZM41.8721 20.3997C43.5076 20.3997 44.9648 19.8429 46.1074 18.8803L46.5635 19.9241H50.1425V0.792094L45.3611 0.792093V6.38308C44.3548 5.75732 43.1686 5.40721 41.8721 5.40721C37.5634 5.40721 34.4943 8.52769 34.4943 12.896C34.4943 17.2644 37.5634 20.3997 41.8721 20.3997ZM7.36265 20.3849C8.99354 20.3849 10.4497 19.8476 11.5995 18.9152L12.0137 19.9093H15.7527V5.85311L12.1479 5.85285L11.6531 6.93986C10.4936 5.98222 9.01642 5.42934 7.36265 5.42934C3.06909 5.42934 0 8.52769 0 12.8809C0 17.2493 3.06909 20.3849 7.36265 20.3849ZM8.00933 16.098C6.19773 16.098 4.86614 14.7278 4.86614 12.8921C4.86614 11.0677 6.18681 9.69748 8.00933 9.69748C9.82094 9.69748 11.1525 11.0677 11.1525 12.8921C11.1525 14.7278 9.82094 16.098 8.00933 16.098ZM32.4542 13.8899C32.4542 17.823 29.6916 20.3849 25.544 20.3849C21.396 20.3849 18.6184 17.823 18.6184 13.8899V5.86794H23.4549V13.6793C23.4549 15.163 24.2516 16.0355 25.544 16.0355C26.836 16.0355 27.6177 15.1482 27.6177 13.6793V5.86794H32.4542V13.8899ZM39.3758 12.8963C39.3758 14.7317 40.7074 16.1128 42.519 16.1128C44.3306 16.1128 45.6622 14.7317 45.6622 12.8963C45.6622 11.0607 44.3306 9.67952 42.519 9.67952C40.7074 9.67952 39.3758 11.0607 39.3758 12.8963ZM58.0127 5.86768V19.9239H53.1762V5.86768H58.0127ZM68.1095 20.3849C72.6727 20.3849 75.9821 17.2384 75.9821 12.896C75.9821 8.53888 72.6727 5.40747 68.1095 5.40747C63.5315 5.40747 60.237 8.53888 60.237 12.896C60.237 17.2384 63.5315 20.3849 68.1095 20.3849ZM65.0812 12.8963C65.0812 14.7546 66.346 16.0355 68.1095 16.0358C69.873 16.0358 71.1378 14.7548 71.1378 12.8966C71.1378 11.0492 69.873 9.75709 68.1095 9.75709C66.346 9.75709 65.0812 11.038 65.0812 12.8963ZM82.9978 25V19.4663C83.9888 20.0655 85.1511 20.3997 86.4208 20.3997C90.7144 20.3997 93.7835 17.2753 93.7835 12.896C93.7835 8.51676 90.7144 5.40721 86.4208 5.40721C84.7523 5.40721 83.2662 5.98508 82.1114 6.98463L81.5056 5.86794H78.2165V25H82.9978ZM82.6307 12.8958C82.6307 14.7424 83.9623 16.1126 85.7739 16.1126C87.5743 16.1126 88.9171 14.7424 88.9171 12.8958C88.9171 11.0492 87.5855 9.679 85.7739 9.679C83.9623 9.679 82.6307 11.0492 82.6307 12.8958ZM100.839 19.9241V12.4181C100.839 10.6143 101.751 9.57462 103.215 9.57462C104.477 9.57462 105.046 10.4011 105.046 12.0222V19.9241H109.882V11.4597C109.882 7.81629 107.811 5.45225 104.587 5.45225C103.188 5.45225 101.873 5.95931 100.839 6.79279V0.792093H96.0023V19.9241H100.839ZM117.574 0V4.10884H112.811V0H117.574ZM117.611 5.86768H112.774V19.9239H117.611V5.86768ZM125.489 0.792093V19.9241H120.653V0.792093H125.489ZM135.34 20.3851C138.863 20.3851 141.704 18.3808 142.692 15.1729H137.879C137.414 15.9957 136.47 16.4911 135.34 16.4911C133.813 16.4911 132.79 15.6573 132.474 14.045H142.9C142.963 13.6103 143 13.1868 143 12.7633C143 8.63988 139.866 5.40747 135.34 5.40747C130.933 5.40747 127.714 8.57611 127.714 12.8854C127.714 17.1795 130.959 20.3851 135.34 20.3851ZM132.559 11.3639H138.236C137.811 9.95908 136.8 9.20109 135.34 9.20109C133.931 9.20109 132.951 9.96767 132.559 11.3639Z"
            fill="#fff"
            fill-rule="evenodd"
          />
        </svg>
      </a>
      <a
        href="/checkout"
      >
        <svg
          class="shopping-cart-svg"
          fill="none"
          height="20"
          viewBox="0 0 24 20"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M8.01883 13.1946H8.01776C7.64161 13.1955 7.33595 13.491 7.33595 13.8542C7.33595 14.2179 7.64268 14.5139 8.01954 14.5139H20.4154C20.793 14.5139 21.099 14.8092 21.099 15.1736C21.099 15.538 20.793 15.8333 20.4154 15.8333H19.25H9.25H8.01954C6.88876 15.8333 5.96876 14.9455 5.96876 13.8542C5.96876 13.0421 6.47843 12.343 7.20493 12.0382L4.73686 1.31944H1.18359C0.806016 1.31944 0.5 1.02412 0.5 0.659722C0.5 0.295329 0.806016 0 1.18359 0H5.28516C5.6056 0 5.88295 0.214753 5.95256 0.516611L6.44122 2.63889H23.1498C23.3643 2.63889 23.5663 2.73613 23.6956 2.9014C23.8246 3.06668 23.8659 3.28074 23.807 3.47986L21.0726 12.716C20.9888 12.9991 20.7205 13.1944 20.4154 13.1944H8.0215L8.01883 13.1946ZM9.25 15.8333C10.3987 15.8333 11.3333 16.7679 11.3333 17.9167C11.3333 19.0654 10.3987 20 9.25 20C8.10127 20 7.16667 19.0654 7.16667 17.9167C7.16667 16.7679 8.10127 15.8333 9.25 15.8333ZM19.25 15.8333C20.3987 15.8333 21.3333 16.7679 21.3333 17.9167C21.3333 19.0654 20.3987 20 19.25 20C18.1013 20 17.1667 19.0654 17.1667 17.9167C17.1667 16.7679 18.1013 15.8333 19.25 15.8333ZM19.8997 11.875L22.2435 3.95833H6.74492L8.56784 11.875H19.8997ZM9.94444 17.9167C9.94444 17.5338 9.63285 17.2222 9.25 17.2222C8.86715 17.2222 8.55556 17.5338 8.55556 17.9167C8.55556 18.2995 8.86715 18.6111 9.25 18.6111C9.63285 18.6111 9.94444 18.2995 9.94444 17.9167ZM19.25 17.2222C19.6328 17.2222 19.9444 17.5338 19.9444 17.9167C19.9444 18.2995 19.6328 18.6111 19.25 18.6111C18.8672 18.6111 18.5556 18.2995 18.5556 17.9167C18.5556 17.5338 18.8672 17.2222 19.25 17.2222Z"
            fill="#fff"
            fill-rule="evenodd"
          />
        </svg>
      </a>
    </section>
  </header>
</div>
`);
});
