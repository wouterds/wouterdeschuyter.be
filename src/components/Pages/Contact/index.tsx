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

import styles from './styles.module.scss';

const Contact = () => {
  const [contact] = useMutation(gql`
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
  `);
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

  const onSubmit = handleSubmit((data) => {
    setIsLoading(true);
    setData(data);
    executeCaptcha();
  });

  const onVerify = useCallback(async () => {
    const { fullName, email, subject, message } = data;

    contact({ variables: { fullName, email, subject, message } })
      .then(() => {
        alert(
          "Your message has been sent, I'll get back to you as soon as possible!",
        );
        reset();
      })
      .catch(() =>
        alert('Something went wrong while trying to send your message 😟'),
      )
      .finally(() => setIsLoading(false));
  }, [contact, data, reset]);

  const onError = () => {
    setIsLoading(false);
    alert('ReCAPTCHA failed 🤔...');
  };

  return (
    <Layout>
      <Meta
        title="Contact"
        description="If you're writing for a project or to work together, please include as much details as possible (idea, goal, timeline, budget, ...). For everything else, write as you please, I'll be more than happy to reply!"
      />
      <Header />
      <Layout.Content centered editorial>
        <div className={styles.contact}>
          <h1>Contact</h1>
          <p>
            If you&apos;re writing for a project or to work together, please
            include as much details as possible (idea, goal, timeline, budget,
            ...). For everything else, write as you please, I&apos;ll be more
            than happy to reply!
          </p>
          <Form onSubmit={onSubmit}>
            <div className={styles.row}>
              <div className={styles.col}>
                <Form.Field>
                  <Form.Label
                    htmlFor="fullName"
                    hasError={errors.hasOwnProperty('fullName')}
                  >
                    Full name
                  </Form.Label>
                  <Form.Input
                    id="fullName"
                    name="fullName"
                    hasError={errors.hasOwnProperty('fullName')}
                    ref={register({ required: true })}
                  />
                </Form.Field>
              </div>
              <div className={styles.col}>
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
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>
                <Form.Field>
                  <Form.Label
                    htmlFor="subject"
                    hasError={errors.hasOwnProperty('subject')}
                  >
                    Subject
                  </Form.Label>
                  <Form.Input
                    id="subject"
                    name="subject"
                    hasError={errors.hasOwnProperty('subject')}
                    ref={register({ required: true })}
                  />
                </Form.Field>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>
                <Form.Field>
                  <Form.Label
                    htmlFor="message"
                    hasError={errors.hasOwnProperty('message')}
                  >
                    Message
                  </Form.Label>
                  <Form.Textarea
                    id="message"
                    name="message"
                    hasError={errors.hasOwnProperty('message')}
                    rows={5}
                    ref={register({ required: true })}
                  />
                </Form.Field>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>
                <Form.Field>
                  <Form.Button type="submit" isLoading={isLoading}>
                    Send message
                  </Form.Button>
                </Form.Field>
              </div>
            </div>
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
      <Footer centered />
    </Layout>
  );
};

export default Contact;
