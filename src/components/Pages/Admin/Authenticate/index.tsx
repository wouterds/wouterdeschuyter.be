import { useMutation } from '@apollo/react-hooks';
import Footer from 'components/Footer';
import Form from 'components/Form';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import gql from 'graphql-tag';
import React, { useCallback, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';

const AdminAuthenticate = () => {
  const [createAuthenticationRequest] = useMutation(gql`
    mutation createAuthenticationRequest($email: String!) {
      createAuthenticationRequest(email: $email)
    }
  `);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>({});
  const { register, handleSubmit, errors, reset } = useForm({
    shouldFocusError: false,
  });

  const recaptcha = useRef<ReCAPTCHA>(null);
  const executeCaptcha = useCallback(() => {
    if (!recaptcha.current) {
      return;
    }

    recaptcha.current.execute();
  }, [recaptcha]);

  const onSubmit = handleSubmit((data) => {
    setIsLoading(true);
    setData(data);
    executeCaptcha();
  });

  const onVerify = useCallback(async () => {
    const { email } = data;

    createAuthenticationRequest({ variables: { email } })
      .then(() => {
        alert('Check your mail!');
        reset();
      })
      .catch(() => alert('Something went wrong'))
      .finally(() => setIsLoading(false));
  }, [createAuthenticationRequest, data, reset]);

  const onError = () => {
    setIsLoading(false);
    alert('ReCAPTCHA failed');
  };

  return (
    <Layout>
      <Meta title="Authenticate" />
      <Header />
      <Layout.Content editorial>
        <h1>Authenticate</h1>
        <div style={{ maxWidth: '480px' }}>
          <Form onSubmit={onSubmit}>
            <Form.Field>
              <Form.Label
                htmlFor="email"
                hasError={errors.hasOwnProperty('email')}
              >
                Email address
              </Form.Label>
              <Form.Input
                id="email"
                name="email"
                type="email"
                hasError={errors.hasOwnProperty('email')}
                ref={register({ required: true })}
              />
            </Form.Field>
            <Form.Field>
              <Form.Button type="submit" isLoading={isLoading}>
                Send authentication link
              </Form.Button>
            </Form.Field>
            <ReCAPTCHA
              ref={recaptcha}
              size="invisible"
              sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
              onChange={onVerify}
              onErrored={onError}
            />
          </Form>
        </div>
      </Layout.Content>
      <Footer />
    </Layout>
  );
};

export default AdminAuthenticate;
