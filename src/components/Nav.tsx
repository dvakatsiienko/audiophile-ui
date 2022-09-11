/* Core */
import Link from 'next/link';
import styled from 'styled-components';

export const Nav = (props: NavProps) => {
    return (
        <SNav className = { props.className }>
            <ul>
                <li>
                    <Link href = '/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href = '/headphones'>
                        <a>Headphones</a>
                    </Link>
                </li>
                <li>
                    <Link href = '/speakers'>
                        <a>Speakres</a>
                    </Link>
                </li>
                <li>
                    <Link href = '/earphones'>
                        <a>Earphones</a>
                    </Link>
                </li>
            </ul>
        </SNav>
    );
};
Nav.defaultProps = {
    className: 'nav',
};

/* Styles */
const SNav = styled.nav`
    grid-area: nav;

    & ul {
        display: flex;
        gap: 34px;

        & li {
            & a {
                font-size: 13px;
                font-weight: 700;
                line-height: 25px;
                letter-spacing: 2px;
                transition: color 300ms ease;

                &:hover {
                    color: var(--color-6);
                }
            }
        }
    }
`;

/* Types */
interface NavProps {
    className?: string;
}
