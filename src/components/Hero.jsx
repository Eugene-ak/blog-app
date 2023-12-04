import React from 'react'
import HeroImage from '../constants/images/HeroImage';
import BlogPlates from '../constants/Texts/BlogPlates';

const Hero = () => {
  return (
    <div className='hero'>
      <HeroImage />
      <div className='hero-message'>
        <BlogPlates />
      </div>
    </div>
  )
}

export default Hero;
