/* Core */
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';

/* Instruments */
import { resolver, type FormShape } from './resolver';

export const CheckoutForm = (props: CheckoutFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormShape>({
        resolver,
        mode:          'all',
        defaultValues: {
            name:  'dima',
            email: 'test@email.com',
            phone: '111-11-11',
        },
    });

    const submit: SubmitHandler<FormShape> = data => {
        console.log(data);
        props.onSubmit();
    };

    return (
        <Form onSubmit = { handleSubmit(submit) }>
            <h6>Billing Details</h6>

            <div>
                <input { ...register('name') } />
                <span>{errors.name?.message}</span>
            </div>

            <div>
                <input { ...register('email') } />
                <span>{errors.email?.message}</span>
            </div>

            <div>
                <input { ...register('phone') } />
                <span>{errors.phone?.message}</span>
            </div>

            <button type = 'submit'>Continue & pay</button>
        </Form>
    );
};

/* Styles */
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;

    & div {
        display: flex;
        flex-direction: column;

        & span {
            min-height: 20px;
        }
    }
`;

/* Types */
interface CheckoutFormProps {
    onSubmit: () => void;
}
