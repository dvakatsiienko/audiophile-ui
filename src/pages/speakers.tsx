/* Core */
import { NextPage } from 'next';

/* Components */
import {
    Layout, Header, Content, Footer
} from '@/components';
import { H1 } from '@/ui';

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
