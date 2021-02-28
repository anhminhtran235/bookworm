import { Form, Col } from 'react-bootstrap';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

import useForm from '../lib/useForm';
import { toDataURL } from '../lib/util';
import { StyledForm, StyledButton } from '../lib/Form';

const SellerRegister = () => {
    const { form, handleChange } = useForm({
        shopName: 'Test shop',
        email: 'shop@gmail.com',
        password: '123456',
        avatar: '',
    });

    const [registerSeller, { loading }] = useMutation(
        REGISTER_SELLER_MUTATION,
        {
            update(proxy, result) {
                console.log(result);
            },
        }
    );

    const onSubmit = async (e) => {
        e.preventDefault();
        const formToSubmit = {};
        formToSubmit.shopName = form.shopName;
        formToSubmit.email = form.email;
        formToSubmit.password = form.password;

        if (form.avatar && form.avatar !== '') {
            try {
                toDataURL(form.avatar).then((base64Image) => {
                    formToSubmit.avatar = base64Image;
                    registerSeller({ variables: formToSubmit });
                });
            } catch (error) {
                throw new Error(error);
            }
        } else {
            registerSeller({ variables: formToSubmit });
        }
    };

    return (
        <div className='mt-4'>
            <StyledForm onSubmit={onSubmit}>
                <h2>Become a Seller now!</h2>

                <Form.Group as={Col} controlId='formGridEmail'>
                    <Form.Label>Shop name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Shop name'
                        name='shopName'
                        value={form.shopName}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={form.password}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.File
                        className='px-3'
                        id='avatar'
                        label='Avatar'
                        name='avatar'
                        onChange={handleChange}
                    />
                </Form.Group>

                <StyledButton variant='primary' type='submit'>
                    Register
                </StyledButton>
            </StyledForm>
        </div>
    );
};

const REGISTER_SELLER_MUTATION = gql`
    mutation registerSeller(
        $shopName: String!
        $email: String!
        $password: String!
        $avatar: String
    ) {
        registerSeller(
            registerInput: {
                shopName: $shopName
                email: $email
                password: $password
                avatar: $avatar
            }
        ) {
            id
            shopName
            email
            avatar
            token
        }
    }
`;

export default SellerRegister;
