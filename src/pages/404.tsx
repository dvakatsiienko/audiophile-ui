/* Core */
import type { NextPage } from 'next';

/* Components */
import { Layout, HomepageContent } from '@/layout';
import { Header, Hero, Footer } from '@/components';
import { ActionButton } from '@/ui-kit';

const NotFoundPage: NextPage = () => {
    return (
        <Layout>
            <Header />
            <Hero categoryName = '404' page = 'category' />

            <HomepageContent>
                <ActionButton as = 'a' href = '/'>
                    Return to Homepage
                </ActionButton>
            </HomepageContent>
            <Footer />
        </Layout>
    );
};

export default NotFoundPage;
