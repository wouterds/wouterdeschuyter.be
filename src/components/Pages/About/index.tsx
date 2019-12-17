import React, { useState, useEffect } from 'react';
import { useAmp } from 'next/amp';
import { differenceInMilliseconds } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedinIn,
  faFacebookF,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Meta from 'components/Meta';
import { Container, Social, SocialLink } from './styles';

export const config = { amp: 'hybrid' };

const getAge = () =>
  (
    differenceInMilliseconds(new Date(), new Date('13 December 1992')) /
    (365 * 24 * 60 * 60) /
    1000
  ).toFixed(9);

const About = () => {
  const [age, setAge] = useState(getAge);
  const isAmp = useAmp();

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(getAge());
    }, 100);

    return () => clearInterval(interval);
  }, [age]);

  return (
    <Layout>
      <Meta
        title="About - Wouter De Schuyter"
        description={`Hey, I'm Wouter! Currently ${Math.round(
          parseInt(getAge()),
        )} years old and passionate about all things digital really. When not creating kickass web or mobile applications I'm probably fiddling around with electronics.`}
      />
      <Header />
      <Layout.Content centered editorial>
        <Container>
          <h1>About</h1>
          <p>
            Hey 👋, I&apos;m Wouter! Currently{' '}
            <span className="age">{age}</span> years old and passionate about
            all things digital really.
          </p>
          <p>
            I studied{' '}
            <a
              href="https://devine.be"
              target="_blank"
              rel="noopener noreferrer"
            >
              Digital Design &amp; Development
            </a>{' '}
            🎓 at Howest University College and am currently working as a Senior
            Full Stack Developer at a crypto startup;{' '}
            <a
              href="https://delta.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Delta
            </a>{' '}
            (recently been{' '}
            <a
              href="https://techcrunch.com/2019/11/06/investment-platform-etoro-acquires-crypto-portfolio-tracker-app-delta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              acquired by eToro
            </a>
            ). Before this I also worked at a few other companies such as the
            scale-up{' '}
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
            agency &amp; real estate startup{' '}
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
            When I&apos;m not creating web apps I&apos;m most likely fiddling
            around with electronics; working on fun projects using Arduino and
            Raspberry Pi ⚡️. Besides all of that I really love travelling,
            trying new things and pushing my own limits. Also kind of a data
            geek, charts &amp; stats are real motivators for me 📈 (loyal Fitbit
            user over here).
          </p>
          <p>
            Since 2017 I&apos;m also involved in the crypto space, it&apos;s
            probably one of the most interesting things I&apos;ve come across
            ever since I learned programming. To me, Bitcoin really is a magical
            thing 🔮.
          </p>
          <p>Oh right, also a cat person 🐈!</p>

          {!isAmp && (
            <Social>
              <h2>Connect with me</h2>

              <SocialLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/wouterds"
                title="Twitter"
                twitter
              >
                <FontAwesomeIcon icon={faTwitter} />
              </SocialLink>

              <SocialLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://facebook.com/wouter.de.schuyter"
                title="Facebook"
                facebook
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </SocialLink>
              <SocialLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/wouterds"
                title="Instagram"
                instagram
              >
                <FontAwesomeIcon icon={faInstagram} />
              </SocialLink>
              <SocialLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://open.spotify.com/user/wouterds"
                title="Spotify"
                spotify
              >
                <FontAwesomeIcon icon={faSpotify} />
              </SocialLink>
              <SocialLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/in/wouterds"
                title="Linked In"
                linkedIn
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </SocialLink>
              <SocialLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/wouterds"
                title="Github"
                github
              >
                <FontAwesomeIcon icon={faGithub} />
              </SocialLink>
            </Social>
          )}
        </Container>
      </Layout.Content>
      <Footer centered />
    </Layout>
  );
};

export default About;
