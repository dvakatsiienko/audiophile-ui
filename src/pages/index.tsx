/* Core */
import type { NextPage } from 'next';

/* Components */
import {
    Layout, Header, Content, Footer, Button
} from '@/components';

const Index: NextPage = () => {
    return (
        <Layout>
            <Header />

            <Content>
                <h1>Audiophile</h1>

                <Button />
            </Content>

            <Footer />
        </Layout>
    );
};

export default Index;
