import React from 'react'
import {Link} from 'react-router-dom'
import './homeStyle.scss'
import images from '../../assets/img'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'


function Home() {
  return (
    <section className='home wide' >
      <div className="home__container grid">
        <img src={images.homeImg} alt="home img" className="home__img" />
        <div className="home__data">
          <h1 className="home__title">
            enjoy delicious
            <div>
              <img src={images.homeImgTitle} alt="sushi title" />
              shushi food
            </div>
          </h1>
          <p className="home__description">
          Enjoy a good dinner with the best dishes in 
          the restaurant and improve your day.
          </p>  
          <Link to='/' className='button'>
            order now
            <FontAwesomeIcon icon={faArrowRight} className='icon'/>
          </Link>
        </div>
      </div>
      <img src={images.leafBranch2} alt="nav  image" className='home__leaf1'/>
      <img src={images.leafBranch4} alt="nav  image" className='home__leaf2'/>
      
    </section>
  )
}

export default Home
