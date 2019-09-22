import React from 'react';
import Form from 'components/Form';
import { Container } from './styles';
import Layout from 'components/Layout';

const SignIn = () => {
  return (
    <Layout>
      <Container>
        <h1>Sign in</h1>
        <Form>
          <Form.Field>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Input id="email" type="email" />
          </Form.Field>
          <Form.Field>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Input id="password" type="password" />
          </Form.Field>
          <Form.Field>
            <Form.Button type="submit">Sign in</Form.Button>
          </Form.Field>
        </Form>
      </Container>
    </Layout>
  );
};

export default SignIn;
