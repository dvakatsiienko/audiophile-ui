/* Core */
import { NextPage } from 'next';

/* Components */
import { Layout, HomepageContent } from '@/layout';
import {
    Header, Hero, CardNav, About, Footer
} from '@/components';

const SpeakersPage: NextPage = () => {
    return (
        <Layout>
            <Header />

            <Hero categoryName = 'speakers' page = 'category' />

            <HomepageContent>
                <CardNav />

                <About />
            </HomepageContent>

            <Footer />
        </Layout>
    );
};

export default SpeakersPage;
