/* Core */
import Image from 'next/image';
import type { NextPage } from 'next';

/* Components */
import { Button } from '@/components';

/* Instruments */
import styles from '../theme/Index.module.scss';

const Index: NextPage = () => {
    return (
        <div className = { styles.container }>
            <main className = { styles.main }>
                <h1 className = { styles.title }>Audiophile</h1>

                <p className = { styles.description }>
                    Get started by editing <code className = { styles.code }>pages/index.tsx</code>
                </p>
                <Button />
            </main>

            <footer className = { styles.footer }>
                <a
                    href = 'https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                    rel = 'noopener noreferrer'
                    target = '_blank'
                >
                    Powered by{' '}
                    <span className = { styles.logo }>
                        <Image alt = 'Vercel Logo' height = { 16 } src = '/vercel.svg' width = { 72 } />
                    </span>
                </a>
            </footer>
        </div>
    );
};

export default Index;
