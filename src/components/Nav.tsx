/* Core */
import Link from 'next/link';
import styled from 'styled-components';

export const Nav = (props: NavProps) => {
    return (
        <Container className = { props.className }>
            <ul>
                <li>
                    <Link href = '/'>Home</Link>
                </li>
                <li>
                    <Link href = '/headphones'>Headphones</Link>
                </li>
                <li>
                    <Link href = '/speakers'>Speakres</Link>
                </li>
                <li>
                    <Link href = '/earphones'>Earphones</Link>
                </li>
            </ul>
        </Container>
    );
};
Nav.defaultProps = {
    className: 'nav',
};

/* Styles */
const Container = styled.nav`
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
