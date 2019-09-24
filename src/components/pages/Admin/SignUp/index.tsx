import React, { useState, useEffect } from 'react';
import Form from 'components/Form';
import { Container, backgroundColor } from './styles';
import Layout from 'components/Layout';
import useForm from 'react-hook-form';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useCookie, Cookies } from 'hooks/cookie';

const SIGN_UP = gql`
  mutation SignUp(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    signUp(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    )
  }
`;

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    submitFocusError: false,
  });
  const [signUp] = useMutation(SIGN_UP);
  const [jwt, setJwt] = useCookie(Cookies.JWT);

  const onSubmit = handleSubmit(data => {
    const { firstName, lastName, email, password } = data;

    setIsLoading(true);

    signUp({ variables: { firstName, lastName, email, password } })
      .then(({ data }) => {
        const { signUp: jwt } = data;
        setJwt(jwt);
      })
      .catch(e => console.error(e.message))
      .finally(() => setIsLoading(false));
  });

  useEffect(() => {
    console.log({ jwt });
  }, [jwt]);

  return (
    <Layout backgroundColor={backgroundColor}>
      <Container>
        <h2>Sign up</h2>
        <Form onSubmit={onSubmit}>
          <Form.Field>
            <Form.Label htmlFor="firstName">First name</Form.Label>
            <Form.Input
              id="firstName"
              name="firstName"
              hasError={errors.hasOwnProperty('firstName')}
              ref={register({ required: true })}
            />
          </Form.Field>
          <Form.Field>
            <Form.Label htmlFor="lastName">Last name</Form.Label>
            <Form.Input
              id="lastName"
              name="lastName"
              hasError={errors.hasOwnProperty('lastName')}
              ref={register({ required: true })}
            />
          </Form.Field>
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
              Sign up
            </Form.Button>
          </Form.Field>
        </Form>
      </Container>
    </Layout>
  );
};

export default SignUp;
