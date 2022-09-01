/* Core */
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema: yup.SchemaOf<FormShape> = yup
    .object({
        name:  yup.string().min(4, 'Minimum ${min} characters.').required('Required'),
        email: yup.string().email('Should be a valid email.').required('Required.'),
        phone: yup.string().min(4, 'Minimum ${min} characters.').required('Required.'),
    })
    .required();

export const resolver = yupResolver(schema);

/* Types */
export interface FormShape {
    name: string;
    email: string;
    phone: string;
}
