/* Core */
import { NextPage } from 'next';

/* Components */
import { Layout, HomepageContent } from '@/layout';
import {
    Header, Hero, CardNav, Footer
} from '@/components';

const SpeakerByIdPage: NextPage = () => {
    return (
        <Layout>
            <Header />

            <Hero categoryName = 'speakers' page = 'category' />

            <HomepageContent>
                <CardNav />
            </HomepageContent>

            <Footer />
        </Layout>
    );
};

export default SpeakerByIdPage;
