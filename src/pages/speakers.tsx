/* Core */
import { NextPage } from 'next';

/* Components */
import {
    Layout, Header, Content, Footer
} from '@/components';

const SpeakersPage: NextPage = () => {
    return (
        <Layout>
            <Header />
            <Content>
                <h1>Speakers</h1>
            </Content>
            <Footer />
        </Layout>
    );
};

export default SpeakersPage;
