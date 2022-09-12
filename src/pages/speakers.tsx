/* Core */
import { NextPage } from 'next';

/* Components */
import {
    Layout, Header, Hero, Content, Footer
} from '@/components';
import { H1 } from '@/ui-kit';

const SpeakersPage: NextPage = () => {
    return (
        <Layout>
            <Header />

            <Hero categoryName = 'speakers' page = 'category' />

            <Content>
                <H1>Speakers</H1>
            </Content>

            <Footer />
        </Layout>
    );
};

export default SpeakersPage;
