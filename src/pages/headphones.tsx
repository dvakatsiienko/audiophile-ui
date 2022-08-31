/* Core */
import { NextPage } from 'next';

/* Components */
import {
    Layout, Header, Content, Footer
} from '@/components';

const HeadphonesPage: NextPage = () => {
    return (
        <Layout>
            <Header />
            <Content>
                <h1>Headphones</h1>
            </Content>
            <Footer />
        </Layout>
    );
};

export default HeadphonesPage;
