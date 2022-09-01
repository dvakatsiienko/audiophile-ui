/* Core */
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export const Header = () => {
    const router = useRouter();

    return (
        <StyledHeader>
            <h1>Audiophile</h1>

            <nav>
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
            </nav>

            <Cart onClick = { () => router.push('/checkout') } />
        </StyledHeader>
    );
};

/* Styles */
const StyledHeader = styled.header`
    grid-area: header;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 50px;
    background-color: ${p => p.theme.colors[ 'color-3' ]};
    color: white;

    & h1 {
        justify-self: start;
    }

    & nav {
        & ul {
            display: flex;
            gap: 34px;
        }
    }
`;

const Cart = styled.div`
    width: 16px;
    height: 16px;
    background-color: #fff;
    border-radius: 50%;
    cursor: pointer;
`;
