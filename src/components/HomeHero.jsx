import BlogPlates from '../constants/Texts/BlogPlates';
import HeroImage from '../assets/heroImage.jpeg'

const Hero = () => {
  return (
    <div className='home-hero'>
      <img src={ HeroImage } alt="hero" />
      {/* <div className='hero-message'>
        <BlogPlates />
      </div> */}
    </div>
  )
}

export default Hero;
