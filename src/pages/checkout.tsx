/* Core */
import type { NextPage } from 'next';

/* Components */
import {
    Layout, Header, Content, Footer
} from '@/components';
import { CheckoutForm } from '@/features';

const CheckoutPage: NextPage = () => {
    return (
        <Layout>
            <Header />
            <Content>
                <h1>Checkout</h1>
                <CheckoutForm onSubmit = { () => null } />
            </Content>
            <Footer />
        </Layout>
    );
};

export default CheckoutPage;
