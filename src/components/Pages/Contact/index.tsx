import React, { FormEvent, useRef, useCallback } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Form from 'components/Form';
import { Container, Row, Col } from './styles';

const Contact = () => {
  const recaptcha = useRef<ReCAPTCHA>(null);
  const executeCaptcha = useCallback(() => {
    if (!recaptcha.current) {
      return;
    }

    recaptcha.current.execute();
  }, [recaptcha]);

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      executeCaptcha();
    },
    [executeCaptcha],
  );

  const onVerify = () => {
    console.log('✅');
  };

  return (
    <Layout>
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
                  <Form.Input id="fullName" name="fullName" />
                </Form.Field>
              </Col>
              <Col>
                <Form.Field>
                  <Form.Label htmlFor="email">Email address</Form.Label>
                  <Form.Input id="email" name="email" type="email" />
                </Form.Field>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Field>
                  <Form.Label htmlFor="subject">Subject</Form.Label>
                  <Form.Input id="subject" name="subject" />
                </Form.Field>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Field>
                  <Form.Label htmlFor="message">Message</Form.Label>
                  <Form.Textarea id="message" name="message" rows={5} />
                </Form.Field>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Field>
                  <Form.Button type="submit">Send message</Form.Button>
                </Form.Field>
              </Col>
            </Row>
            <ReCAPTCHA
              ref={recaptcha}
              size="invisible"
              sitekey={`${process.env.RECAPTCHA_SITE_KEY}`}
              onChange={onVerify}
            />
          </Form>
        </Container>
      </Layout.Content>
      <Footer centered />
    </Layout>
  );
};

export default Contact;
