import styled from 'styled-components';
import DocumentMeta from 'react-document-meta';

import Countdown from '@components/Countdown';
import About from '@components/About';
import Gallery from '@components/Gallery';
import Message from '@components/Forms/Message';

// Assets
import HeroBG from '@assets/images/bg.webp';
import HeroImg from '@assets/images/hero.png';

function Home() {
  const Hero = styled.div`
    background-image: url(${HeroBG});

    /* Set a specific height */
    height: 100vh;

    /* Position and center the image to scale nicely on all screens */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const HeroLogo = styled.img`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 50%;
  `;

  const meta = {
    title: 'Julianne & Renato - Página Inicial',
    description: 'O amor move e constrói e quem o encontra tem a certeza de que a vida já valeu a pena. Quem o apoia aprende que a vida sempre tem sentido para quem acredita na beleza dela',
    canonical: 'http://renatoejulianne.com',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags'
      }
    }
  };

  return (
    <DocumentMeta {...meta}>
      <Hero>
        <HeroLogo src={HeroImg} alt="Imagem do hero" />
      </Hero>
      <Countdown date={`2023-02-04T00:00:00`} />
      <About />
      <Gallery />
      <Message />
    </DocumentMeta>
  );
}

export default Home;
