import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import { differenceInMilliseconds, differenceInYears } from 'date-fns';
import React, { useEffect, useState } from 'react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSteam,
  FaTwitter,
} from 'react-icons/fa';

import styles from './styles.module.css';

const getAge = () =>
  (
    differenceInMilliseconds(new Date(), new Date('13 December 1992')) /
    (365 * 24 * 60 * 60) /
    1000
  ).toFixed(9);

const yearsExperience = differenceInYears(new Date(), new Date('2014-06-01'));

const About = () => {
  const [age, setAge] = useState(getAge);

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(getAge());
    }, 100);

    return () => clearInterval(interval);
  }, [age]);

  return (
    <Layout>
      <Meta
        title="About"
        description={`Hey, I'm Wouter, ${Math.round(
          parseInt(getAge()),
        )} years old and passionate about all things digital really. When not creating kickass digital applications, I'm probably fiddling around with electronics.`}
      />
      <Header />
      <Layout.Content editorial>
        <div className={styles.about}>
          <h1>About</h1>
          <p>
            Hey 👋, I&apos;m Wouter, <span className={styles.age}>{age}</span>{' '}
            years old and passionate about all things digital really.
          </p>
          <p>
            I studied{' '}
            <a
              href="https://devine.be/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Digital Design &amp; Development
            </a>{' '}
            🎓 at Howest University College and currently I&apos;m freelancing
            as a Full Stack Developer 💻. I have about {yearsExperience} years
            of experience as a professional web &amp; mobile developer and in
            the last few years, I&apos;ve been focusing a lot on React, React
            Native &amp; Node.js applications.
          </p>
          <p>
            Before I started freelancing &amp; contracting I used to work for a
            startup{' '}
            <a
              href="https://delta.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Delta
            </a>
            , which has been{' '}
            <a
              href="https://techcrunch.com/2019/11/06/investment-platform-etoro-acquires-crypto-portfolio-tracker-app-delta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              acquired by eToro
            </a>
            . I also worked at a few other startups &amp; scale-ups such as{' '}
            <a
              href="https://teamleader.eu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Teamleader
            </a>
            ,{' '}
            <a
              href="https://inthepocket.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              In The Pocket
            </a>{' '}
            &amp;{' '}
            <a
              href="https://realo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Realo
            </a>
            .
          </p>
          <p>
            When I&apos;m not creating kickass digital applications, I&apos;m
            probably fiddling around with electronics using Arduino, ESP and
            Raspberry Pi ⚡️. Besides that, I really love traveling, trying new
            things and pushing my own limits. Also kind of a data geek, charts
            &amp; stats are real motivators for me 📈.
          </p>
          <p>
            Since 2017 heavily involved in the crypto space and really started
            to appreciate the power of decentralized applications. And to be
            honest, it&apos;s probably one of the most exciting things I&apos;ve
            come across lately 👀!
          </p>
          <p>Also a cat person 🐈.</p>

          <h2>Connect with me</h2>
          <div className={styles.social}>
            <a
              href="http://linkedin.com/in/wouterds"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnLinkedIn}
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href="http://github.com/wouterds"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnGitHub}
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              href="https://twitter.com/wouterds"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnTwitter}
            >
              <FaTwitter />
              <span>Twitter</span>
            </a>
            <a
              href="https://fb.me/wouter.de.schuyter"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnFacebook}
            >
              <FaFacebook />
              <span>Facebook</span>
            </a>
            <a
              href="https://instagram.com/wouterds"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnInstagram}
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>
            <a
              href="https://steamcommunity.com/id/wouterds"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSteam}
            >
              <FaSteam />
              <span>Steam</span>
            </a>
          </div>
        </div>
      </Layout.Content>
      <Footer />
    </Layout>
  );
};

export default About;
