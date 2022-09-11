/* Core */
import { NextPage } from 'next';

/* Components */
import {
    Layout, Header, Hero, Content, Footer
} from '@/components';
import { Testing } from '@/features';

const EarphonesPage: NextPage = () => {
    return (
        <Layout>
            <Header />

            <Hero categoryName = 'earphones' page = 'category' />

            <Content>
                <Testing />
            </Content>

            <Footer />
        </Layout>
    );
};

export default EarphonesPage;
