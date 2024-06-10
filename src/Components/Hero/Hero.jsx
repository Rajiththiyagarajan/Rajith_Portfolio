import React from 'react';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import rj from '../../assets/rj.jpg';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={rj} alt="Profile" className='profile-img' />
      <h1><span>I'm Rajith,</span> frontend developer - React</h1>
      <p>I am a frontend developer from Nagercoil</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <div className="hero-resume">
          <a href="/Rajith_Portfolio/RajithReact.pdf" target="_blank" className="anchor-link">My resume</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
