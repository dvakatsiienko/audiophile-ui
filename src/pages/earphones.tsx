/* Core */
import { NextPage } from 'next';

/* Components */
import {
    Layout, Header, Content, Footer
} from '@/components';

const EarphonesPage: NextPage = () => {
    return (
        <Layout>
            <Header />
            <Content>
                <h1>Earphones</h1>
            </Content>
            <Footer />
        </Layout>
    );
};

export default EarphonesPage;
