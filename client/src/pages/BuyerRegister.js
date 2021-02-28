import { Form, Col } from 'react-bootstrap';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

import useForm from '../lib/useForm';
import { StyledForm, StyledButton } from '../lib/Form';

const SellerRegister = () => {
    const { form, handleChange } = useForm({
        username: 'Test user',
        email: 'user@gmail.com',
        password: '123456',
    });

    const [registerSeller, { loading }] = useMutation(REGISTER_BUYER_MUTATION, {
        update(proxy, result) {
            console.log(result);
        },
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        registerSeller({ variables: form });
    };

    return (
        <div className='mt-4'>
            <StyledForm onSubmit={onSubmit}>
                <h2>Become a Shopper now!</h2>

                <Form.Group as={Col} controlId='formGridEmail'>
                    <Form.Label>User name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='User name'
                        name='username'
                        value={form.username}
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

                <StyledButton variant='primary' type='submit'>
                    Register
                </StyledButton>
            </StyledForm>
        </div>
    );
};

const REGISTER_BUYER_MUTATION = gql`
    mutation registerBuyer(
        $username: String!
        $email: String!
        $password: String!
    ) {
        registerBuyer(
            registerInput: {
                username: $username
                email: $email
                password: $password
            }
        ) {
            id
            username
            email
            token
        }
    }
`;

export default SellerRegister;
