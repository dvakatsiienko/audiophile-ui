/* Core */
import type { NextPage } from 'next';

/* Components */
import { Layout, HomepageContent } from '@/layout';
import { Header, Footer } from '@/components';
import { CheckoutForm } from '@/features';
import { H1 } from '@/ui-kit';

const CheckoutPage: NextPage = () => {
    return (
        <Layout>
            <Header />

            <HomepageContent>
                <H1 data-testid = 'heading'>Checkout</H1>
                <CheckoutForm onSubmit = { () => alert('+') } />
            </HomepageContent>

            <Footer />
        </Layout>
    );
};

export default CheckoutPage;
