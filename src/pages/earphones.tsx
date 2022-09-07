/* Core */
import { NextPage } from 'next';

/* Components */
import {
    Layout, Header, Content, Footer, H1
} from '@/components';
import { Testing } from '@/features';

const EarphonesPage: NextPage = () => {
    return (
        <Layout>
            <Header />
            <Content>
                <H1>Earphones</H1>
                <Testing />
            </Content>
            <Footer />
        </Layout>
    );
};

export default EarphonesPage;
