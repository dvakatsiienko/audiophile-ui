/* Core */
import Link from 'next/link';
import Image from 'next/future/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

/* Instruments */
import logo from './img/audiophile-logo.svg';

export const Header = () => {
    const router = useRouter();

    return (
        <SHeader>
            <Image alt = 'logo' src = { logo } />

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
        </SHeader>
    );
};

/* Styles */
const SHeader = styled.header`
    grid-area: header;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 50px;
    background-color: ${p => p.theme.palette[ 'color-2' ]};
    color: white;

    & h1 {
        justify-self: start;
    }

    & nav {
        & ul {
            display: flex;
            gap: 34px;

            & li {
                & a {
                    font-size: 13px;
                    font-weight: 700;
                    line-height: 25px;
                    letter-spacing: 2px;
                }
            }
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
