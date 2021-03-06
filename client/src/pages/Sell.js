import { Form, Col } from 'react-bootstrap';
import { useMutation } from '@apollo/client';

import useForm from '../lib/useForm';
import { StyledForm, StyledButton } from '../lib/Form';
import { toDataURL } from '../lib/util';
import * as alertify from '../lib/alertify';
import { ADD_BOOK_MUTATION, cacheUpdateAddBook } from '../lib/graphql';

const Sell = ({ history, authenticate, isLoggedIn }) => {
    const { form, handleChange, clearForm } = useForm({
        title: 'Unleash the power within',
        author: 'Tony Robbins',
        description: 'This book will change your life',
        price: 37,
        image: '',
    });

    const [addBook, { loading }] = useMutation(ADD_BOOK_MUTATION, {
        update(cache, result) {
            clearForm();
            alertify.success('Book added successfully');
            cacheUpdateAddBook(cache, result);
        },
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        const formToSubmit = { ...form };

        if (form.image && form.image !== '') {
            try {
                toDataURL(form.image).then((base64Image) => {
                    formToSubmit.image = base64Image;
                    addBook({ variables: formToSubmit });
                });
            } catch (error) {
                throw new Error(error);
            }
        } else {
            alertify.error('Please choose an image for this book');
        }
    };

    return (
        <div className='my-4'>
            <StyledForm onSubmit={onSubmit}>
                <h2>Sell new Book</h2>

                <Form.Group as={Col}>
                    <Form.Label>Title *</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Title'
                        name='title'
                        value={form.title}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Author *</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Author'
                        name='author'
                        value={form.author}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Description'
                        name='description'
                        value={form.description}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Price *</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='Price'
                        name='price'
                        value={form.price}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.File
                        className='px-3'
                        id='image'
                        label='Image *'
                        name='image'
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <StyledButton variant='primary' type='submit'>
                    + Add book
                </StyledButton>
            </StyledForm>
        </div>
    );
};

export default Sell;