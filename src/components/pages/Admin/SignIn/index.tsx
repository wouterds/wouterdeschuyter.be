import React from 'react';
import Layout from 'components/Layout';
import Form from 'components/Form';

const SignIn = () => {
  return (
    <Layout>
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
          <Form.Input type="submit" value="Sign in" />
        </Form.Field>
      </Form>
    </Layout>
  );
};

export default SignIn;
