/* Core */
import { NextPage } from 'next';

/* Components */
import {
    Layout, Header, Hero, Content, Footer
} from '@/components';
import { Testing } from '@/features';
import { H1 } from '@/ui';

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
