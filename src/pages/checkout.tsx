/* Core */
import type { NextPage } from 'next';

/* Components */
import {
    Layout, Header, Content, Footer
} from '@/components';
import { CheckoutForm } from '@/features';
import { H1 } from '@/ui-kit';

const CheckoutPage: NextPage = () => {
    return (
        <Layout>
            <Header />

            <Content>
                <H1 data-testid = 'heading'>Checkout</H1>
                <CheckoutForm onSubmit = { () => alert('+') } />
            </Content>

            <Footer />
        </Layout>
    );
};

export default CheckoutPage;
