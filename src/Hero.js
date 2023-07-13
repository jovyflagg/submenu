import React from 'react'
import phoneImg from './images/phone.svg'
import {useGlobalContext} from './context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext();
  
  return(
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className='hero-info'>
          <h1>Payments infrastructure for the internet</h1>
          <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsa laborum, quod quas dolores et, repudiandae nobis est culpa laboriosam similique aut facere!
          </p>
          <button className="btn">Start Now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  )
}

export default Hero
