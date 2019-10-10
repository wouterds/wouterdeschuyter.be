import React, { useState, useRef, useCallback } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import useForm from 'react-hook-form';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Form from 'components/Form';
import Meta from 'components/Meta';
import { Container, Row, Col } from './styles';

const CONTACT = gql`
  mutation Contact(
    $fullName: String!
    $email: String!
    $subject: String!
    $message: String!
  ) {
    contact(
      name: $fullName
      email: $email
      subject: $subject
      message: $message
    )
  }
`;

const Contact = () => {
  const [contact] = useMutation(CONTACT);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>({});
  const { register, handleSubmit, errors, reset } = useForm({
    submitFocusError: false,
  });

  const recaptcha = useRef<ReCAPTCHA>(null);
  const executeCaptcha = useCallback(() => {
    if (!recaptcha.current) {
      return;
    }

    recaptcha.current.execute();
  }, [recaptcha]);

  const onSubmit = useCallback(
    handleSubmit(data => {
      setIsLoading(true);
      setData(data);
      executeCaptcha();
    }),
    [handleSubmit, executeCaptcha],
  );

  const onVerify = useCallback(async () => {
    const { fullName, email, subject, message } = data;

    contact({ variables: { fullName, email, subject, message } })
      .then(() => {
        toast(
          "Your message has been sent, I'll get back to you as soon as possible!",
          { type: 'success' },
        );
        reset();
      })
      .catch(() =>
        toast('Something went wrong while trying to send your message 😟', {
          type: 'error',
        }),
      )
      .finally(() => setIsLoading(false));
  }, [contact, data, reset]);

  const onError = () => {
    setIsLoading(false);

    toast('ReCAPTCHA failed 🤔...', {
      type: 'error',
    });
  };

  return (
    <Layout>
      <Meta
        title="Contact - Wouter De Schuyter"
        description="If you're writing for a project or to work together, please include as much details as possible (idea, goal, timeline, budget, ...). For everything else, write as you please, I'll be more than happy to reply!"
      />
      <Header />
      <Layout.Content centered editorial>
        <Container>
          <h1>Contact</h1>
          <p>
            If you&apos;re writing for a project or to work together, please
            include as much details as possible (idea, goal, timeline, budget,
            ...). For everything else, write as you please, I&apos;ll be more
            than happy to reply!
          </p>
          <Form onSubmit={onSubmit}>
            <Row>
              <Col>
                <Form.Field>
                  <Form.Label htmlFor="fullName">Full name</Form.Label>
                  <Form.Input
                    id="fullName"
                    name="fullName"
                    hasError={errors.hasOwnProperty('fullName')}
                    ref={register({ required: true })}
                  />
                </Form.Field>
              </Col>
              <Col>
                <Form.Field>
                  <Form.Label htmlFor="email">Email address</Form.Label>
                  <Form.Input
                    id="email"
                    name="email"
                    type="email"
                    hasError={errors.hasOwnProperty('email')}
                    ref={register({ required: true })}
                  />
                </Form.Field>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Field>
                  <Form.Label htmlFor="subject">Subject</Form.Label>
                  <Form.Input
                    id="subject"
                    name="subject"
                    hasError={errors.hasOwnProperty('subject')}
                    ref={register({ required: true })}
                  />
                </Form.Field>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Field>
                  <Form.Label htmlFor="message">Message</Form.Label>
                  <Form.Textarea
                    id="message"
                    name="message"
                    hasError={errors.hasOwnProperty('message')}
                    rows={5}
                    ref={register({ required: true })}
                  />
                </Form.Field>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Field>
                  <Form.Button type="submit" isLoading={isLoading}>
                    Send message
                  </Form.Button>
                </Form.Field>
              </Col>
            </Row>
            <ReCAPTCHA
              ref={recaptcha}
              size="invisible"
              sitekey={`${process.env.RECAPTCHA_SITE_KEY}`}
              onChange={onVerify}
              onErrored={onError}
            />
          </Form>
        </Container>
      </Layout.Content>
      <Footer centered />
    </Layout>
  );
};

export default Contact;
