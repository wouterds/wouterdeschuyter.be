import React from 'react';
// import Twemoji from 'react-twemoji';
import { Container } from './styles';
import ExperimentsBar from 'components/ExperimentsBar';
import { useCookie, Cookies } from 'hooks/useCookie';
import { useAmp } from 'next/amp';
import { useRouter } from 'next/router';

interface Props {
  centered?: boolean;
}

export const Footer = (props: Props) => {
  const { centered = false } = props;
  const isAmp = useAmp();
  const router = useRouter();
  const [isVisible, setIsVisible] = useCookie(Cookies.DATA_BAR);

  const isExperiments = router.pathname.indexOf('/experiments') > -1;

  return (
    <>
      <Container centered={centered}>
        <p>&copy; Copyright {new Date().getFullYear()} Wouter De Schuyter</p>
        <p>
          Made using React, GraphQL, Node.js and a few other packages ✨
          {/* {isVisible !== 'true' && !isAmp && !isExperiments && (
            <Twemoji options={{ className: 'twemoji' }} noWrapper>
              <a
                title="Ooooooooh, what would happen if you click?"
                onClick={() => setIsVisible('true')}
              >
                🧪
              </a>
            </Twemoji>
          )} */}
        </p>
      </Container>
      {!isAmp && (isVisible === 'true' || isExperiments || true) && (
        <ExperimentsBar onClose={() => setIsVisible('false')} />
      )}
    </>
  );
};

export default Footer;
