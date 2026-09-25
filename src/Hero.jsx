import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Affogato jacobin blundstones meggings bauhaus tacos bruh kettlebell. Bandcamp n+1
            mercury retrograde open studio, ice bath franzen flexitarian crochet whatever
            microdosing mushrooms gatekeep carhartt nervous system cloud bread. Molly baz mitski
            offill before they sold out crochet hella zines A24.
          </p>
        </div>

        <div className='img-container'>
          <img src={heroImg} alt='woman and the browser' className='img' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
