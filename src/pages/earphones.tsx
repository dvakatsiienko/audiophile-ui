/* Core */
import { NextPage } from 'next';

/* Components */
import {
    Layout, Header, Content, Footer
} from '@/components';
import { Testing } from '@/features';

const EarphonesPage: NextPage = () => {
    return (
        <Layout>
            <Header />
            <Content>
                <h1>Earphones</h1>
                <Testing />
            </Content>
            <Footer />
        </Layout>
    );
};

export default EarphonesPage;
