/* Core */
import { NextPage } from 'next';

/* Components */
import { Layout, HomepageContent } from '@/layout';
import {
    Header, Hero, CardNav, About, Footer
} from '@/components';
import { Testing } from '@/features';

const EarphonesPage: NextPage = () => {
    return (
        <Layout>
            <Header />

            <Hero categoryName = 'earphones' page = 'category' />

            <HomepageContent>
                <Testing
                    css = { `
                        margin-bottom: 150px;
                    ` }
                />

                <CardNav />

                <About />
            </HomepageContent>

            <Footer />
        </Layout>
    );
};

export default EarphonesPage;
