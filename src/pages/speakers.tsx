/* Core */
import { NextPage } from 'next';

/* Components */
import {
    Layout, Header, Content, Footer, H1
} from '@/components';

const SpeakersPage: NextPage = () => {
    return (
        <Layout>
            <Header />
            <Content>
                <H1>Speakers</H1>
            </Content>
            <Footer />
        </Layout>
    );
};

export default SpeakersPage;
