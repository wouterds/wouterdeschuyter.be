import React, { useState } from 'react';
import Form from 'components/Form';
import { Container, backgroundColor } from './styles';
import Layout from 'components/Layout';
import useForm from 'react-hook-form';

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    submitFocusError: false,
  });

  const onSubmit = handleSubmit(data => {
    setIsLoading(true);

    console.log({ data });

    setTimeout(() => setIsLoading(false), 1000);
  });

  return (
    <Layout backgroundColor={backgroundColor}>
      <Container>
        <h1>Sign in</h1>
        <Form onSubmit={onSubmit}>
          <Form.Field>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Input
              id="email"
              name="email"
              type="email"
              hasError={errors.hasOwnProperty('email')}
              ref={register({ required: true })}
            />
          </Form.Field>
          <Form.Field>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Input
              id="password"
              name="password"
              type="password"
              hasError={errors.hasOwnProperty('password')}
              ref={register({ required: true })}
            />
          </Form.Field>
          <Form.Field>
            <Form.Button type="submit" isLoading={isLoading}>
              Sign in
            </Form.Button>
          </Form.Field>
        </Form>
      </Container>
    </Layout>
  );
};

export default SignIn;
