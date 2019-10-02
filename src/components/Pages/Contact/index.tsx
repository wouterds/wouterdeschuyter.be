import React from 'react';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Form from 'components/Form';
import { Container, Row, Col } from './styles';

const Contact = () => {
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
          <Form>
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
          </Form>
        </Container>
      </Layout.Content>
      <Footer centered />
    </Layout>
  );
};

export default Contact;
