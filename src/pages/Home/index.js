import styled from 'styled-components';
import HeroImg from '../../assets/images/bg.webp';
import Countdown from '../../components/Countdown';
import About from '../../components/About';
import Gallery from '../../components/Gallery';
import Message from '../../components/Forms/Message';

function Home() {
  const Hero = styled.div`
    background-image: url(${HeroImg});

    /* Set a specific height */
    height: 100vh;

    /* Position and center the image to scale nicely on all screens */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  `;

  const HeroText = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--primary);
  `;
  return (
    <>
      <Hero>
        <HeroText>
          <p>04/02/2023</p>
          <h1>Julianne Teixeira & Renato Spíndola</h1>
        </HeroText>
      </Hero>
      <Countdown date={`2023-02-04T00:00:00`} />
      <About />
      <Gallery />
      <Message />
    </>
  );
}

export default Home;
